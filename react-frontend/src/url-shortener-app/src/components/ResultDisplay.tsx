import React from 'react';

interface ResultDisplayProps {
    shortenedUrl: string | null;
    errorMessage: string | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ shortenedUrl, errorMessage }) => {
    return (
        <div>
            {errorMessage ? (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            ) : (
                shortenedUrl && (
                    <div>
                        <p>Your shortened URL:</p>
                        <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                            {shortenedUrl}
                        </a>
                    </div>
                )
            )}
        </div>
    );
};

export default ResultDisplay;