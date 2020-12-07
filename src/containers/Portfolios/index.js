import React, { useState } from 'react';
import './style.scss'

const Portfolios = React.forwardRef((props, ref) => {
    const {
        portfolios
    } = props;

    const [ modalFlag, setModalFlag ] = useState(false);

    return (
        <div className="section-portfolio" ref={ref}>
            <div className="section-wrapper">
                <h1>PORTFOLIOS</h1>
                <div className="portfolio-section">
                    {portfolios.map(portfolioItem => (
                        <div className="item-container">
                            <div className="image-container" style={{backgroundImage: `url("${portfolioItem.url}")`}} onClick={() => setModalFlag(true)}>
                                <div className="detail-option">
                                    <span>View Details</span>
                                </div>
                            </div>
                            <div className="title-container">{portfolioItem.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
})

export default Portfolios