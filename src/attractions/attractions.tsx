import React from 'react';
import './attractions.scss';

export class Attractions extends React.Component {
  render() {
    return (
      <>
        <h1>Attractions List</h1>
        <p>
          The Pharynx is the entrance to LungLand™. People can enter from either the nose or the
          mouth. It connects to the larynx for security.
        </p>
        <img src={require('../../assets/pharynx.png').default} alt="pharynx diagram" />
        <p>
          <b>The Larynx Speaker System™</b> is a specialized system of cartilage plates that
          protects the trachea. It also houses the vocal folds, which can vibrate to make sound. Try
          and listen for it as you pass by. Closely involved with the larynx is the{' '}
          <b>epiglottis</b>, which protects LungLand™ from debris (food, water) as air flows
          through. <b>Cilia</b> also protect the respiratory tract, the hairs catching dust and
          germs. The larynx leads into the <b>trachea</b>.
        </p>
        <p>
          The <b>Trachea</b> is lined with many rings of cartilage and is lined with mucosa, making
          the inside moist. It warms and moistens air before it enters the 2 <b>bronchi</b>.
        </p>
        <p>
          The <b>Bronchi</b> connect air from the trachea to the lungs, branching out into smaller
          &nbsp;<b>bronchioles</b> until they reach the alveoli. They supply air to the <b>lungs</b>
          .
        </p>
        <img src={require('../../assets/lung-diagram.png').default} alt="lungs diagram" />
        <p>
          The <b>Lung</b> Volcanoes are the two organs in the body that are filled with air,
          expanding and contracting with <b>inhalation</b> and <b>exhalation</b>. It brings oxygen
          into the body while expelling waste products such as carbon dioxide. These mountains
          exhale air with so much power that they need the <b>pleural membrane</b> to stop them from
          collapsing in on themselves. The double membrane of visceral and parietal pleura keeps the
          lung’s structure with the liquid between it, which creates surface tension and pulls the
          lungs out so they don’t fall in.
        </p>
        <img src={require('../../assets/lungs.png').default} alt="lungs diagram" />
        <p>
          <b>The Diaphragm Drop of Doom™</b>- A feat of engineering, this ride is what causes{' '}
          <b>inhalation</b> and <b>exhalation</b>. When the diaphragm falls and the ribs expand, it
          creates an area of low pressure that causes the lungs to expand, sucking air into the{' '}
          <b>bronchi</b> and <b>bronchioles</b>. When the ride is reset and the diaphragm goes up,
          it pushes the lungs and ribs in creating an area of high pressure. This causes air to move
          out.
        </p>
        <img src={require('../../assets/diaphram.png').default} alt="diaphram diagram" />
      </>
    );
  }
}
