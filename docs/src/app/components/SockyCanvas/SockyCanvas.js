import styles from './SockyCanvas.module.scss';
import React from 'react';
import cx from 'classnames';
import SockyCore from '../SockyCore/SockyCore';

const SockyCanvas = ({
  children,
  data,
  secondary,
  sockyRef,
  className,
  height,
  name,
  ratio,
  src,
  options,
  ...restProps
}) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      <SockyCore
        ref={sockyRef}
        src={src}
        viewMode={1}
        autoCrop={true}
        dragMode="move"
        data={secondary ? data : null}
        crossOrigin="true"
        responseType="blob/base64"
        style={{
          height: '100%',
          width: '100%'
        }}
        aspectRatio={ratio}
        imageName={name}
        background={false}
        minCropBoxWidth={1080}
        guides={false}
        cropBoxMovable={secondary ? true : false}
        cropBoxResizable={false}
      />
    </div>
  );
};

export default SockyCanvas;
