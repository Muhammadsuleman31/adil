'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './pitch-deck-samples.module.css';
import Image from 'next/image';

const PdfReader = dynamic(() => import('../component/PdfReader'), { ssr: false });

export default function PdfPage() {
  const [fileUrl, setFileUrl] = useState('');
  const [images, setImages] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/datap');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(images)

  const handleClick = async (event) => {
    const img = event.currentTarget.querySelector('img');
    const url = img.alt;
    setFileUrl(url);
   
  };

  return (
    <>
      <div className={styles.reader}>
        
        {fileUrl ? <div className={styles.pdfcontainer}> <PdfReader fileUrl={fileUrl} set={setFileUrl} /> </div> : 
     
      <div className={styles.main}>
        <div className={styles.title}>Pitch Deck Samples</div>
        <div className={styles.plancontainer}>
          {images.map((item, index) => (
            <div key={index} onClick={handleClick} className={styles.planitem}>
              <Image
                src={item.thumburl}
                alt={item.url}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          ))}
        </div>
      </div>}
      </div>
    </>
  );
}
