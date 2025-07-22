import React, { useState } from 'react';
import ShortenForm from '../components/ShortenForm';
import ResultDisplay from '../components/ResultDisplay';

const HomePage: React.FC = () => {
    const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleUrlSubmit = async (url: string) => {
        try {
            // Simulate an API call to shorten the URL
            const response = await fetch('https://api.example.com/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error('Failed to shorten URL');
            }

            const data = await response.json();
            setShortenedUrl(data.shortenedUrl);
            setErrorMessage(null);
        } catch (error) {
            setErrorMessage(error.message);
            setShortenedUrl(null);
        }
    };

    return (
        <div>
            <h1>URL Shortener</h1>
            <ShortenForm onSubmit={handleUrlSubmit} />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {shortenedUrl && <ResultDisplay shortenedUrl={shortenedUrl} />}
        </div>
    );
};

export default HomePage;