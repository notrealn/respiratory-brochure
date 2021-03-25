import { Alignment, AnchorButton, Classes, Navbar } from '@blueprintjs/core';
import React from 'react';
import { BrowserRouter, NavLink, Route, Switch, useLocation } from 'react-router-dom';
import { renderApp } from '../src/util';
import { Attractions } from './attractions/attractions';
import { Home } from './home/home';
import './index.scss';
import { Transport } from './transport/transport';
import { Warnings } from './warnings/warnings';

const App = (props: {}) => {
  const location = useLocation();

  return (
    <>
      <Navbar className={Classes.DARK}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>The Respiratory System</Navbar.Heading>
          <Navbar.Divider />
          <NavLink to="/respiratory-brochure/" className="bp3-button bp3-minimal">
            Home
          </NavLink>
          <NavLink to="/respiratory-brochure/attractions" className="bp3-button bp3-minimal">
            Attractions
          </NavLink>
          <NavLink to="/respiratory-brochure/transport" className="bp3-button bp3-minimal">
            Transport
          </NavLink>
          <NavLink to="/respiratory-brochure/warnings" className="bp3-button bp3-minimal">
            Warnings
          </NavLink>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <AnchorButton
            href="https://github.com/notrealn/respiratory-brochure"
            text="Code"
            rightIcon="code"
            minimal
          />
        </Navbar.Group>
      </Navbar>
      <main>
        <Switch location={location}>
          <Route exact path="/respiratory-brochure/">
            <Home />
          </Route>
          <Route path="/respiratory-brochure/attractions">
            <Attractions />
          </Route>
          <Route path="/respiratory-brochure/transport">
            <Transport />
          </Route>
          <Route path="/respiratory-brochure/warnings">
            <Warnings />
          </Route>
        </Switch>
      </main>
    </>
  );
};

renderApp(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
