import React, { Component } from 'react';
import './css/App.css';
import Main from './components/main/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.handlePrev = this.handlePrev.bind(this);
  }

  handlePrev() {
    console.log("go back")
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
