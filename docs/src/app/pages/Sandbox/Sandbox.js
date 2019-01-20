import styles from './Sandbox.module.scss';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Divider from './../../docs/Divider/Divider';

import Text from './../../components/Text/Text';
import SinglePreview from './../../components/SinglePreview/SinglePreview';

import Luna from '../../components/Luna/Luna';
import Button from './../../components/Button/Button';

import Tabs from './../../components/Tabs/Tabs';
import TabPanels from './../../components/TabPanels/TabPanels';
import TabPanel from './../../components/TabPanel/TabPanel';
import TabList from './../../components/TabList/TabList';
import Tab from './../../components/Tab/Tab';
import Card from './../../components/Card/Card';

// import Spinner from './../../components/Spinner/Spinner'

import Draft from './../../components/Draft/Draft';

import Banner from './../../components/Banner/Banner';
import Toast from './../../components/Toast/Toast';
// import LunaPreview from '../../components/LunaPreview/LunaPreview'

import Image from '../../components/Image/Image';
import LoadingBar from '../../components/LoadingBar/LoadingBar';

import kda from './data';

const DataTab = props => {
  return (
    <Tabs className={styles.sideTab}>
      <TabPanels className={styles.tabPanels}>
        <div>
          <TabPanel>
            <Text heading4 component="h4">
              Tab Panel
            </Text>
            <Text small component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              soluta dicta cupiditate numquam pariatur quae, eum ducimus harum
              voluptates? Cumque?
            </Text>
          </TabPanel>
        </div>
        <TabPanel>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, enim.
        </TabPanel>
        <TabPanel>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ab
          ipsam totam labore sit magni voluptate optio nihil quibusdam eaque,
          voluptates accusamus facere corporis ad eveniet molestiae architecto
          alias similique quos dignissimos nam provident voluptatem minima?
          Sapiente iure est soluta.
        </TabPanel>
        <TabPanel>Momooollaanndddssss</TabPanel>
      </TabPanels>
      <TabList className={styles.tabList}>
        <Tab className={classnames(styles.special, styles.tab)}>
          Hello world
        </Tab>
        <Tab className={styles.tab} isDisabled>
          My name is SlimShady
        </Tab>
        <Tab className={styles.tab}>Masbul and kucing</Tab>
        <Tab className={styles.tab}>syalalaa</Tab>
      </TabList>
    </Tabs>
  );
};

const Sandbox = ({ className, ...restProps }) => {
  let [banner, setBanner] = useState(false);
  let [toast, setToast] = useState(false);

  let [albums, setAlbums] = useState();
  let [activeIndex, setActiveIndex] = useState(0);
  let [isTransitioning, setIsTransitioning] = useState(false);
  let [fromLeft, setFromLeft] = useState(false);
  let [fromRight, setFromRight] = useState(false);

  useEffect(() => {
    setAlbums(kda);
  }, []);

  useEffect(
    () => {
      setTimeout(() => {
        setIsTransitioning(false);
        setFromLeft(false);
        setFromRight(false);
      }, 800);
    },
    [activeIndex]
  );

  const nextImage = max => {
    setFromRight(true);
    setIsTransitioning(true);
    setTimeout(() => {
      if (activeIndex < max) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 250);
    // setAlbums(albums.concat(albums.splice(0, 1)))
  };

  const prevImage = max => {
    setFromLeft(true);
    setIsTransitioning(true);
    setTimeout(() => {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else {
        setActiveIndex(max);
      }
    }, 250);
    // let newAlbums = [...albums]
    // newAlbums.unshift(newAlbums.pop())
    // setAlbums(newAlbums)
  };

  // let [uploading, setUploading] = useState(false)
  // let [images, setImages] = useState([])

  // const onChange = e => {
  //   e.preventDefault()

  //   const files = Array.from(e.target.files)
  //   setUploading(true)

  //   files.forEach((file, i) => {
  //     const formData = new FormData()
  //     formData.append(i, file)
  //     fetch('http://localhost:5000/image-upload', {
  //       method: 'POST',
  //       body: formData
  //     })
  //       .then(res => res.json())
  //       .then(image => {
  //         setImages(prevImage => [...prevImage.concat(image)]);
  //         setUploading(false);
  //       });
  //   });
  // };

  // useEffect(
  //   () => {
  //     console.log('Selected: ', images);
  //   },
  //   [images]
  // );

  // const content = () => {
  //   switch (true) {
  //     case uploading:
  //       return <Spinner small/>;
  //     case images.length > 0:
  //       return <LunaPreview images={images} removeImage={removeImage} />;
  //     default:
  //       return null;
  //   }
  // };

  // const removeImage = id => {
  //   let newImages = images.filter(image => image.public_id !== id);
  //   setImages(newImages);
  // };

  // const [carousel, setCarousel] = useState()

  // const carousel = new Siema({
  //   selector: '.siema',
  //   duration: 200,
  //   easing: 'ease-out',
  //   perPage: 1,
  //   startIndex: 0,
  //   draggable: true,
  //   multipleDrag: true,
  //   threshold: 20,
  //   loop: false,
  //   rtl: false,
  //   onInit: () => {},
  //   onChange: () => {},
  // })

  return (
    <React.Fragment>
      <Header title="Sandbox" description="Experimental components" />
      <Subheader
        title="Tab"
        description="Tabs may be used to group between multiple selections."
      />
      <DataTab />
      <Subheader
        title="Card"
        description="The Card component is meant to highlight content in grids. It visually shows that items belong together and highlights the items on hover."
      />
      <Preview>
        <Card medium>
          <Text heading3 component="h2">
            A card component helps you guys
          </Text>
          <Text component="p" medium>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            ratione molestiae mollitia iusto ducimus nam esse, explicabo nulla
            est debitis, tenetur consectetur porro fugiat placeat? Sapiente quae
            nisi nihil quas animi! Quibusdam expedita at a aperiam. A molestiae
            ab amet!
          </Text>
        </Card>
      </Preview>
      <Divider large />
      <Subheader title="Image Uploader" />
      <Preview>
        <Luna multiple>
          {state => {
            return (
              <React.Fragment>
                {state.images.length > 0 && (
                  <header style={{ marginBottom: '16px' }}>
                    <Text heading3 component="h3">
                      Preview image
                    </Text>
                  </header>
                )}
                <div className="row">
                  {state.images.length > 0 &&
                    state.images.map((file, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => state.deleteImage(index)}
                          className={classnames(
                            'col-sm-4',
                            styles.imagePreview
                          )}
                        >
                          <SinglePreview src={file.url} alt={file.file.name} />
                        </div>
                      );
                    })}
                </div>
                <Button primary small onClick={state.onClick}>
                  Browse images
                </Button>
              </React.Fragment>
            );
          }}
        </Luna>
        {/* {content()} */}
        {/* <Divider medium />
        <div>
          <label htmlFor="multi">
            <Text heading5>Upload file</Text>
          </label>
          <input className={styles.imageInput} type="file" id="multi" onChange={onChange} multiple />
        </div> */}
      </Preview>
      <Divider large />
      <Preview>
        <Draft />
      </Preview>
      <Divider large />
      <Preview>
        {banner && (
          <Banner tone="positive" className={styles.bannerPosition}>
            Whoops! Looks like you are having trouble loading the page.{' '}
            <Text component="a" link>
              Reload the page
            </Text>
          </Banner>
        )}
        <Button small primary onClick={() => setBanner(!banner)}>
          Toggle Banner
        </Button>
      </Preview>
      <Divider large />
      <Preview>
        {toast && (
          <Toast className={styles.ToastPosition}>
            <Text heading3 component="h4" style={{ fontWeight: '700' }}>
              Whoops!
            </Text>
            <Text medium>
              Looks like you are having trouble loading the page.
            </Text>
          </Toast>
        )}
        <Button small secondary onClick={() => setToast(!toast)}>
          Toggle Toast
        </Button>
      </Preview>
      <Divider large />
      <Preview>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              padding: '0px 12px',
              width: '120px',
              height: '2px',
              maxWidth: '120px',
              marginBottom: '12px'
            }}
          >
            <LoadingBar />
          </div>
          <div
            style={{
              padding: '0px 12px',
              width: '120px',
              height: '2px',
              maxWidth: '120px',
              marginBottom: '12px'
            }}
          >
            <LoadingBar />
          </div>
          <div
            style={{
              padding: '0px 12px',
              width: '120px',
              height: '2px',
              maxWidth: '120px',
              marginBottom: '12px'
            }}
          >
            <LoadingBar />
          </div>
          <div
            style={{
              padding: '0px 12px',
              width: '120px',
              height: '2px',
              maxWidth: '120px',
              marginBottom: '12px'
            }}
          >
            <LoadingBar />
          </div>
        </div>
      </Preview>
      <Divider large />
      <Preview>
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            padding: 0,
            height: '400px'
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              position: 'absolute',
              transform: `translateX(-${activeIndex * 100}%)`
            }}
          >
            {albums &&
              albums.map(album => (
                <div
                  key={album.id}
                  style={{
                    flex: 1,
                    listStyle: 'none',
                    width: '100%',
                    minWidth: '100%'
                  }}
                >
                  <div
                    className={styles.containerItem}
                    style={{
                      width: '100%',
                      height: '320px',
                      marginBottom: '24px'
                    }}
                  >
                    <Image fit="cover" src={album.url} alt={album.title} />
                  </div>
                  <Text heading2 truncate>
                    {album.id}
                    <span style={{ color: 'rgba(0,0,0,.44)' }}>
                      /{albums.length}
                    </span>{' '}
                    - {album.title}
                  </Text>
                </div>
              ))}
          </div>
          {isTransitioning && (
            <div
              className={classnames({
                [styles.imageSlider]: true,
                [styles.fromRight]: fromRight,
                [styles.fromLeft]: fromLeft
              })}
            />
          )}
        </div>
        <Divider medium />
        <Button
          disabled={isTransitioning}
          style={{ marginRight: '12px' }}
          primary
          small
          onClick={() => prevImage(albums.length - 1)}
        >
          prev
        </Button>
        <Button
          disabled={isTransitioning}
          primary
          small
          onClick={() => nextImage(albums.length - 1)}
        >
          next
        </Button>
      </Preview>
      <Divider large />
    </React.Fragment>
  );
};

export default Sandbox;