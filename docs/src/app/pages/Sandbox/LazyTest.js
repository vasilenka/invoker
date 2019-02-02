import styles from './LazyTest.module.scss';
import React, { lazy, Suspense } from 'react';
import ObserverWrapper from '../../components/ObserverWrapper/ObserverWrapper';
import Spinner from '../../components/Spinner/Spinner';

const ImageTwo = lazy(() => import('./ImageTest'));

const LazyTest = ({ children, className, ...restProps }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <ObserverWrapper
        options={{
          threshold: 0,
          rootMargin: '100px 0px 0px 0px',
          triggerOnce: true
        }}
        className={styles.root}
        {...restProps}
      >
        <ImageTwo />
      </ObserverWrapper>
    </Suspense>
  );
};

export default LazyTest;
