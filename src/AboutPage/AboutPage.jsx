import React, { Component } from 'react';
import './AboutPage.css';
// import bootstrap from './images/bootstrap-2.png';
// import css from './images/css-2.png';
// import django from './images/django-2.png';
// import github from './images/github-2.png';
// import html5 from './images/html5-2.png';
// import javascript from './images/javascript-2.png';
// import mongodb from './images/mongodb-2.png';
// import nodejs from './images/nodejs-2.png';
// import postgresql from './images/postgresql-2.png';
// import python from './images/python-2.png';
// import react from './images/react-2.png';
// import wordpress from './images/wordpress-2.png';

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
                <div>I am a creative and result-oriented full-stack web developer with a passion for learning.
                My communication, patience, and ability to synthesize and pass on information is rooted in my previous
                experience as an elementary school educator and manager.
                I strive to create efficient, effective, and innovative solutions to complex problems.
                <br></br>
                </div>
                <h2>Skills</h2>
                <span>Django | Git | GitHub | MongoDB | Node.js | Python | PostgreSQL | React.js | Webflow | Wordpress</span>
                {/* <span><img src={react} alt="" /><img src={mongodb} alt="" /><img src={django} alt="" /><img src={python} alt="" />
                    <img src={html5} alt="" /><img src={javascript} alt="" /><img src={css} alt="" /><img src={nodejs} alt="" />
                    <img src={postgresql} alt="" /><img src={github} alt="" /><img src={bootstrap} alt="" /><img src={wordpress} alt="" /> </span> */}
            </div>

        );
    }
}
export default AboutPage;