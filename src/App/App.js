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
          <Route exact path='/' render={() => <HomePage />} />
          <Route exact path='/about' render={() => <AboutPage />} />
          <Route exact path='/resume' render={() => <ResumePage />} />
          <Route exact path='/projects' render={() => <ProjectsPage />} />
        </Switch>
      </>
    );
  }
}

export default App;

