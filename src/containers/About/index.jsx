import React from 'react';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Button from '@material-ui/core/Button';

const About = ({
                   profileUrl,
                   handleNavigate,
                   contactOption,
                   overview
               }) => {
    return (
        <div className="section-about">
            <div className="avatar-wrapper">
                <div className="avatar-container" style={{backgroundImage: `url("${profileUrl}")`}}>

                </div>
            </div>
            <div className="about-wrapper">
                <div className="about-container">
                    <div className="contact-container">
                        <div className="icon-wrapper">
                            <a onClick={() => handleNavigate('contact')}>
                                <MailIcon color="action" />
                            </a>
                        </div>
                        {contactOption.linkedin && <div className="icon-wrapper">
                            <a href={contactOption.linkedin}>
                                <LinkedInIcon color="action" />
                            </a>
                        </div>}
                        {contactOption.phone && <div className="icon-wrapper">
                            <a onClick={() => handleNavigate('contact')}>
                                <PhoneAndroidIcon color="action"/>
                            </a>
                        </div>}
                    </div>
                    <p>{overview}</p>
                    <div className="action-container">
                        <Button color="primary" variant="contained" >DOWNLOAD CV</Button>
                        <Button color="primary" variant="contained" onClick={() => handleNavigate('contact')} >CONTACT ME</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About