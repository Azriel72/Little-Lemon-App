import React from 'react';
import '../Alert.css';

function Alert({ message, onClose }) {
    return (
        <div className="alert">
            <span>{message}</span>
            <button className="close-button" onClick={onClose}>×</button>
        </div>
    );
}

export default Alert;
