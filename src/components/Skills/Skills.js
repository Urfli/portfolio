import React from 'react'
import {InnerLayout} from '../../styles/Layouts';
import Title from '../../Components/Title/Title';
import ProgressBar from '.././ProgressBar/ProgressBar';
import './Skills.css';

function Skills() {
    return (
        <div className='skillstyle'>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'75%'}
                            text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </div>
    )
}

export default Skills;
