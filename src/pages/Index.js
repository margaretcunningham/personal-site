import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"John Marshall's personal website"
    + ''}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            Welcome to my personal website! I&apos;m John Marshall
            , a senior at the University of Kentucky
            , deeply engaged in computer science and engineering
            . This site is my digital portfolio, featuring my resume
            , projects, some stats just for fun, and contact information—
            all crafted with a blend of JavaScript and React to showcase my journey and skills.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Feel free to discover more <Link to="/about">about me</Link>,
        explore my <Link to="/resume">resume</Link>,
        delve into my <Link to="/projects">projects</Link>,
        check out <Link to="/stats">site statistics</Link>, or
        <Link to="/contact"> get in touch</Link>.
      </p>
      <p> Source available <a href="https://github.com/JohnWayneMarshall/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
