import React from 'react';
import './style.scss'

const Archievement = ({
                          certifications
                      }) => {
    return (
        <div className="section-archievement">
            <div className="section-wrapper">
                <h1>ARCHIVEMENT</h1>
                <div className="archieve-container">
                    {certifications.map(certification => (
                        <div className="item-container">
                            <div className="title-container">
                                <h3>{certification.title}</h3>
                            </div>
                            <div className="content-container">
                                <img className="cert-logo" src={certification.url} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Archievement