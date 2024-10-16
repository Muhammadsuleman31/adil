// components/PdfReader.js
import React, { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer } from '@react-pdf-viewer/core';

export default function PdfReader({ fileUrl ,set}) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const handleClick = () => {
        set('');
        console.log(fileUrl);
       }; 

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            { (
                <div style={{ height: '100%' }}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
                    </Worker>
                    <button
                        onClick={handleClick}
                        style={{
                            position: 'absolute',
                            zIndex: 3000,
                            top: '5px',
                            right: '10px',
                            padding: '4px 10px',
                            backgroundColor: 'red',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '20px'
                        }}
                    >
                        x
                    </button>
                </div>
            )}
        </div>
    );
}
