import React from 'react';
import './home.scss';

export class Home extends React.Component {
  render() {
    return (
      <>
        <img src={require('../../assets/bruh.png').default} />
        <h1>Welcome to LungLand™!</h1>
        <p>
          Here we have many exciting attractions and diagrams of the respiratory system. Go click on
          the stuff in the bar on top of the screen.
        </p>
        <p>Warning: this website was not built for phones and stuff will probably break</p>
        <p>
          Also if you reload the page on something that isnt the homepage, it might break. If that
          happens just go back to https://notrealn.github.io/respiratory-brochure/. I could fix this
          but im too lazy
        </p>
      </>
    );
  }
}
