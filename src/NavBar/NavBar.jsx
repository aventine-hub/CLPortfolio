import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import hex from './hexpattern.png';


const NavBar = () => {
    let nav =

        <div className="Nav">
            <Link to=''><img className="hexpattern" src={hex} alt="hex pattern" /></Link>
            <NavLink className="link" exact to='/' >Home</NavLink>
      &nbsp;|&nbsp;
      <NavLink className="link" exact to='/resume' >Resume</NavLink>
      &nbsp;|&nbsp;
      <NavLink className="link" exact to='/projects' >Projects</NavLink>
      &nbsp;|&nbsp;
      <a className="link" href="https://www.linkedin.com/in/chrisallenlong/" >LinkedIn</a>
      &nbsp;|&nbsp;
      <a className="link" href="https://github.com/aventine-hub/" >GitHub</a>
        </div>

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;

