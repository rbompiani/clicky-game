import React from 'react';
import './App.css';
import heros from "./heros.json";
import Wrapper from "./components/Wrapper";
import HeroCard from "./components/HeroCard";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state= {
    heros,
    "score":0,
    "highScore":0
  };

  

selectCard = id => {
  // store heros and find index of selected hero
  let heros = this.state.heros;
  // shuffle array of heros
  heros.sort(function() { return 0.5 - Math.random() });
  const foundIndex = heros.findIndex(hero => hero.id === id);

  // ALREADY SELECTED - END GAME AND RESET SELECTED PROPS
  if (heros[foundIndex].selected === true){
    // reset all heros selected to false
    heros = heros.map(e => {
      e.selected = false;
      return e;
    });
    // reset current score
    this.setState({score: 0, heros: heros});

  // NOT ALREADY SELECTED - SET SELECTED, ADD TO SCORE, SET HIGH SCORE, SHUFFLE ARRAY
  } else {
    //set hero to selected
    heros[foundIndex].selected = true;
    // is current score high score?
    if (this.state.score === this.state.highScore){
      this.setState({score: this.state.score+1, highScore: this.state.score+1, heros: heros });      
    } else {
      this.setState({score: this.state.score+1, heros: heros})
    } 
  }
};

  render() {
    return (
      
      <Wrapper>
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        <main>
          {this.state.heros.map(hero => (
            <HeroCard id={hero.id} key={hero.id} image={hero.image} selected={hero.selected} selectCard={this.selectCard}/>
          ))}          
        </main>

      </Wrapper>
    )
  }
}

export default App;
