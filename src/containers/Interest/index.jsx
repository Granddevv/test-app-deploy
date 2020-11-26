import React from 'react';
import './style.scss';

const Interest = React.forwardRef((props, ref) => {
    const {
        interest
    } = props
    return (
        <div className="section-interest" ref={ref}>
            <div className="section-wrapper">
                <h1>INTEREST</h1>
                <div className="interest-container">
                    <p>{interest.title}</p>
                    <div className="items-container">
                        {interest.options.map(option => (
                            <div className="item-wrapper">
                                <i className={option.iconName} />
                                <span>{option.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Interest;