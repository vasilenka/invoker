import styles from './LazyTest.module.scss';
import React, { lazy, Suspense } from 'react';
import ObserverWrapper from '../../components/ObserverWrapper/ObserverWrapper';
import Spinner from '../../components/Spinner/Spinner';

const Image = lazy(() => import('./ImageTest'));

const LazyTest = ({ children, className, ...restProps }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <ObserverWrapper
        options={{
          threshold: 0,
          triggerOnce: true
        }}
        className={styles.root}
        {...restProps}
      >
        <Image />
      </ObserverWrapper>
    </Suspense>
  );
};

export default LazyTest;
