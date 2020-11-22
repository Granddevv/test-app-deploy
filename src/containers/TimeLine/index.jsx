import React from 'react';
import './style.scss';
import AdjustIcon from '@material-ui/icons/Adjust';

const TimeLine = ({history, sectionTitle}) => {
    return (
        <div className="timeline-container">
            <div className="timeline-wrapper">
                <div className="title-container">
                    <h1>{sectionTitle}</h1>
                </div>
                <div className="timeline center-block">
                    <ul>
                        {history.map(historyItem => (
                            <li className="card" data-aos="fade-up">
                                <div className="icon-point" />
                                <div className="timeline-content">

                                    <div className="timeline-header">
                                        <h3 className="text-capitalize">{historyItem.title}</h3>
                                    </div>

                                    <p className="sub-heading">{historyItem.companyName} - {historyItem.country}</p>
                                    <p className="sub-heading">{historyItem.period}</p>

                                    <p className="content-p">
                                        {historyItem.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TimeLine