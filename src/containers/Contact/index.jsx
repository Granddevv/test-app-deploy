import React from 'react';
import Input from '@material-ui/core/Input';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import './style.scss';

const Contact = React.forwardRef((props, ref) => {
    return (
        <div className="section-contact" ref={ref}>
            <div className="section-wrapper">
                <h1>CONTACT</h1>
                <div className="contact-container">
                    <div className="side-left">

                    </div>
                    <div className="side-right">
                        <Input placeholder="Name" />
                        <Input placeholder="Subject" />
                        <Input placeholder="Email" />
                        <TextareaAutosize
                            rowsMax={4}
                            aria-label="maximum height"
                            placeholder="Maximum 4 rows"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
                        />
                        <Button color="primary">Send</Button>

                    </div>
                </div>
            </div>
        </div>
    )
})

export default Contact;
