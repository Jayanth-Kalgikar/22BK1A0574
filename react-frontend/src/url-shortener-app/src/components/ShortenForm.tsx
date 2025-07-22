import React, { useState } from 'react';
import ValidationMessage from './ValidationMessage';

const ShortenForm: React.FC<{ onSubmit: (url: string) => void }> = ({ onSubmit }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValidUrl(url)) {
            setError('Please enter a valid URL.');
            return;
        }
        setError('');
        onSubmit(url);
        setUrl('');
    };

    const isValidUrl = (urlString: string) => {
        const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])?)\\.)+[a-z]{2,}|' + // domain name
            'localhost|' + // localhost
            '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
            '\\[?[a-fA-F0-9:*]+\\])' + // IPv6
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!urlPattern.test(urlString);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                placeholder="Enter URL to shorten" 
                required 
            />
            <button type="submit">Shorten</button>
            {error && <ValidationMessage message={error} />}
        </form>
    );
};

export default ShortenForm;