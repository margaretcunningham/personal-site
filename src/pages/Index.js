import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main description="John Marshall's personal website">
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p>
        Welcome to my personal website! I&apos;m John Marshall, a recent graduate of the
        University of Kentucky, deeply engaged in computer science and engineering.
        This site is a digital portfolio showcasing my journey and skills through
        my <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,
        and some <Link to="/stats">stats</Link> just for fun. Feel free to
        explore and <Link to="/contact"> get in touch</Link>.
      </p>
      <p> Source available <a href="https://github.com/JohnWayneMarshall/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
