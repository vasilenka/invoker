import styles from './LunaPreview.module.scss';
import React from 'react';
import cx from 'classnames';
import Button from '../Button/Button';
import Image from '../Image/Image';

const LunaPreview = ({ className, images, removeImage, ...restProps }) => {
  return (
    <div>
      {images.map((image, i) => (
        <div key={i} className={cx(styles.root)}>
          <div
            onClick={() => removeImage(image.public_id)}
            className={styles.delete}
          >
            Delete
          </div>
          <Image fit="cover" src={image.secure_url} alt="cool" />
        </div>
      ))}
    </div>
  );
};

export default LunaPreview;
