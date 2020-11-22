import React from 'react';
import './style.scss';

const Spinner = ({
    firstName,
    lastName
                 }) => {
    return (
        <div id="page-loader">
            <div className="animated bounceInDown">
                <div className="spinner"></div>
            </div>
            <div className="text-div text-center animated zoomIn">
                <p className="text-uppercase">INTRODUCING</p>
                <h6 className="text-uppercase">{firstName} {lastName}</h6>
            </div>
        </div>
    )
}

export default Spinner;