import styles from './LazyTest.module.scss';
import React from 'react';
import Image from '../../components/Image/Image';
import ObserverWrapper from '../../components/ObserverWrapper/ObserverWrapper';

const LazyTest = ({ children, className, ...restProps }) => {
  return (
    <ObserverWrapper
      options={{
        threshold: 0,
        triggerOnce: true
      }}
      className={styles.root}
      {...restProps}
    >
      <Image
        fit="cover"
        src={'https://images.unsplash.com/photo-1548919973-5cef591cdbc9'}
        alt="unsplash image man... so big!"
      />
    </ObserverWrapper>
  );
};

export default LazyTest;
