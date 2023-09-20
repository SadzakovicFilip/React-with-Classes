import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state={
      name:{firstname:"Filip",lastname:"Sadzakovic"},
      company : "Comfy Nest"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}</p>
          <button onClick={()=>this.setState({name:{firstname:"Mgitaja",lastname:"Przic"}})}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
