'use client'
// components/Flipbook.js
import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/build/pdf.worker.entry';
import 'turn.js';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

export default function Flipbook({ pdfUrl }) {
  const flipbookRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    if (!pdfUrl) return;

    const loadPDF = async () => {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      setNumPages(pdf.numPages);

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        const pageElement = document.createElement('div');
        pageElement.className = 'pdf-page';
        pageElement.appendChild(canvas);
        flipbookRef.current.appendChild(pageElement);
      }

      // Initialize turn.js after the pages are added
      const flipbook = flipbookRef.current;
      if (flipbook) {
        flipbook.turn({
          width: 800,
          height: 600,
          autoCenter: true,
        });
      }
    };

    loadPDF();

    return () => {
      // Cleanup turn.js on component unmount
      const flipbook = flipbookRef.current;
      if (flipbook && flipbook.turn) {
        flipbook.turn('destroy').remove();
      }
    };
  }, [pdfUrl, scale]);

  const zoomIn = () => setScale((prev) => prev + 0.1);
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.1, 0.1));
  const closeFlipbook = () => {
    if (flipbookRef.current) {
      flipbookRef.current.innerHTML = '';
    }
  };

  return (
    <div>
      <div>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={closeFlipbook}>Close</button>
      </div>
      <div
        id="flipbook"
        ref={flipbookRef}
        style={{ margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      ></div>
    </div>
  );
}
