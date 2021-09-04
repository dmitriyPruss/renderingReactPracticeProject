import constants from '../../constants';
import styles from './RegistrationFormFooter.module.scss';

const showArticleInfo = arr =>
  arr.map(({ header, main }, i) => (
    <article key={i}>
      <span className={styles.articleEmphasized}>{header}</span>
      <span className={styles.article}>{main}</span>
    </article>
  ));

const showLastInfo = index => (
  <section key={index}>
    <h3 className={styles.headerArticle}>
      I have other questions! How can I get in touch with Squadhelp?
    </h3>
    <p className={styles.article}>
      Check out our{' '}
      <a href='http://help.squadhelp.com/' className={styles.orangeSpan}>
        FAQs
      </a>{' '}
      or send us a{' '}
      <a href='about:blank#blocked' className={styles.orangeSpan}>
        message
      </a>
      . For assistance with launching a contest, you can also call us at (877)
      355-3585 or schedule a{' '}
      <a href='https://www.squadhelp.com/signup' className={styles.orangeSpan}>
        Branding Consultation
      </a>
    </p>
  </section>
);

const registrationFormRender = ({ data, isFetching, error }) => {
  return (
    <>
      {isFetching && <div style={{ color: 'blue' }}>Loading...</div>}
      {error && <div style={{ color: 'red' }}>ERROR</div>}
      <section className={styles.articlesMainContainer}>
        {data.map((column, i) => (
          <section key={i} className={styles.ColumnContainer}>
            {column.map(({ header, body }, j) => {
              return i === 0 && j === 1 ? (
                <article key={j}>
                  <h3 className={styles.headerArticle}>{header}</h3>
                  {showArticleInfo(body)}
                </article>
              ) : (
                <article key={j}>
                  <h3 className={styles.headerArticle}>{header}</h3>
                  <p className={styles.article}>{body}</p>
                </article>
              );
            })}
            {i === 1 && showLastInfo(i)}
          </section>
        ))}
      </section>
    </>
  );
};

export default registrationFormRender;
