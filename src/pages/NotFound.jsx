import React from 'react';
import '@styles/NotFound.css'

function NotFound() {
    return (
    <div className="error-container">
        <img src="https://http.cat/404" />
        <h1 className='error-container-text'>Something went wrong</h1>
    </div>
    );
}

export { NotFound };
