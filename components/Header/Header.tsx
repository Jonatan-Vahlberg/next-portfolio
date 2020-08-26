import React, { useEffect, useRef, useState, HTMLAttributes } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import styles from './header.module.sass';
import Link from 'next/link';

interface HeaderProps {
  selectedPage: string;
  name: string;
}

const listItems = [
  {
    name: 'About me',
    src: 'about',
    link: '/',
  },
  { name: 'Projects', link: '/projects', src: 'projects' },
  { name: 'Contact', link: '/contact', src: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ selectedPage }) => {
  const activeStyle: React.CSSProperties = {
    fontWeight: 600,
  };
  return (
    <div className={`${styles.navContainer} row text-white align-items-center py-3 px-4 d-flex`}>
      <div className="d-flex flex-row m-0 p-0 align-items-center col-12 col-sm-4 justify-content-sm-start justify-content-center">
        <img className="d-sm-block d-none" src="https://picsum.photos/40" width="40" height="40" />
        <h2 className={` m-0 mb-1 ml-0 ml-sm-3 p-0 align-middle ${styles.title}`}>Jonatan Vahlberg</h2>
      </div>
      <div className="d-flex justify-content-sm-end justify-content-center m-0 p-0 align-items-center col-12 col-sm-8">
        {listItems.map((item) => (
          <Link href={item.link}>
            <a className={`mx-3 m-0 h6  ${styles.listItemLink} ${selectedPage === item.src ? styles.listItemLinkActive : ''}`}>{item.name}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
{
  /* <Navbar className={`${styles.navContainer}`} bg="dark" expand="lg" fixed="top" collapseOnSelect>
        <Navbar.Brand>
          <img className="d-inline-block align-top" src="https://picsum.photos/40" width="40" height="40" /> Jonatan Vahlberg
        </Navbar.Brand>
        <Nav fill className="justify-content-end ml-auto" activeKey={selectedPage}>
          <Nav.Item>
            <Nav.Link eventKey="about">
              <Link href="/">
                <a style={selectedPage === 'about' ? activeStyle : undefined}>About me</a>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href="/projects">
                <a style={selectedPage === 'projects' ? activeStyle : undefined}>Projects</a>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link href="/contact">
                <a style={selectedPage === 'contact' ? activeStyle : undefined}>Contact</a>
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar> */
}
