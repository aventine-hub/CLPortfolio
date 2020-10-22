import React, { Component } from 'react';
import './HomePage.css';
import hex from './hexpattern.png';


class HomePage extends Component {
    render() {
        return (
            <div className="grid">
                <h1>Chris Allen Long</h1>
                <h3>FULL STACK SOFTWARE ENGINEER</h3>


                <img className="hexpattern" src={hex} alt="hex pattern" />

            </div>
        );
    }
}
export default HomePage;