import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className="about">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="img2" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image href="forest copy.jpg" x="-25" width="150" height="100" />
                        </pattern>
                    </defs>
                    <polygon id="hex" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img2)" />

                </svg>
                <h1>Chris Long</h1>
                <div>Hello! I am a creative and result-oriented full-stack web developer with a passion for learning.
                My communication, patience, and ability to synthesize and pass on information is rooted in my previous
                experience as an elementary school educator and manager.
                I strive to create efficient, effective, and innovative solutions to complex problems.
                <br></br>
                </div>
                <h2>Skills</h2>
                <span>Javascript | Python | Java | Django | React.js | Cascading Style Sheets | Git | GitHub | PHP | PostgreSQL | MongoDB | Node.js | HTML5 | Wordpress | Problem Solving | Communication | Leadership | Collaboration | Mentor  </span>
            </div>

        );
    }
}
export default AboutPage;