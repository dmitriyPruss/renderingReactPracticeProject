import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PricesList.module.sass';

function PricesListItem (props) {
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
      <div className={styles.header} style={{ borderColor: color }}>
        <h3 style={{ color: color }}>{colorName}</h3>
        <p>{description}</p>
        <div className={styles.currency} style={{ color: color }}>
          {currency}
          <span className={styles.currencyValue}>
            {amount.split('').map((value, index) => {
              if (index === 0) {
                return +value === 4 || +value === 9 ? (
                  <span
                    style={{
                      position: 'absolute',
                      left: `${index + 1}px`,
                      transform: `translateY(2px)`,
                      fontSize: '22px',
                    }}
                  >
                    {value}
                  </span>
                ) : (
                  <span
                    style={{
                      position: 'absolute',
                      left: `${index + 1}px`,
                      fontSize: '20px',
                      transform: `translateY(${3 + index}px)`,
                    }}
                  >
                    {value}
                  </span>
                );
              } else {
                return +value === 4 || +value === 9 ? (
                  <span
                    style={{
                      position: 'absolute',
                      left: `${12 * index}px`,
                      transform: `translateY(${2 + index}px)`,
                      fontSize: '22px',
                    }}
                  >
                    {value}
                  </span>
                ) : (
                  <span
                    style={{
                      position: 'absolute',
                      left: `${12 * index}px`,
                      fontSize: '20px',
                      transform: `translateY(${3 + index}px)`,
                    }}
                  >
                    {value}
                  </span>
                );
              }
            })}
          </span>
        </div>
      </div>
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

                            console.log('mainStr :>> ', mainStr);

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
                                <a href='https://www.squadhelp.com/assets/nimages/AudienceTestingReport.pdf'>
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
            return o === 'link!)' ? (
              <p className={styles.unshowedElem}>
                Learn More about{' '}
                <a href='https://www.squadhelp.com/managed-contests'>
                  Managed Contest Service
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
    </li>
  );
}

export default PricesListItem;
