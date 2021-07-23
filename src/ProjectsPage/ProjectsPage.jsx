import React, { Component } from 'react';
import './ProjectsPage.css';
import sneaker from './Projects/Sneaker.jpg';
import swimhole from './Projects/Swimhole.jpg';
import connect from './Projects/ConnectIV.png';
import bols from './Projects/BoLSInteractive.jpg';
import neruda from './Projects/Neruda.png'

class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                <img className="pro1" src={sneaker} alt="Sneaker Headz" />
                <div className="link1">
                    <p>SneakerHEADz is an app designed to allow shoe enthusiasts to add and view a collection of sneakers.
                    Whether it's to show the some drip or trade for chip, Sneakerheadz is the community to be in!
                    <br></br>
                        <br></br>
                    This app was developed in a group using Python3, Django, CSS, Javascript, HTML, and AWS S3.</p>
                    <a href="https://sneaker-headz.herokuapp.com/" >SneakerHeadz</a>
                </div>

                <img className="pro2" src={connect} alt="Connect IV" />
                <div className="link2">
                    <p>CONNECT IV is a two player game wherein the objective is to connect four of your pieces
                    horizontally, vertically, or diagonally, while preventing your opponent from doing the same!
                    In this version take on the role of the Patricians in their ancient game of wit and leisure. This
                    simple Roman-themed app is done with Javascript, HTML, and CSS.</p>
                    <a href="https://aventine-hub.github.io/CONNECT-IV/" >ConnectIV</a>
                </div>

                <img className="pro3" src={bols} alt="BoLS Interactive" />
                <div className="link3">
                    <p>BoLS Interactive is a Wordpress project created for the marketing wing of a large wargames news network. It was built to
                    the specifics of the client using the HEAP theme by Pixelgrade.
                    <br></br>
                        <br></br>
                    Included refactoring legacy PHP with limited functionality.
                    <br></br>
                        <br></br>
                    Resulted in 150% increase in through traffic for website.
                    </p>
                    <a href="https://www.bolsinteractive.com/" >BoLS Interactive</a>
                </div>

                <img className="pro4" src={neruda} alt="Neruda" />
                <div className="link4">
                    <p>Reduced largest contentful paint by 68% from 1.6 seconds to .5 seconds by running web
                    performance test to identify opportunities to speed up the application.
                    <br></br>
                        <br></br>
                    Refactored for best practices by validating HTML and CSS using W3C Markup Validation Service.
                    <br></br>
                        <br></br>
                    Optimized design for 8 screen sizes (desktop and mobile) using Responsively app, flexbox,
                    and media queries.
                    </p>
                    <a href="https://aventine-hub.github.io/neruda/" >Neruda</a>
                </div>

                <img className="pro5" src={swimhole} alt="Swim Hole" />
                <div className="link5">
                    <p>SWIM HOLE is an app designed to help users find and keep track of their favorite off-the-grid swimming spots.
                    Users can create new swimming locations based off their coordinates and leave reviews and information about them
                    for others. This app was developed using JavaScript, HTML, CSS, NodeJS, Express, MongoDB, Mongoose,
                    and the Google Maps API.</p>
                    <a href="https://swim-hole.herokuapp.com/locations" >SwimHOLE</a>
                </div>
            </div>
        );
    }
}
export default ProjectsPage;