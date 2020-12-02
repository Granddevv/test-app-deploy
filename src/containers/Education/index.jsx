import React from 'react';
import './style.scss';

const Education = React.forwardRef((props, ref) => {
    const {
        sectionTitle,
        history
    } = props;

    return (
        <div className="section-education">
            <div className="education-container">
                <h1>{sectionTitle}</h1>
                <div className="education-history-container">
                    {history.map(education => (
                        <div className="education-item-container">
                            <div className="title-container">
                                <h1>{education.title}</h1>
                            </div>
                            <div className="education-content-container">
                                <div className="period-container">
                                    <span>{education.period}</span>
                                </div>
                                <div className="desc-container">
                                    <span>{education.degree + ' in ' + education.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
});

export default Education;