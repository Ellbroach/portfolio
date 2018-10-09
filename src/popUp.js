import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Resume from './resources/Resume.jpeg';


class Popup extends React.Component{
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <img src={Resume}/>
          <button className='close_button' onClick={this.props.closePopup}>Close</button>
          </div>
        </div>
      );
    }
  }


export default class PopupBody extends React.Component {
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
                <span className="button__text">Resume</span>
                <span onClick={this.togglePopup.bind(this)} className="button__text button__text--bis">Resume</span>
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