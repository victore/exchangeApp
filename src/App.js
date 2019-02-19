import React, { Component } from 'react';
import Exchange from './Exchange';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Exchange App</h1>
        </header>
        <div className="main1">
          <Exchange />
        </div>
      </div>
    );
  }
}

export default App;
