import React, { Component } from 'react';
import './App.css';
import './test.css'
import Background from './resources/Far_4K_Motion_Background_Loop (1).mp4';
import Me from './resources/Me.jpg';
import Brew from './resources/True-Brew.png';
import Artifact from './resources/Artifact.mp4';
import Market from './resources/Market-Monitor.png';
import Github from './resources/github-logo-1.png'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Popup from './popUp';
import Contact from './popUpContact';



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
        <div className="projects">
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
                on the site are owned by their founders or their employees, True
                Brew is a platform that helps users identify beers that embody
                the ideals of the craft beer community. Users can also connect
                with eachother through leaving reviews and ratings on individual
                beers. Although still in its first version, True Brew has a fully
                functional cart system with email verification on checkout, as
                well as administrative capabilities, allowing licensed users to
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