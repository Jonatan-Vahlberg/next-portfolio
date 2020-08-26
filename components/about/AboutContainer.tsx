import React from 'react';
import { Container, Table } from 'react-bootstrap';
import styles from './AboutContainer.module.css';
import Title from '../Title';
import HexagonImage from '../HexagonImage';
import AboutTable from './AboutTable';
const AboutContainer: React.FC<{}> = (props) => {
  return (
    <div className="m-2 m-sm-0">
      <Title name="About" />
      <div className="my-3">
        <img className="d-none d-sm-block border rounded-circle w-25 h-25 mx-auto  shadow-lg" src="/images/pfp.jpg" />
        <img className="d-block d-sm-none border rounded-circle w-50 h-50 mx-auto shadow-lg" src="/images/pfp.jpg" />
      </div>
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
      <AboutTable />
    </div>
  );
};

export default AboutContainer;
