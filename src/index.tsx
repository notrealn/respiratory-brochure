import { Alignment, AnchorButton, Classes, Navbar } from '@blueprintjs/core';
import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { renderApp } from '../src/util';
import { Attractions } from './attractions/attractions';
import { Home } from './home/home';
import './index.scss';

const App = (props: {}) => {
  const location = useLocation();

  return (
    <>
      <Navbar className={Classes.DARK}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>The Respiratory System</Navbar.Heading>
          <Navbar.Divider />
          <AnchorButton href="/" text="Home" minimal />
          <AnchorButton href="/attractions" text="Attractions" minimal />
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/attractions">
            <Attractions />
          </Route>
          <Route path="/page3">
            <div>page 3</div>
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
