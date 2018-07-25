import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './resources/Far_4K_Motion_Background_Loop (1).mp4';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id="wrapper">
    <video id="video" loop autoPlay muted preload='auto'>
        <source type="video/webm" src={Background} />
    </video>
    <div className="form">
        <h1>Hello, my name is Elliot</h1>
        <h2>Thanks for stopping by ...</h2>
        <form>
            <label for="input">Form Input Label</label>
            <input id="input" name="input" value="" />
            <button type="submit">Submit</button>
        </form>            
    </div>
</div>
</div>
    );
  }
}

export default App;


        {/* <div className='overlay'>
        <h1>Hello, my name is Elliot</h1>
        <h1>Thanks for stopping by...</h1>
            <video className="background-video" loop autoPlay muted preload='auto'>
                <source src={Background} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Site, change</h1>
        </header> */}
