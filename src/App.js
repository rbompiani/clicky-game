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
  let heros = this.state.heros;
  const hero = heros.find(hero => hero.id === id);
  const foundIndex = heros.findIndex(hero => hero.id === id);

  // ALREADY SELECTED - END GAME AND RESET SELECTED PROPS
  if (heros[foundIndex].selected === true){
    // reset current score
    this.setState({score: 0});

  // NOT ALREADY SELECTED - SET SELECTED, ADD TO SCORE, SET HIGH SCORE, SHUFFLE ARRAY
  } else {
    this.setState({score: this.state.score+1})
      heros[foundIndex].selected = true;
    this.setState({heros: heros});
  }

  // } else {
  //   this.setState((state, id) => {
  //     return {counter: state.counter + props.step};
  //   });
  //   this.state.heros[foundIndex].selected = true;
  // }
};

  render() {
    {console.log(this.state);}
    return (
      
      <Wrapper>
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        {this.state.heros.map(hero => (
          <HeroCard id={hero.id} key={hero.id} image={hero.image} selected={hero.selected} selectCard={this.selectCard}/>
        ))}
      </Wrapper>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
