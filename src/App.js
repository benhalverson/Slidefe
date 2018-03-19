import React, { Component } from 'react';
import Presenter from '../src/components/presenter/Presenter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Presenter slide={1}/>
      </div>
    );
  }
}

export default App;
