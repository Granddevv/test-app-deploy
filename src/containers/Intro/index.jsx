import React from 'react';
import './style.scss';

const Intro = React.forwardRef((props, ref) => {
    const {
        firstName,
        lastName,
        title
    } = props;
    return (
        <div className="section-intro" ref={ref}>
            <h2>{firstName} {lastName}</h2>
            <h3>{title}</h3>
        </div>
    )
})

export default Intro