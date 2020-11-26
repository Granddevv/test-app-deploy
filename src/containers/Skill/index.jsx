import React from 'react';
import './style.scss';
import ProgressBar from './ProgressBar';

const Skill = React.forwardRef((props, ref) => {
    const {
        skillOption
    } = props;
    return (
        <div className="section-skill" ref={ref}>
            <div className="skill-section-wrapper">
                <h1>SKILLS</h1>
                <div className="skill-container">
                    {skillOption.map(skillItem => (
                        <div className="skill-panel">
                            <h3>{skillItem.title}</h3>
                            {skillItem.skillItem.map(item => (
                                <ProgressBar
                                    title={item.key}
                                    value={item.value}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
})

export default Skill