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

  //this.setState({score: id});
  const foundIndex = this.state.heros.findIndex(x => x.id === id);
  console.log(foundIndex);
  const selectedProp = this.state.heros[foundIndex].selected;
  const score= this.state.score;

  if (selectedProp === true){
    this.setState({score: 0});
  } else {
    this.setState({score: score+1})
      let newState = Object.assign({}, this.state);
      newState.heros[foundIndex].selected = true;
    this.setState({newState});
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
