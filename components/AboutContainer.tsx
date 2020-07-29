import React from 'react';
import { Container, Table } from 'react-bootstrap';
import styles from './AboutContainer.module.css';
import Title from './Title';
const AboutContainer: React.FC<{}> = (props) => {
  return (
    <>
      <Title name="About" />

      <h5>Who am i?</h5>

      <p>
        I am a Front-End Developer focused on mobile application development currently living in Stockholm Sweden. My passion lies in coding great apps that solve end user problems. My work etichs
        lies in making fast dynamic and maintainable applications. If this sounds interesting to you contact me or have look into some of my previous work done.
      </p>
      <h5>What am i proficeint in?</h5>
      <p>
        My Main stack is a mix of React, React-Native, JS, TypeScript and Next.js. Outside of these i am also proficient in Kotlin/Java for android and have some experience in Swift for IOS. A full
        list of my skills are found below
      </p>
      <Table variant="dark">
        <thead>
          <tr>
            <th>Mobile</th>
            <th>Web</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>React-Native(Hybrid)</th>
            <th>React</th>
            <th>Git/GitFlow</th>
          </tr>
          <tr>
            <th>Kotlin, Java (Android)</th>
            <th>HTML, JS, CSS, SCSS</th>
            <th>Node.js</th>
          </tr>
          <tr>
            <th>Swift, XCode (IOS)</th>
            <th>Next.js</th>
            <th>Firebase suite, SQLite</th>
          </tr>
          <tr>
            <th></th>
            <th>TypeScript</th>
            <th>UI Design</th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default AboutContainer;
