import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../rendom-planet";
import PeoplePage from "../people-page";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };


  toogleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
    return (
      <div className='stardb-app'>
        <Header/>
        {planet}
        <div className='row mb2 button-row'>
          <button className="toggle-planet btn btn-warning btn-lg"
                  onClick={this.toogleRandomPlanet}>
            Toggle Random Planet
          </button>

        </div>
        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>
      </div>
    )
  };
}
