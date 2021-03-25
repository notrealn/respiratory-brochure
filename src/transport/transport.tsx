import React from 'react';
import './transport.scss';

export class Transport extends React.Component {
  render() {
    return (
      <>
        <h1>All About Transport</h1>
        <p>
          The circulatory metro ensures that everyone gets to where they need to go on time. Once
          you enter through the <b>pharynx</b>, pass through security, and go down one of the 2{' '}
          <b>bronchi</b> into the branching <b>bronchioles</b>, you’ll find the <b>alveoli</b>{' '}
          stations. Here, <b>gas exchange</b> aka <b>respiration</b> occurs as oxygen diffuses
          through the <b>capillaries</b> attached to the sac and attaches to <b>hemoglobin</b> train
          cars in the blood, which carry oxygen throughout the body. At the same time, carbon
          dioxide leaves the blood through the alveoli and leaves the same way oxygen goes in. In
          the body tissues, the opposite happens. Oxygen is dropped off at the cells, while carbon
          dioxide is picked up to be taken to the alveoli.
        </p>
        <img src={require('../../assets/aveoli-1.png').default} alt="aveoli diagram 1" />
        <p>
          <b>The Respiratory Control Center™</b> works to make wait times as efficient as possible.
          When there is a higher concentration of carbon dioxide in the blood, the control center
          detects this and sends signals through nerves to the diaphragm and ribs to move faster in
          order to let in more oxygen. When there is less carbon dioxide, the control center slows
          the diaphragm down.
        </p>
        <img src={require('../../assets/aveoli-2.png').default} alt="aveoli diagram 2" />
        <p>
          There are 2 factors that can control how much carbon dioxide is in the blood, which
          affects the control center. One is <b>oxygen debt</b>. When LungLand™ has to close
          temporarily or uses oxygen faster because of exercise and oxygen does not flow in, the
          body cells begin to produce lactic acid, which only goes away if it is oxidised. When
          LungLand™ reopens, more oxygen has to be pumped at first due to the oxygen debt that has
          built up in order to get rid of the lactic acid, resulting in faster inhalation and
          exhalation. Another factor is <b>vital capacity</b>, or how much air the lungs can expel
          after fully inflating. A higher vital capacity means a slower breath rate, since more air
          is being pushed out to make room for oxygenated air.
        </p>
      </>
    );
  }
}
