import React from 'react';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';

export default function Header() {
  return (
    <div className="tabs">
      <Tab>
        <NavLink to="/" exact={true} activeClassName="is-active"> 
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/about" exact={true} activeClassName="is-active"> 
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/features" exact={true} activeClassName="is-active"> 
          Features
        </NavLink>
      </Tab>
    </div>
  )
}