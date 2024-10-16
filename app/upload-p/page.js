'use client';
import styles from '../upload-b/upload.module.css';
import { useState } from 'react';
import axios from 'axios';

export default function UploadPage() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadUrl, setUploadUrl] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        // Clear previous upload details
        setUploadUrl('');
        setImgUrl('');
        setError('');
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setError('Please select a file first.');
            return;
        }

        setLoading(true);

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);

        reader.onloadend = async () => {
            try {
                const response = await axios.post('/api/uploads', { data: reader.result }, {
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.data.url) {
                    setUploadUrl(response.data.url);
                    setImgUrl(response.data.thumburl);
                }
            } catch (error) {
                setError('Error uploading file. Please try again.');
                console.error('Error uploading file:', error);
            } finally {
                setLoading(false);
            }
        };
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Upload PDF</h1>
            <div className={styles.inputWrapper}>
                <input type="file" onChange={handleFileChange} className={styles.input} />
                <button 
                    onClick={handleUpload} 
                    className={styles.button} 
                    disabled={loading}
                >
                    {loading ? (<div className={styles.spinner}></div>) : ('Upload')}
                </button>
            </div>
            {error && <div className={styles.error}>{error}</div>}
            {uploadUrl && (
                <div className={styles.uploadedLinks}>
                    <h3>PDF Successfully Uploaded</h3>
                </div>
            )}
        </div>
    );
}
