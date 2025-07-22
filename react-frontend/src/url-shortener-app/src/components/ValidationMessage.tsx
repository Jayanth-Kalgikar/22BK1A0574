import React from 'react';

interface ValidationMessageProps {
    message: string;
}

const ValidationMessage: React.FC<ValidationMessageProps> = ({ message }) => {
    return (
        <div style={{ color: 'red', marginTop: '10px' }}>
            {message}
        </div>
    );
};

export default ValidationMessage;