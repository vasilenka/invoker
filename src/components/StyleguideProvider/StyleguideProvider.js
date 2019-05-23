import './StyleGuideProvider.module.scss';
import styles from './StyleGuideProvider.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import Helmet from 'react-helmet';

// import './../../assets/fonts/fonts'

const defaultPageTitleINA = 'Meridian.id';
const defaultPageTitleENG = 'Meridian.id';

const getLocalisedPageTitle = locale =>
  locale === 'INA' ? defaultPageTitleINA : defaultPageTitleENG;

export default function StyleGuideProvider({
  fullScreen,
  children,
  meta,
  link,
  title,
  locale,
}) {
  const className = cx({
    [styles.root]: true,
    [styles.fullScreen]: fullScreen,
  });

  const pageTitle = title || getLocalisedPageTitle(locale);

  return (
    <div className={className}>
      <Helmet title={pageTitle} meta={meta} link={link} />
      {children}
    </div>
  );
}

StyleGuideProvider.propTypes = {
  fullScreen: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  meta: PropTypes.array,
  link: PropTypes.array,
  locale: PropTypes.oneOf(['AU', 'NZ']),
};

StyleGuideProvider.defaultProps = {
  fullScreen: false,
  meta: [],
  link: [],
  locale: 'AU',
};
