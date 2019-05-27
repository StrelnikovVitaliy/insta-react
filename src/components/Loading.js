import React from 'react';
import img from '../loading.gif';

const Loading = () => {
    return (
        <div className="loading">
            <img src={img} alt="loading"></img>
        </div>
    )
}

export default Loading;