import React from 'react';
import './style.scss';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

const Services = React.forwardRef((props, ref) => {
    const {
        services
    } = props;
    return (
        <div className="section-service" ref={ref}>
            <div className="section-wrapper">
                <h1>SERVICES</h1>

                <div className="service-container">
                    {services.map(item => (
                        <div className="service-section-item">
                            <img src={item.icon} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
})

export default Services;
