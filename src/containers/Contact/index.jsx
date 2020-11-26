import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import './style.scss';
import { sendEmailByJS } from '../../service/email';

const Contact = React.forwardRef((props, ref) => {
    const {
        contactOption
    } = props;

    const handleSubmit = async () => {
        await sendEmailByJS(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            {
                from_name: name,
                from_email: email,
                message: message,
                to_email: contactOption.email,
                subject: subject,
                to_name: contactOption.name
            },
        );
    }

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
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
                        <Input className="form-input" placeholder="Name" value={name} onChange={(evt) => setName(evt.target.value)}/>
                        <Input className="form-input" placeholder="Subject" value={subject}  onChange={(evt) => setSubject(evt.target.value)}/>
                        <Input className="form-input" placeholder="Email" value={email}  onChange={(evt) => setEmail(evt.target.value)}/>
                        <Input className="form-input" multiline={true} rows={4} placeholder="Message" value={message}  onChange={(evt) => setMessage(evt.target.value)} />
                        <Button color="primary" onClick={() => handleSubmit()}>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Contact;
