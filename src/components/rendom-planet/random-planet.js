import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import './random-planet.css';
import Spiner from "../spiner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet()
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false})
  };

  updatePlanet() {
    const id = 200000
    // const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const {planet, loading, error} = this.state
    const hasDate = !(loading || error);
    const errorMessage = error ? <ErrorIndicator/> : null
    const spiner = loading ? <Spiner/> : null
    const content = hasDate ? <PlanetView planet={planet}/> : null

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spiner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, planetName, population, rotationPeriod, diameter} = planet

  return (
    <React.Fragment>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
      <div>
        <h4>{planetName}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
