import React, { Component } from 'react';
import './ProjectsPage.css';
import sneaker from './Projects/Sneaker.png';
import swimhole from './Projects/Swimhole.png';
import connect from './Projects/ConnectIV.png';


class ProjectsPage extends Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                <img className="pro1" src={connect} alt="Connect IV" />
                <div className="link1">
                    <p>CONNECT IV is a two player game wherein the objective is to connect four of your pieces
                    horizontally, vertically, or diagonally, while preventing your opponent from doing the same!
                    In this version take on the role of the Patricians in their ancient game of wit and leisure. This
                    simple Roman-themed app is done with Javascript, HTML, and CSS</p>
                    <a href="https://aventine-hub.github.io/CONNECT-IV/" >ConnectIV</a>
                </div>

                <img className="pro2" src={swimhole} alt="Swim Hole" />
                <div className="link2">
                    <p>SWIM HOLE is an app designed to help users find and keep track of their favorite off-the-grid swimming spots.
                    Users can create new swimming locations based off their coordinates and leave reviews and information about them
                    for others. This app was developed using JavaScript, HTML, CSS, NodeJS, Express, MongoDB, Mongoose,
                    and the Google Maps API.</p>
                    <a href="https://swim-hole.herokuapp.com/locations" >SwimHOLE</a>
                </div>

                <img className="pro3" src={sneaker} alt="Sneaker Headz" />
                <div className="link3">
                    <p>SneakerHEADz is an app designed to allow shoe enthusiasts to add and view a collection of sneakers.
                    Whether it's to show the some drip or trade for chip, Sneakerheadz is the community to be in! This
                    app was developed in a group using Python3, Django, CSS, Javascript, HTML, and AWS S3.</p>
                    <a href="https://sneaker-headz.herokuapp.com/" >SneakerHeadz</a>
                </div>
            </div>
        );
    }
}
export default ProjectsPage;