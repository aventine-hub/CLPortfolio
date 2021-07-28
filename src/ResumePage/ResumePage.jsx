import React, { Component } from 'react';
import './ResumePage.css';
import resume from './CL Resume.png';

class ResumePage extends Component {
    render() {
        return (
            <div className="flex">
                <br></br>
                <a download href="Chris Long - GA Resume.pdf">Download Resume</a>
                <br></br>
                <img className="resume" src={resume} alt="resume" />

            </div>
        );
    }
}
export default ResumePage;