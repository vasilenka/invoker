import styles from './InputDoubleRange.module.scss';
import React from 'react';
import cx from 'classnames';

import RangeCore from './../RangeCore/RangeCore';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import RangeThumb from '../RangeThumb/RangeThumb';
import RangeRail from '../RangeRail/RangeRail';

const InputRange = ({
  children,
  affordance,
  dark,
  light,
  unit,
  min,
  horizontal,
  vertical,
  max,
  minValue,
  maxValue,
  step,
  className,
  getValueMin,
  getValueMax,
  ...restProps
}) => {
  const thumbMinRef = React.useRef();
  const thumbMaxRef = React.useRef();
  const minContainerRef = React.useRef();
  const maxContainerRef = React.useRef();

  let [minVal, setMinVal] = React.useState(minValue);
  let [maxVal, setMaxVal] = React.useState(maxValue);

  let [offsetRight, setOffsetRight] = React.useState(
    `${((max - maxVal) / max) * 100}`
  );
  let [offsetLeft, setOffsetLeft] = React.useState(
    `${((minVal - min) / max) * 100}`
  );

  const handleMinChange = val => {
    setMinVal(val);
    if (getValueMin) {
      getValueMin(minVal);
    }
    setOffsetLeft(`${((minVal - min) / max) * 100}`);
  };

  const handleMaxChange = val => {
    setMaxVal(val);
    if (getValueMax) {
      getValueMax(maxVal);
    }
    setOffsetRight(`${((max - val) / max) * 100}`);
  };

  const styleProgress = css`
    user-select: none;
    height: 4px;
    left: ${offsetLeft}%;
    right: ${offsetRight}%;
  `;

  const styleThumbLeft = css`
    left: calc(${offsetLeft}% - 14px);
  `;

  const styleThumbRight = css`
    right: calc(${offsetRight}% - 14px);
  `;

  const styleRailLeftLine = css`
    overflow: hidden;
    top: 12px;
    height: 4px;
    left: 0;
    ${'' /* right: calc(${100 - offsetLeft}%); */}
    right: 0;
  `;
  const styleRailLeftLineIndicator = css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: 3px;
    transform: translate3d(-${100 - offsetLeft}%, 0px, 0px);
  `;

  const styleRailRightLine = css`
    top: 12px;
    height: 4px;
    right: 0;
    left: calc(${100 - offsetRight}%);
  `;

  return (
    <>
      <RangeCore
        className={styles.root}
        ref={minContainerRef}
        sibling={maxContainerRef.current}
        percent
        onChange={val => handleMinChange(val)}
        value={minVal}
        rate={step}
        min={min}
        max={maxVal}
      >
        <RangeThumb withAffordance={affordance} css={styleThumbLeft} />
        <RangeRail transparent css={styleRailLeftLine}>
          <RangeRail bgRail css={styleRailLeftLineIndicator} />
        </RangeRail>
      </RangeCore>

      <RangeCore
        className={styles.root}
        ref={maxContainerRef}
        sibling={minContainerRef.current}
        percent
        onChange={val => handleMaxChange(val)}
        value={maxVal}
        rate={step}
        min={minVal}
        max={max}
      >
        <RangeThumb withAffordance={affordance} css={styleThumbRight} />
        <RangeRail bgRail css={styleRailRightLine} />
      </RangeCore>
      {/* <RangeRail css={styleProgress}/> */}
    </>
  );
};

export default InputRange;
