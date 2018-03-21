import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
// import Presenter from '../src/components/presenter/Presenter';
// import Slide1 from './components/Slide1';
// import Slide2 from './Slide2';
import './App.css';
import Canvas from "./components/Canvas";

class App extends Component {
  render() {
    return (
        <Canvas/>
        //<BrowserRouter>
        //   <Route path='/' component={App}/>
        //</BrowserRouter>
    );
  }
}

export default App;
