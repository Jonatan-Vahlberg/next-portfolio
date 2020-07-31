import React, { useEffect, useRef, useState, HTMLAttributes } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import styles from './Header.module.css';
import colors from '../static/colors';
import Link from 'next/link';

interface HeaderProps {
  selectedPage: string;
  name: string;
}

const Header: React.FC<HeaderProps> = ({ selectedPage }) => {
  // const navbarRef = useRef<HTMLElement>(null);
  // const [navPadding, setNavPadding] = useState<number>(0);
  // useEffect(() => {
  //   console.log('HEIGHT: ', navbarRef.current?.clientHeight);
  //   setNavPadding(navbarRef.current?.clientHeight | 69);
  // }, [navbarRef]);
  const activeStyle: React.CSSProperties = {
    fontWeight: 600,
  };
  return (
    <div>
      <Navbar style={{ background: colors.background }} className={styles.nav_container} bg="dark" expand="lg" fixed="top" collapseOnSelect variant="dark">
        <Navbar.Brand style={{ color: colors.highlight }}>
          <img className="d-inline-block align-top" src="https://picsum.photos/40" width="40" height="40" /> Jonatan Vahlberg
        </Navbar.Brand>
        <Nav fill className="justify-content-end ml-auto" activeKey={selectedPage}>
          <Nav.Item>
            <Nav.Link eventKey="about">
              <Link href="/">
                <a style={selectedPage === 'about' ? activeStyle : undefined} className={styles.listItemLink}>
                  About me
                </a>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href="/projects">
                <a style={selectedPage === 'projects' ? activeStyle : undefined} className={styles.listItemLink}>
                  Projects
                </a>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href="/contact">
                <a style={selectedPage === 'contact' ? activeStyle : undefined} className={styles.listItemLink}>
                  Contact
                </a>
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
