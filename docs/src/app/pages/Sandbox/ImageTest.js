import React from 'react';

import LazyImage from '../../primitives/LazyImage/LazyImage';
import Image from '../../primitives/Image/Image';
import Spinner from '../../primitives/preloader/Spinner/Spinner';

const ImageTest = () => {
  return (
    <>
      <LazyImage src="https://images.unsplash.com/photo-1547744037-b80bdba1b6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format">
        {source =>
          source ? (
            <Image
              src={source}
              alt="unsplash image man... so big!"
              bgColor="#ff5a5b"
              naturalWidth={1090}
              naturalHeight={727}
            />
          ) : (
            <div
              style={{
                width: '100%',
                paddingBottom: `${(727 / 1090) * 100}%`,
                position: 'relative'
              }}
            >
              <Spinner style={{ backgroundColor: '#ff5a5b' }} />
            </div>
          )
        }
      </LazyImage>
      <LazyImage
        src={
          'https://images.unsplash.com/photo-1511654433543-916c15d46ad6?ixlib=rb-1.2.1&auto=format'
        }
      >
        {src =>
          src ? (
            <Image
              src={src}
              alt="unsplash image man... so big!"
              bgColor="coral"
              naturalWidth={484}
              naturalHeight={727}
            />
          ) : (
            <div
              style={{
                width: '100%',
                paddingBottom: `${(727 / 484) * 100}%`,
                position: 'relative'
              }}
            >
              <Spinner style={{ backgroundColor: '#0084845' }} />
            </div>
          )
        }
      </LazyImage>
    </>
  );
};

export default ImageTest;
