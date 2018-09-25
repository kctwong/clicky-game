import React, { Component } from 'react';

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Animal from "./Animal.json"

import './App.css';

class App extends Component {

  state = {
    Animal,
    clickedAnimal: [],
    score: 0
  };

  imageClick = event => {
    const currentAnimal = event.target.alt;
    const animalAlreadyClicked = this.state.clickedAnimal.indexOf(currentAnimal) >-1;

    if (animalAlreadyClicked){
      this.setState({
          Animal: this.state.Animal.sort(function(a,b){
            return 0.5 - Math.random();
          }),
          clickedAnimal: [],
          score: 0
        }),
        alert("You lost.");
      
    } else {
      this.setState(
        {
        Animal: this.state.Animal.sort(function(a,b){
          return 0.5 - Math.random();
        }),
          clickedAnimal: this.state.clickedAnimal.concat(
            currentAnimal
          ),
          score: this.state.score + 1
        },

        () =>{
          if (this.state.score === 12) {
            alert("You won!");
            this.setState({
              Animal: this.state.Animal.sort(function(a,b){
                return 0.5 - Math.random();
              }),
              clickedAnimal:[],
              score:0
            });
          }
        }
      );
    }
  };



  render(){
    return(
      <div>
        <Navbar
          score = {this.state.score}
        />
        <Jumbotron />
        <div className = "wrapper">
          {this.state.Animal.map(Animal=>(
            <Card
              imageClick = {this.imageClick}
              id = {Animal.id}
              key = {Animal.id}
              image = {Animal.image}
              /> 
          ))}
        </div>
        </div>
    );
  }
}
export default App;
