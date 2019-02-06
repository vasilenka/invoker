import styles from './InputDouble.module.scss';
import React from 'react';
import cx from 'classnames';

import RangeCore from './../RangeCore/RangeCore';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import RangeThumb from '../RangeThumb/RangeThumb';
import RangeRail from '../RangeRail/RangeRail';

const InputDouble = ({
  children,
  getValue,
  affordance,
  dark,
  light,
  unit,
  min,
  max,
  minValue,
  maxValue,
  horizontal,
  vertical,
  step,
  className,
  ...restProps
}) => {
  let [minVal, setMinVal] = React.useState(minValue);
  let [maxVal, setMaxVal] = React.useState(maxValue);

  let [offset, setOffset] = React.useState(
    `${100 - ((minVal - min) / max) * 100}`
  );
  let [offsetRight, setOffsetRight] = React.useState(
    `${100 - ((maxVal - min) / max) * 100}`
  );

  const styleProgress = css`
    transform: translate3d(-${offset}%, 0px, 0px);
  `;

  const styleProgressRight = css`
    transform: translate3d(-${offsetRight}%, 0px, 0px);
  `;

  const styleThumb = css`
    left: calc(${100 - offset}% - 14px);
  `;

  const styleThumbRight = css`
    left: calc(${100 - offsetRight}% - 14px);
  `;

  const styleRightRail = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `;

  const handleChange = val => {
    setMinVal(val);
    if (getValue) {
      getValue(val);
    }
    setOffset(`${100 - ((val - min) / max) * 100}`);
  };

  const handleMaxChange = val => {
    setMaxVal(val);
    if (getValue) {
      getValue(val);
    }
    setOffsetRight(`${100 - ((val - min) / max) * 100}`);
  };

  return (
    <div style={{ position: 'relative' }}>
      <RangeCore
        percent
        onChange={newVal => handleChange(newVal)}
        value={minVal}
        rate={step}
        min={min}
        max={maxVal}
        className={cx({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        <RangeThumb withAffordance css={styleThumb} />
        <RangeRail bgRail className={styles.progressContainer}>
          <RangeRail css={styleProgress} className={cx(styles.progress)} />
        </RangeRail>
      </RangeCore>
      <RangeCore
        percent
        onChange={newVal => handleMaxChange(newVal)}
        value={maxVal}
        rate={step}
        min={minVal}
        max={max}
        css={styleRightRail}
        className={cx({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        <RangeThumb withAffordance css={styleThumbRight} />
        <RangeRail bgRail className={styles.progressContainer}>
          <RangeRail css={styleProgressRight} className={cx(styles.progress)} />
        </RangeRail>
      </RangeCore>
    </div>
  );
};

export default InputDouble;
