import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Resume from './resources/Resume.jpg';


class Popup extends React.Component{
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <img src={Resume}/>
          <button className='close_button' onClick={this.props.closePopup}>CLOSE</button>
          </div>
        </div>
      );
    }
  }


export default class ResumePopup extends React.Component {
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
		<button className="resume-button" onClick={this.togglePopup.bind(this)}>RESUME</button>
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