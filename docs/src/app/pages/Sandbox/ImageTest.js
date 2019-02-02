import React from 'react';
import Image from '../../components/Image/Image';

const ImageTest = () => {
  return (
    <Image
      fit="cover"
      src={'https://images.unsplash.com/photo-1548919973-5cef591cdbc9'}
      alt="unsplash image man... so big!"
    />
  );
};

export default ImageTest;
