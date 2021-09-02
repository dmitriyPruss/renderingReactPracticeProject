import React, { Component } from 'react';
import DataColumn from '../DataColumn';
import AgencyLevelElement from '../AgencyLevelElement';
import styles from './AgencyLevel.module.scss';

class AgencyLevel extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  columnsRender = ({ data, isFetching, error }) => {
    return (
      <>
        {isFetching && <div>Loading...</div>}
        {error && <div>ERROR</div>}
        <ul className={styles.agencyElementsContainer}>
          {data.map(column => (
            <AgencyLevelElement column={column} />
          ))}
        </ul>
      </>
    );
  };

  render () {
    return (
      <article className={styles.agencyLevelContainer}>
        <h2>Agency Level Experience</h2>
        <DataColumn
          fileName='/agencyExperience.json'
          render={this.columnsRender}
        />
      </article>
    );
  }
}

export default AgencyLevel;
