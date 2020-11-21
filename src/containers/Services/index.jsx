import React from 'react';
import './style.scss';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

const Services = () => {
    return (
        <div className="section-service">
            <div className="section-wrapper">
                <h1>SERVICES</h1>

                <div className="service-container">
                    <div className="service-section-item">
                        <AddToQueueIcon
                            fontSize={'large'}
                            color="action" />
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                    <div className="service-section-item">
                        <AddToQueueIcon color="action" />
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>
                    <div className="service-section-item">
                        <AddToQueueIcon color="action" />
                        <h3>Title</h3>
                        <p>Description</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Services;
