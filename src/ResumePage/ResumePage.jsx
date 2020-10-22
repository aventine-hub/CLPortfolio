import React, { Component } from 'react';
import './ResumePage.css';
import resume from './Resume.png';


class ResumePage extends Component {
    render() {
        return (
            <div className="flex">
                <br></br>
                <a download href="Chris Long ResumeGA.pdf">Download Resume</a>
                <br></br>
                <img className="resume" src={resume} alt="resume" />

            </div>
        );
    }
}
export default ResumePage;