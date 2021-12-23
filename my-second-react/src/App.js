import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Profile.js";
import Navbar from "./Navbar"



const name ='Ahmed';
  const lastName='Hachemi'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
      <Navbar/>
      <Profile style={{margin:'auto'}}/>
    </div>
  );
