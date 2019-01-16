// import styles from './PreloaderPage.module.scss'
import React from 'react';
// import cx from 'classnames'

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Divider from './../../docs/Divider/Divider';

// import Text from './../../components/Text/Text'

import Bouncer from './../../components/Bouncer/Bouncer';
import Spinner from './../../components/Spinner/Spinner';

const PreloaderPage = ({ className, ...restProps }) => {
  return (
    <React.Fragment>
      <Header
        title="Preloader"
        description="Component that you can add to a page or component while loading the content."
      />
      <Divider large />
      <Subheader title="Spinner" />
      <Preview>
        <div style={{ height: '200px', width: '100%', position: 'relative' }}>
          <Spinner />
        </div>
      </Preview>
      <Divider large />
      <Subheader title="Bouncer" />
      <Preview>
        <div style={{ height: '200px', width: '100%', position: 'relative' }}>
          <Bouncer />
        </div>
      </Preview>
    </React.Fragment>
  );
};

export default PreloaderPage;
