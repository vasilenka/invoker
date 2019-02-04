import styles from './Socky.module.scss';
import React from 'react';
import cx from 'classnames';

import SockyCanvas from '../SockyCanvas/SockyCanvas';
import SockyToolbar from '../SockyToolbar/SockyToolbar';

import Text from '../Text/Text';
import Button from './../Button/Button';
import SockyHeader from '../SockyHeader/SockyHeader';

const Socky = ({
  children,
  header,
  data,
  secondary,
  canvas,
  className,
  ratio,
  getImageData,
  closeDialog,
  src,
  ...restProps
}) => {
  const sockyRef = React.useRef();

  let [image, setImage] = React.useState();
  let [blob, setBlob] = React.useState();
  let [imageData, setImageData] = React.useState(data);
  let [canvasData, setCanvasData] = React.useState(canvas);

  React.useEffect(
    () => {
      if (getImageData && image && blob) {
        getImageData(image, blob, imageData);
        handleClose();
      }
      if (secondary && imageData) {
        sockyRef.current.setData(imageData);
      }
      if (secondary && canvasData) {
        sockyRef.current.setCanvasData(canvasData);
      }
    },
    [image, blob, imageData, canvasData]
  );

  const setCroppedImage = () => {
    setImageData(sockyRef.current.getData());
    setCanvasData(sockyRef.current.getImageData());
    setImage(sockyRef.current.getCroppedCanvas().toDataURL());
    sockyRef.current.getCroppedCanvas().toBlob(blob => {
      setBlob(blob);
    });
  };

  const handleClose = () => {
    if (closeDialog) {
      closeDialog();
    }
  };

  const handleZoom = () => {
    let left =
      (sockyRef.current.getContainerData().width -
        sockyRef.current.getCropBoxData().width) /
      2;
    let top =
      (sockyRef.current.getContainerData().height -
        sockyRef.current.getCropBoxData().height) /
      2;
    sockyRef.current.setCropBoxData({
      top,
      left
    });
  };

  return (
    <div
      className={cx({
        [styles.root]: true
      })}
      {...restProps}
    >
      <SockyToolbar>
        <Text
          className={styles.title}
          heading2
          style={{ color: '#ffffff' }}
          component="h2"
        >
          Edit photo
        </Text>
        <footer className={styles.footer}>
          <Button primary className={styles.save} onClick={setCroppedImage}>
            Save and replace
          </Button>
          <Button
            secondaryAlt
            light
            className={styles.cancel}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </footer>
      </SockyToolbar>
      <SockyCanvas
        secondary={secondary}
        data={imageData}
        sockyRef={sockyRef}
        src={src}
        ratio={ratio}
        zoom={handleZoom}
      />
      <SockyHeader onClick={handleClose}>{header}</SockyHeader>
    </div>
  );
};

export default Socky;
