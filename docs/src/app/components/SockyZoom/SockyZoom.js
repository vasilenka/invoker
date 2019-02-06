import styles from './SockyZoom.module.scss';
import React from 'react';
import cx from 'classnames';
import RangeSlider from '../RangeSlider/RangeSlider';
import Text from '../Text/Text';

const SockyZoom = ({
  children,
  min,
  max,
  name,
  id,
  step,
  value,
  setZoom,
  className,
  ...restProps
}) => {
  let [sliderValue, setSliderValue] = React.useState(value);

  React.useEffect(
    () => {
      setZoom(sliderValue);
    },
    [sliderValue]
  );

  return (
    <div className={cx({ [styles.root]: true, [className]: className })}>
      <Text heading4 className={styles.overlay} component="h4">
        Zoom
      </Text>
      <RangeSlider
        name={name}
        id={id}
        min={min || 0}
        max={max || 4}
        step={0.02}
        value={sliderValue}
        getValue={val => setSliderValue(val)}
        {...restProps}
      />
    </div>
  );
};

export default SockyZoom;
