import React from 'react';
import './warnings.scss';

export class Warnings extends React.Component {
  render() {
    return (
      <>
        <h1>Safety Warnings</h1>
        <p>
          DANGER: DO NOT SMOKE! There are many negative effects of smoking on LungLand™, including:
          <ol>
            <li>
              Cilia is damaged or killed when in contact with the toxins of smoke. Without cilia,
              mucus and other particles get trapped in the lungs. This increases risk of infection
              and disease, while also damaging the lung itself.
            </li>
            <li>
              Smoking can permanently destroy alveoli, which are needed for gas exchange in the
              body. Without alveoli the total intake of air in the lungs is decreased, causing
              shortness of breath or wheezing. This can lead to emphysema.
            </li>
            <li>
              The tissue of bronchi gets inflamed and contracts its airways. Less air is supplied to
              the lungs and can also cause mucus buildup inside.
            </li>
          </ol>
        </p>
        <p>
          IN CASE OF EMERGENCY- There are many problems that can happen in the attractions
          including:
          <ol>
            <li>
              Pneumonia- The alveoli stations can get flooded with fluid, making it harder for
              oxygen to be transported. This can be very mild to life threatening depending on how
              widespread it is.
            </li>
            <li>Bronchitis- the bronchi get inflamed, constricting airflow.</li>
            <li>
              Lung cancer- a tumor forms in the lung cells, that can cause many complications like
              fluid buildup or damaging of alveoli. Not smoking decreases the risk of getting lung
              cancer.
            </li>
          </ol>
        </p>
      </>
    );
  }
}
