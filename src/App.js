import React from 'react';
import logo from './logo.svg';
import './App.css';
import heros from "./heros.json";
import Wrapper from "./components/Wrapper";
import HeroCard from "./components/HeroCard";
import NavBar from "./components/NavBar";

class App extends React.Component {
  state= {
    heros
  };

  selectCard = id => {
    alert("the card with id "+id+" has been selected")
  };

  render() {
    return (
      <Wrapper>
        <NavBar />
        <HeroCard />
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
