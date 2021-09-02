import React from 'react';
import styles from './../AgencyLevel/AgencyLevel.module.scss';

function AgencyLevelElement (props) {
  const {
    column: { id, src, header, mainContent, learnMoreLink },
  } = props;
  return (
    <li key={id} className={styles.agencyElement}>
      <div className={styles.imgContainer}>
        <img src={src} width={50} />
      </div>
      <h3>{header}</h3>
      <p>
        {mainContent}
        <br />
        <a href={learnMoreLink}>Learn More</a>
      </p>
    </li>
  );
}

export default AgencyLevelElement;
