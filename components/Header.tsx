import React, { useEffect, useRef, useState } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import styles from './Header.module.css';
import colors from '../static/colors';

interface HeaderProps {
  selectedPage: string;
  name: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  // const navbarRef = useRef<HTMLElement>(null);
  // const [navPadding, setNavPadding] = useState<number>(0);
  // useEffect(() => {
  //   console.log('HEIGHT: ', navbarRef.current?.clientHeight);
  //   setNavPadding(navbarRef.current?.clientHeight | 69);
  // }, [navbarRef]);
  return (
    <div>
      <Navbar style={{ background: colors.background }} className={styles.nav_container} bg="dark" expand="lg" fixed="top" collapseOnSelect variant="dark">
        <Navbar.Brand style={{ color: colors.highlight }}>
          <img className="d-inline-block align-top" src="https://picsum.photos/40" width="40" height="40" /> Jonatan Vahlberg
        </Navbar.Brand>
        <Nav fill className="justify-content-end ml-auto" activeKey={props.selectedPage}>
          <Nav.Item>
            <Nav.Link eventKey="about">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
