import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './resources/Far_4K_Motion_Background_Loop (1).mp4';
import Me from './resources/Me.jpg';
import Brew from './resources/True-Brew.png';
import Artifact from './resources/Artifact.mp4';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const baseUrl = "http://127.0.0.1:3000";

class App extends Component {
  constructor(props) {
    super(props);
    window.scroll({
      behavior: "smooth"
    });
  }

  scrollTo() {
    scroller.scrollTo("my-story", {
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
            <h1>Hi, my name is Elliot</h1>
            <h1>and I am a Fullstack Developer</h1>
            <h2>Thanks for stopping by </h2>
          </div>
        </div>
        <section id="scroll" className="scroll-down">
          <a onClick={() => this.scrollTo()}>
            <span />Explore
          </a>
        </section>
        <h1 id="my-story" className="story">
          My Story
        </h1>
        <div className="bio">
          <div className="image-and-contact">
            <img src={Me} />
            <div className="button-container">
              <div class="button">
                <span class="button__mask" />
                <span class="button__text">Resume</span>
                <span class="button__text button__text--bis">Resume</span>
              </div>
              <br />
              <div class="button">
                <span class="button__mask" />
                <span class="button__text">Contact Me</span>
                <span class="button__text button__text--bis">Contact Me</span>
              </div>
            </div>
          </div>
          <h2>
            My name is Elliot Broach and I am a full-stack web developer. Having
            graduated from Colgate University in 2017 with a degree in Art
            History and an emphasis in contemporary visual design, I then
            enrolled in Fullstack Academy to learn how to bring my ideas to the
            web. I have a serious passion for creating dynamic user experiences
            and believe that the best sites are often those that are most
            intuitive.
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
                conglomerations deceptively promoting their products as craft
                beer. Beginning with the premise that all breweries represented
                on the site are owned by their founders or their employees, True
                Brew is a platform that helps users identify beers that embody
                the ideals of the craft beer community. Users can also connect
                with eachother through leaving reviews and ratings on individual
                beers. Although still in version one, True Brew has a fully
                functional cart system with email verification on checkout, as
                well as administrative capabilities, allowing liscensed users to
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
          Artifact was designed in response to a growing demand for more diverse spaces for personal and analytical reflection within the museum community.
          This React Native mobile app uses the google vision API to allow users to hover over a museum piece's text label and subsequently be brought to reddit-style message forum where users can comment, favorite, and share their experiences with individual works of art.
          Additionally, Artifact allows users to add their favorite pieces to their gallery, and then uses an AI recommendation system to suggest other works that the user might like, based on the profiles and galleries of other similar users.
          Artifact exists on the Expo site, and is currently seeded with data from the Whitney Museum of American Art.
        </h2>
        <div className='art-buttons'>
        <a
                  href="https://expo.io/@artifact/ARTifact"
                  className="btn visit-site"
                >
                  SEE ON EXPO
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
      </div>
    );
  }
}

export default App;