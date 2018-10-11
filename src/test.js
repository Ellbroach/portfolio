import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';


class Popup extends React.Component{
    render() {
        // const {beer} = this.props
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>Hello</h1>
            <h2>Dude</h2>
            <h3>Work</h3>
          <button onClick={this.props.closePopup}>close</button>
          </div>
        </div>
      );
    }
  }


export default class TestBody extends React.Component {
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
          <button onClick={this.togglePopup.bind(this)}>Read Description</button>
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