import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
        display: 'none',
        classN: 'spacer',
    }
  }

  about = () => {
    this.setState({ display: 'flex' })
    this.setState({ classN: 'spacer-reduced' })
  }

  render() {
    return (
      <div className="main-body">
        <div className={ this.state.classN }></div>
        <div className="title">
          <h1>Sam Barker</h1>
          <div className="banner">Python Developer | Web Developer</div>
          <div className="links">
            <a href="#"><div className="link" onClick={this.about}>Find Out More</div></a>
          </div>
        </div>
        <div className="main-content" style={{display: this.state.display}}>
          <h3>Hi, I'm Sam.</h3>
          <p>A developer and problem solver with experience working with Python and Javascript.</p>
          <p>Check out my work via the links below.</p>
          <p><a href="https://github.com/samabarker" className="in-body-link">Github</a> | <a href="https://repl.it/@sambarkercom/" className="in-body-link">Repl</a> | <a href="http://sambarker.com" className="in-body-link">sambarker.com</a></p>
          <p>Contact me via <a href="mailto:sam@sambarker.com" className="in-body-link">sam@sambarker.com</a></p>
        </div>
      </div>
    );
  }
}

export default App;
