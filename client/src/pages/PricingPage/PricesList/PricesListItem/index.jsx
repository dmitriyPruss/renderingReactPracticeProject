import React, { Component, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PricesElementHeader from './PricesElementHeader';
import ListElements from './ListElements';
import styles from './../PricesList.module.sass';

function PricesListItem (props) {
  const [toggleSign, setToggleSign] = useState(true);

  const listRef = useRef(null);

  const toggleElement = () => {
    listRef.current.style.display === 'block'
      ? (listRef.current.style.display = 'none')
      : (listRef.current.style.display = 'block');

    toggleSign ? setToggleSign(false) : setToggleSign(true);
  };

  const {
    priceItem: {
      colorName,
      description,
      price: { amount, currency },
      options,
    },
    color,
  } = props;

  return (
    <li className={styles.pricesListItem}>
      <PricesElementHeader
        classHeader={styles.header}
        toggleSign={toggleSign}
        colorName={colorName}
        description={description}
        toggledButton={styles.toggledButton}
        toggleElement={toggleElement}
        currencyValuesClass={styles.currency}
        styleColor={{ color: color }}
        currency={currency}
        amount={amount}
        currencyValueClass={styles.currencyValue}
      />
      <section className={styles.mainInfo} ref={listRef}>
        <ListElements
          options={options}
          optionsListClass={styles.optionsList}
          showedElemClass={styles.showedElem}
          innerShowedElementClass={styles.innerShowedElement}
          unshowedElemClass={styles.unshowedElem}
        />
        <Link
          to='#'
          style={{ backgroundColor: color }}
          className={styles.startLink}
        >
          <i className='fas fa-check' /> Start
        </Link>
      </section>
    </li>
  );
}

export default PricesListItem;
