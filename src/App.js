import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super()
    this.state = {
        display: 'none',
        classN: 'spacer',
    }
  }

  hideStuff = () => {
    this.setState({ display: 'flex' })
    this.setState({ classN: 'spacer-reduced' })
  }

  render() {
    return (
      <div className="main-body">
        <div className={ this.state.classN }></div>
        <div className="title">
          <h1>sambarker.com</h1>
          <div className="banner">Python Developer | Web Developer</div>
          <div className="links">
            <a href="#"><div className="link link-current">Home</div></a>
            <a href="#"><div className="link" onClick={this.hideStuff}>About</div></a>
            <a href="#"><div className="link">Portfolio</div></a>
            <a href="#"><div className="link">Contact</div></a>
          </div>
        </div>
        <div className="main-content" style={{display: this.state.display}}><h3>Hello</h3></div>
      </div>
    );
  }
}

export default App;
