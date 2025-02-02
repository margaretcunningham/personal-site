import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Margaret Cunningham</h2>
        <p><a href="mailto:mec.cunningham2@gmail.com">mec.cunningham2@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Margaret Cunningham, a graduate of the
        <a href="https://www.uky.edu/"> University of Kentucky </a>
        with a B.S. degree in Computer Science and a minor in Math.
        I have experience in Ruby, Perl, and other programming languages,
        with a strong background in developing and maintaining tools for
        verification engineering. I enjoy identifying bottlenecks and
        optimizing performance because I care deeply about user experience.
        I&apos;m also fascinated by how psychology and art can be integrated into
        coding, which has led me to explore UI/UX design and how it connects
        to these interests.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">&copy; JM <Link to="/">temp.com</Link>.</p> */}
    </section>
  </section>
);

export default SideBar;
