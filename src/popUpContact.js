import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Resume from './resources/Resume.jpeg';


class Popup extends React.Component{
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <div className='contact'>
          <h1>Contact Info</h1>
          <h2>Elliot Davis Broach</h2>
          <h2>Ellbroach@gmail.com</h2>
          <h2>203-803-8817</h2>
          <h2>https://github.com/Ellbroach</h2>
          <h3>Thanks for reaching out!</h3>
          </div>
          <button className='close_button' onClick={this.props.closePopup}>Close</button>
          </div>
        </div>
      );
    }
  }


export default class Contact extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div className='button'>
        <span className="button__mask" />
                <span className="button__text">Contact Me</span>
                <span onClick={this.togglePopup.bind(this)} className="button__text button__text--bis">Contact Me</span>
          {/* <button onClick={this.togglePopup.bind(this)}>Resume</button> */}
          {this.state.showPopup ? 
            <Popup
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  };