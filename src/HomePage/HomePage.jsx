import React, { Component } from 'react';
import './HomePage.css';
import hex from './hexpattern.png';


class HomePage extends Component {
    render() {
        return (
            <div className="grid">
                <h2>Chris Allen Long</h2>
                <h4>FULL STACK SOFTWARE ENGINEER</h4>
                <img className="hexpattern" src={hex} alt="hex pattern" />
            </div>
        );
    }
}
export default HomePage;