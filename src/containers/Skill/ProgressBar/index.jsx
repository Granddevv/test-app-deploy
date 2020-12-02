import React from 'react';
import './style.scss';

const ProgressBar = ({
    title,
    value
                     }) => {
    return (
        <div className="progress-container">
            <div className="title-container">
                <h4>{title}</h4>
                <h4>{value}%</h4>
            </div>
            <div className="bar-container">
                <div className="bar-point" style={{left: `${value - 4}%`}}></div>
                <div className="bar-content"></div>
                <div className="bar-content-fill" style={{width: `${value}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar;