import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PricesElementHeader from './PricesElementHeader';
import styles from './../PricesList.module.sass';

class PricesListItem extends Component {
  constructor (props) {
    super(props);

    this.state = {
      toggleSign: true,
    };

    this.listRef = React.createRef();
  }

  toggleElement = () => {
    this.listRef.current.style.display === 'block'
      ? (this.listRef.current.style.display = 'none')
      : (this.listRef.current.style.display = 'block');

    this.state.toggleSign
      ? this.setState({ toggleSign: false })
      : this.setState({ toggleSign: true });
  };

  render () {
    const {
      priceItem: {
        colorName,
        description,
        price: { amount, currency },
        options,
      },
      color,
    } = this.props;

    const { toggleSign } = this.state;

    return (
      <li className={styles.pricesListItem}>
        <PricesElementHeader
          classHeader={styles.header}
          toggleSign={toggleSign}
          colorName={colorName}
          description={description}
          toggledButton={styles.toggledButton}
          toggleElement={this.toggleElement}
          currencyValuesClass={styles.currency}
          styleColor={{ color: color }}
          currency={currency}
          amount={amount}
          currencyValueClass={styles.currencyValue}
        />
        <section className={styles.mainInfo} ref={this.listRef}>
          <ul className={styles.optionsList}>
            {options.map((o, i) => {
              if (Array.isArray(o)) {
                return (
                  <li key={i}>
                    {o.map((item, index) => {
                      if (Array.isArray(item)) {
                        return (
                          <div>
                            {item.map(innerItem => {
                              const linkStr = 'View Sample Report';

                              const iWithoutSpaces = innerItem.text
                                .split(' ')
                                .join('');

                              if (
                                iWithoutSpaces.indexOf(
                                  linkStr.split(' ').join('')
                                ) !== -1
                              ) {
                                let mainStr = '';
                                const mainStrArr = innerItem.text.split(' ');

                                for (let i = 0; i < mainStrArr.length; i++) {
                                  if (
                                    mainStrArr[i] !== 'View' &&
                                    mainStrArr[i] !== 'Sample' &&
                                    mainStrArr[i] !== 'Report'
                                  ) {
                                    mainStr += mainStrArr[i] + ' ';
                                  }
                                }

                                return (
                                  <p
                                    className={`${styles.showedElem} ${styles.innerShowedElement}`}
                                    data-tooltip={innerItem.tooltip}
                                  >
                                    <i
                                      style={{ marginRight: '5px' }}
                                      className='fas fa-check'
                                    />
                                    <span>{mainStr}</span>
                                    <br />
                                    <a
                                      style={{ textDecoration: 'none' }}
                                      href='https://www.squadhelp.com/assets/nimages/AudienceTestingReport.pdf'
                                    >
                                      {linkStr}
                                    </a>
                                  </p>
                                );
                              }
                              return (
                                <p
                                  className={`${styles.showedElem} ${styles.innerShowedElement}`}
                                  data-tooltip={innerItem.tooltip}
                                >
                                  <i
                                    style={{ marginRight: '5px' }}
                                    className='fas fa-check'
                                  />
                                  <span>{innerItem.text}</span>
                                </p>
                              );
                            })}
                          </div>
                        );
                      } else {
                        return (
                          <div
                            className={styles.showedElem}
                            data-tooltip={item['tooltip']}
                          >
                            {item['text']}
                          </div>
                        );
                      }
                    })}
                  </li>
                );
              } else if (typeof o === 'string') {
                return o.indexOf('Learn') === 0 ? (
                  <p className={styles.unshowedElem}>
                    {o.split('|')[0]}
                    <a
                      style={{ textDecoration: 'none' }}
                      href='https://www.squadhelp.com/managed-contests'
                    >
                      {o.split('|')[1]}
                    </a>
                  </p>
                ) : (
                  <p className={styles.unshowedElem}>{o}</p>
                );
              } else {
                return (
                  <li
                    className={styles.showedElem}
                    data-tooltip={o['tooltip']}
                    key={i}
                  >
                    {o['text']}
                  </li>
                );
              }
            })}
          </ul>
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
}

export default PricesListItem;
