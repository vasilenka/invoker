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
  // let [imageData, setImageData] = React.useState(data)

  React.useEffect(
    () => {
      // if(data) {
      //   sockyRef.current.setData(data)
      // }
      if (getImageData && image && blob) {
        getImageData(image, blob);
        handleClose();
      }
    },
    [image, blob]
  );

  const setCroppedImage = () => {
    // setImageData(sockyRef.current.getData())
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
        <Button
          small
          primary
          onClick={setCroppedImage}
          style={{ marginRight: '12px' }}
        >
          Save and replace
        </Button>
        <Button small secondaryAlt onClick={handleClose}>
          Close editor
        </Button>
      </SockyToolbar>
      <SockyCanvas
        sockyRef={sockyRef}
        src={src}
        className={styles.canvas}
        ratio={ratio}
      />
    </div>
  );
};

export default Socky;
