import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import HomePage from '../HomePage/HomePage'
import AboutPage from '../AboutPage/AboutPage'
import ResumePage from '../ResumePage/ResumePage'
import ProjectsPage from '../ProjectsPage/ProjectsPage'

class App extends Component {

  render() {
    return (
      <>
        <header>
          <nav>
            <NavBar />
          </nav>
        </header>

        <Switch>
          <Route exact path='/' render={() => <><HomePage /><AboutPage /> </>} />
          <Route exact path='/resume' render={() => <ResumePage />} />
          <Route exact path='/projects' render={() => <ProjectsPage />} />
        </Switch>

        <footer>
          &nbsp;
          <h5>Portfolio coded in <span>React</span> by <span>CAL</span> </h5>
        </footer>

      </>
    );
  }
}

export default App;

