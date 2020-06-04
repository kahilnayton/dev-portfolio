import React from 'react';
import { FaGit, FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <ul className="gallery container">
        <li className="row">
          <p className="project-title">Write Meow!</p>
          <header>
            <img
              className="project-pic"
              src="https://media.giphy.com/media/JTheWqoPlUYL4I1aFh/giphy.gif"
              alt="gif of write meow site"
              width="200px"
              height="200px"
            />
            <div className="project-links">
              <a
                className="live-site"
                href="http://www.writemeow.club/"
                target="_blank"
              >
                Try It!
              </a>
              <a
                href="https://github.com/kahilnayton/twitter-clone-with-django"
                target="_blank"
              >
                <FaGithub className="fab fa-github project-icon-github" />
              </a>
            </div>
          </header>
          <p className="img-description">
            An exploration into Django, Python, virtual environments and
            full-stack development. This is Write Meow! It's a social media
            platform for cats for them to connect, share ideas and generally
            hang out.{' '}
          </p>
        </li>

        <li className="row">
          <p className="project-title">React.js project</p>
          <header>
            <img
              className="project-pic"
              src="https://media.giphy.com/media/gFtqkkJujapQ4oHMRN/giphy.gif"
              alt="gif of katamaran site"
              width="200px"
              height="200px"
            />
            <div className="project-links">
              <a
                className="live-site"
                href="http://katamaran.surge.sh/"
                target="_blank"
              >
                Try It!
              </a>
              <a
                href="https://github.com/kahilnayton/kayak-clone"
                target="_blank"
              >
                <FaGithub className="fab fa-github project-icon-github" />
              </a>
            </div>
          </header>
          <p className="img-description">
            A fun project and a study into sass and responsive design with flex
            box
          </p>
        </li>

        <li className="row">
          <p className="project-title">Headless CMS</p>
          <header>
            <img
              className="project-pic"
              src="https://media.giphy.com/media/LSFbzsxTB43FmeW2La/giphy.gif"
              alt="headless.gif"
              width="200px"
              height="200px"
            />
            <div className="project-links">
              <a
                className="live-site"
                href="https://objective-bartik-0b23dd.netlify.com/"
                target="_blank"
              >
                Try It!
              </a>
              <a
                href="https://github.com/kahilnayton/headless-cms"
                target="_blank"
              >
                <FaGithub className="fab fa-github project-icon-github" />
              </a>
            </div>
          </header>
          <p className="img-description">
            An alternative for a small business owner is to incorporate all the
            great functionality of a React app and use a third party content
            provider to adjust the content as you see fit. This example uses
            React.js, Semantic UI and Contentful.
          </p>
        </li>

        <li className="row">
          <p className="project-title">WebMusic</p>
          <header>
            <img
              className="project-pic"
              src="https://media.giphy.com/media/KEHgkuZLmGPK1AovWD/giphy.gif"
              alt="webmusic.gif"
              width="200px"
              height="200px"
            />
            <div className="project-links">
              <a
                className="live-site"
                href="http://drumdrumdrumdrum.surge.sh/"
                target="_blank"
              >
                Try It!
              </a>
              <a
                href="https://github.com/kahilnayton/drumdrumdrumdrum"
                target="_blank"
              >
                <FaGithub className="fab fa-github project-icon-github" />
              </a>
            </div>
          </header>

          <p className="img-description">
            WebMusic is a React front-end / Express back-end application to
            allow users to create loops and music directly in their browser.
          </p>
        </li>

        <li className="row">
          <header>
            <p className="project-title">Track Fit</p>
            <img
              className="project-pic"
              src="https://media.giphy.com/media/L3EkSfmWSLcdO0GSYp/giphy.gif"
              alt="track.gif"
              width="200px"
              height="200px"
            />
            <div className="project-links">
              <a
                className="live-site"
                href="http://track-fitness.surge.sh/"
                target="_blank"
              >
                Try It!
              </a>
              <a
                href="https://github.com/kahilnayton/track-fit"
                target="_blank"
              >
                <FaGithub className="fab fa-github project-icon-github" />
              </a>
            </div>
          </header>

          <p className="img-description">
            Welcome to Track Fitness! This app was built with the idea to
            optimize efficiency in journaling workout entries and calorie
            counting. Sometimes, simpler is better and this app gets the job
            done. With a sign up and log in feature, the app can keep track of
            unique user entries and store their information in our database.
            Track fit allows users to set and update their own goals. This means
            that removing and adding entries can help keep track of how far or
            close you are to the set goal. Tracking your exercise is all the
            rage these days so we decided to take a stab at creating our own
            fitness app!
          </p>
        </li>

        <li className="row">
          <header>
            <p className="project-title">Dose</p>
            <img
              className="project-pic"
              src="https://media.giphy.com/media/J2IZL09EDTJUYZWFZc/giphy.gif"
              alt="Dose.gif"
              width="200px"
              height="200px"
            />

            <div className="project-links">
              <a
                className="live-site"
                href="http://dose-music.surge.sh"
                target="_blank"
              >
                Try It!
              </a>
              <a
                href="https://github.com/kahilnayton/Dose/tree/master/client"
                target="_blank"
              >
                <FaGithub className="fab fa-github project-icon-github" />
              </a>
            </div>
          </header>
          <p className="img-description">
            Your daily dose of music shared with your friends. This Application
            was designed as a platform for users to update and share current
            playlists. Built with React JS.
          </p>
        </li>

        <li className="row">
          <header>
            <p className="project-title">Kkaraoke</p>
            <img
              className="project-pic"
              src="https://media.giphy.com/media/VbQlvFd7Pt8wLm4vxw/giphy.gif"
              alt="karaoke.git"
              width="200px"
              height="200px"
            />

            <div className="project-links">
              <a
                className="live-site"
                href="http://plain-blade.surge.sh"
                target="_blank"
              >
                Try It!
              </a>

              <a href="https://github.com/kahilnayton/karaoke" target="_blank">
                <FaGithub className="fab fa-github project-icon-github" />
              </a>
            </div>
          </header>

          <p className="img-description">
            {' '}
            KKaraoke! This application gives a user multiple options to choose
            which kind of song they want to sing. They can search a current list
            of top 10 songs based on the charts, search by feeling or mood or
            simple go by artist or song title. Whatever you choose we'll provide
            you with the video and lyrics for your chosen song! This application
            uses the YouTube Api coupled with the MusixMatch Api to fetch all
            the information you need. Built with React
          </p>
        </li>

        <li className="row">
          <header>
            <p className="project-title">2048</p>
            <img
              className="project-pic"
              src="https://media.giphy.com/media/ZYDl6WNgKsMXalHv8U/giphy.gif"
              alt="2048.gif"
              width="200px"
              height="200px"
            />

            <div className="project-links">
              <a
                className="live-site"
                href="https://twentyfoureight.surge.sh/"
                target="_blank"
              >
                Try It!
              </a>
              <a href="https://github.com/kahilnayton/2048" target="_blank">
                <FaGithub className="fab fa-github project-icon-github" />
              </a>
            </div>
          </header>
          <p className="img-description">
            Welcome to 2048 build with JavaScript, CSS and HTML. Just like the
            popular game a player must reach 2048 by swiping blocks of the same
            value together, which will multiply those two numbers.
          </p>
        </li>
      </ul>
    </section>
  );
}
