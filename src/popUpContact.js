
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
//import Resume from './resources/Resume.jpeg';


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
          <h2>Thanks for reaching out!</h2>
          </div>
          <button className='close_button' onClick={this.props.closePopup}>CLOSE</button>
          </div>
        </div>
      );
    }
  }


export default class ContactPopup extends React.Component {
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
        <div className='popup-body'>
        <div className="popup-resume">
		<button className="resume-button" onClick={this.togglePopup.bind(this)}>CONTACT ME</button>
        </div>
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