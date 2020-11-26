import React from 'react';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import './style.scss';

const Contact = React.forwardRef((props, ref) => {
    const {
        contactOption
    } = props;
    return (
        <div className="section-contact" ref={ref}>
            <div className="section-wrapper">
                <h1>CONTACT</h1>
                <div className="contact-container">
                    <div className="side-left">
                        {contactOption.phone && <div className="contact-item-container">
                            <i className="ion-android-phone-portrait" />
                            <span>{contactOption.phone}</span>
                        </div>}
                        {contactOption.email && <div className="contact-item-container">
                            <i className="ion-email" />
                            <span>{contactOption.email}</span>
                        </div> }
                        {contactOption.linkedin && <div className="contact-item-container">
                            <i className="ion-social-linkedin" />
                            <span>{contactOption.linkedin}</span>
                        </div> }
                        {contactOption.address && <div className="contact-item-container">
                            <i className="ion-ios-location" />
                            <span>{contactOption.address}</span>
                        </div> }
                    </div>
                    <div className="side-right">
                        <Input className="form-input" placeholder="Name" />
                        <Input className="form-input" placeholder="Subject" />
                        <Input className="form-input" placeholder="Email" />
                        <Input className="form-input" multiline={true} rows={4} placeholder="Massage" />
                        <Button color="primary">Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Contact;
