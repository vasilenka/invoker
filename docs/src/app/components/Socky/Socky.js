import styles from './Socky.module.scss';
import React from 'react';
import cx from 'classnames';

import SockyCanvas from '../SockyCanvas/SockyCanvas';
import SockyToolbar from '../SockyToolbar/SockyToolbar';

import Text from '../Text/Text';
import Button from './../Button/Button';

const Socky = ({
  children,
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

  return (
    <div
      className={cx({
        [styles.root]: true
      })}
      {...restProps}
    >
      <SockyToolbar className={styles.toolbar}>
        <Text heading2 style={{ color: '#ffffff' }} component="h2">
          Edit photo
        </Text>
        <footer>
          <Button
            primary
            onClick={setCroppedImage}
            style={{ marginRight: '12px' }}
          >
            Save and replace
          </Button>
          <Button secondaryAlt light onClick={handleClose}>
            Cancel
          </Button>
        </footer>
      </SockyToolbar>
      <SockyCanvas
        secondary={secondary}
        data={imageData}
        sockyRef={sockyRef}
        src={src}
        className={styles.canvas}
        ratio={ratio}
      />
    </div>
  );
};

export default Socky;
