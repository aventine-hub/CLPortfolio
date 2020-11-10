import React, { Component } from 'react';
import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <div className="about">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image href="chris_photo.png" x="-25" width="150" height="100" />
                        </pattern>
                    </defs>
                    <polygon id="hex" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />

                </svg>
                <h1>About Me</h1>
                <div>I am a creative and result-oriented full-stack web developer with a passion for learning.
                My communication, patience, and ability to synthesize and pass on information is rooted in my previous
                experience as an elementary school educator and manager.
                I strive to create efficient, effective, and innovative solutions to complex problems.
                <br></br>
                    <br></br>
                I have experience with the latest front- and back-end programming languages, tools, and methodologies
                including: HTML, CSS, SASS, Javascript, jQuery, PostgreSQL, MongoDB, Ruby, Ruby on Rails,
                AngularJS, NodeJS, ReactJS, Wordpress, Git, Github, and Agile/Scrum.
                    <ul>
                        <li><a href="https://www.linkedin.com/in/chrisallenlong/" >LinkedIn</a></li>
                        <br></br>
                        <li><a href="https://github.com/aventine-hub/" >Git Hub</a></li>
                    </ul>

                </div>
                <h2>Skills</h2>
                <span>Javascript | Microsoft Excel | Python | Django | React.js | Cascading Style Sheets |
                Git | GitHub | PostgreSQL | MongoDB | Node.js | HTML5 | Problem Solving | Management | Communication |
                Leadership | Training | Teaching </span>

            </div>

        );
    }
}
export default AboutPage;