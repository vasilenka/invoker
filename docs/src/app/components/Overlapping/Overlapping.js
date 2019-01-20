import styles from './Overlapping.module.scss';
import React, { useState } from 'react';
import cx from 'classnames';
import Button from '../Button/Button';
import Image from '../Image/Image';

const Overlapping = ({ data, className, ...restProps }) => {
  let [activeIndex, setActiveIndex] = useState(0);
  let [clippingIndex, setClippingIndex] = useState(null);
  let [translateIndex, setTranslateIndex] = useState(null);
  let [fromLeft, setFromLeft] = useState(false);
  let [fromRight, setFromRight] = useState(false);
  let [isTransitioning, setIsTransitioning] = useState(false);

  const nextClip = max => {
    setIsTransitioning(true);
    setFromLeft(true);
    setClippingIndex(activeIndex);
    if (activeIndex < max) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
    setTimeout(() => {
      if (activeIndex < max) {
        setTranslateIndex(activeIndex + 1);
      } else {
        setTranslateIndex(0);
      }
      setFromLeft(false);
      setIsTransitioning(false);
    }, 800);
  };

  const prevClip = max => {
    setIsTransitioning(true);
    setFromRight(true);
    setClippingIndex(activeIndex);
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(max);
    }
    setTimeout(() => {
      if (activeIndex > 0) {
        setTranslateIndex(activeIndex - 1);
      } else {
        setTranslateIndex(max);
      }
      setFromRight(false);
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <div>
      <div className={cx(styles.wrapper)}>
        <div
          style={{
            width: '100%'
          }}
        >
          {data &&
            data.map((album, index) => (
              <div
                id={index}
                key={album.id}
                className={cx({
                  [styles.container]: true,
                  [styles.shown]:
                    clippingIndex === index || activeIndex === index,
                  [styles.clipping]: clippingIndex === index,
                  [styles.fromLeft]: clippingIndex === index && fromLeft,
                  [styles.fromRight]: clippingIndex === index && fromRight,
                  [styles.next]: translateIndex === index,
                  [styles.translateLeft]: activeIndex === index && fromLeft,
                  [styles.translateRight]: activeIndex === index && fromRight
                })}
              >
                <Image fit="cover" src={album.url} alt={album.title} />
              </div>
            ))}
        </div>
      </div>
      <div>
        <Button
          disabled={isTransitioning}
          style={{ marginRight: '12px' }}
          primary
          small
          onClick={() => prevClip(data.length - 1)}
        >
          Prev
        </Button>
        <Button
          disabled={isTransitioning}
          primary
          small
          onClick={() => nextClip(data.length - 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Overlapping;
