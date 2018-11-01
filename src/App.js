import React, { Component } from 'react';
import './App.css';
import './test.css'
import Background from './resources/Far_4K_Motion_Background_Loop (1).mp4';
import Me from './resources/Me.jpg';
import Brew from './resources/True-Brew.png';
import Artifact from './resources/Artifact.mp4';
import Market from './resources/Market-Monitor.png';
import Github from './resources/github-logo-1.png'
import scroll, { Link, DirectLink, Element, Events, animateScroll as 
  //scroll,
   scrollSpy, scroller } from 'react-scroll';
import Popup from './popUp';
import Contact from './popUpContact';
import ReactIcon from './resources/React-icon.dvg.svg';
import ReduxIcon from './resources/redux.svg';
import NodeIcon from './resources/Node.svg';
import SassIcon from './resources/Sass_Logo_Color.svg';
import SequelizeIcon from './resources/sequelize.svg';



class App extends Component {
  constructor(props) {
    super(props);
    window.scroll({
      behavior: "smooth"
    });
  }

  scrollTo() {
    scroller.scrollTo("bio", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <video id="video" loop autoPlay muted preload="auto">
            <source type="video/webm" src={Background} />
          </video>
          <div className="form">
            <h1>Hello, I'm Elliot Broach.</h1>
            <h1>I'm a Fullstack Developer.</h1>
          </div>
        </div>
        <section id="scroll" className="scroll-down">
          <a onClick={() => this.scrollTo()}>
            <span />Explore
          </a>
        </section>
        <div className="bio">
          <div className="image-and-contact">
            <img className='me' src={Me} />
            <div className="button-container">
              <Popup />
              <br />
              <Contact />
            </div>
          </div>
          <h2>
            I graduated from Colgate University in 2017 with a degree in Art
            History and an emphasis in contemporary visual design. I then
            enrolled in Fullstack Academy to learn how to bring my passion for design to the
            web.
          </h2>
        </div>
        <div className='skills'>
        <h1>Skills and Proficiency</h1>
        <div className='skill-images'>
        <div className='react-icon'>
          <img src={ReactIcon}/>
        </div>
        <div className='redux-icon'>
          <img src={ReduxIcon}/>
          </div>
          <div className='sass-icon'>
          <img src={SassIcon}/>
          </div>
          <div className='node-icon'>
          <img src={NodeIcon}/>
          </div>
          <div className='sequelize-icon'>
          <img src={SequelizeIcon}/>
          </div>
        </div>
        <h2>Proficient</h2>
        <h3>React,  Redux,  React-Native,  CSS/SCSS/Sass,  Node.js,  Sequelize,  PostgreSQL</h3>
        <h3>Express, Git, Axios, Webpack</h3>
        <span className='skills-divide'/>
        <h2>Knowledgeable</h2>
        <h3>Less, Firebase, Mocha, Chai, Bluebird</h3>
        <span className='skills-divide'/>
        <h2>Some Experience</h2>
        <h3>D3, Vue, MongoDB</h3>
        </div>
        <div className="projects">
        <h1>Projects</h1>
          <div className="brew">
            <div className="project-image-name">
              <h2>True Brew</h2>
              <img src={Brew} />
            </div>
            <div className="brew-description">
              <h2>
                True Brew was created to address the problem of corporate beer
                conglomerations promoting their products as independent craft
                beer. Beginning with the premise that all breweries represented
                on the site are owned by their founders or employees, True
                Brew is a platform that helps users identify beers that embody
                the ideals of the craft beer community. This E-Commerce site allows 
                logged in users to make ratings/ reviews on products, 
                checkout their cart and recieve email verification, as
                well as administrative capabilities, such as the abilities
                create, remove, and update the database of breweries, beers, and
                reviews.
              </h2>
              <div className="brew-buttons">
                <a
                  href="https://true-brew.herokuapp.com/"
                  className="btn visit-site"
                >
                  VISIT SITE
                </a>
                <a
                  href="https://github.com/Ellbroach/True_Brew"
                  className="btn visit-site"
                >
                  SEE GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="artifact">
          <div className='video-title'>
            <h2>Artifact</h2>
            <video controls>
              <source src={Artifact} type="video/mp4" />
            </video>
          </div>
          <div className='artifact-description'>
            <h2>
              Artifact was designed in response to a growing demand for more diverse
               spaces for personal and analytical reflection within the museum community.
              This React Native mobile app uses the google vision API to allow users to hover over a museum piece's text label and subsequently be brought to
              reddit-style message forum where users can comment, favorite, and share their experiences with individual works of art.
              Additionally, Artifact allows users to create their own gallery and add their favorite pieces. Artifact then uses an AI
              recommendation system to suggest other works that the user might like, based on the profiles and galleries of other similar users.
              Artifact exists on the Expo site, and is currently seeded with data from the Whitney Museum of American Art.
        </h2>
            <div className='art-buttons'>
              <a
                href="https://expo.io/@artifact/ARTifact"
                className="btn visit-site"
              >
                VISIT EXPO
                </a>
              <a
                href="https://github.com/lordprana/ARTifactClient"
                className="btn visit-site"
              >
                SEE GITHUB
                </a>
            </div>
          </div>
        </div>
        <div className='market-monitor'>
          <div className='market-image-name'>
            <h2>Market Monitor</h2>
            <img src={Market} />
          </div>
          <div className='market-description'>
            <h2>
              Market Monitor was conceived as a sleek and legible way to identify, study and follow
              exciting new investment opportunities within the cryptocurrency community as well the stock market.
              Combining the AlphaVantage API with React-Vis, this project allows users to track market values
              throughout four different time periods.
        </h2>
            <div className='market-buttons'>
              <a
                href="https://market-monitor-2.herokuapp.com/"
                className="btn visit-site"
              >
                VISIT SITE
                </a>
              <a
                href="https://github.com/Ellbroach/market-monitor"
                className="btn visit-site"
              >
                SEE GITHUB
                </a>
            </div>
          </div>
        </div>
        <div className='footer'>
        <a href='https://github.com/Ellbroach'>
        <img src={Github}/>
        </a>
        <a href='https://github.com/Ellbroach'>
        <h2> Github</h2>
        </a>
        </div>
      </div>
    );
  }
}

export default App;