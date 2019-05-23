import styles from './Sandbox.module.scss';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import kda from './data';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Divider from './../../docs/Divider/Divider';

import Socky from '../../components/Socky/Socky';

import Text from '../../components/Text/Text';
import SinglePreview from '../../components/SinglePreview/SinglePreview';
import Luna from '../../components/Luna/Luna';
import Button from '../../components/Button/Button';
import Tabs from '../../components/Tabs/Tabs';
import TabPanels from '../../components/TabPanels/TabPanels';
import TabPanel from '../../components/TabPanel/TabPanel';
import TabList from '../../components/TabList/TabList';
import Tab from '../../components/Tab/Tab';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import Toast from '../../components/Toast/Toast';
import LoadingBar from '../../components/LoadingBar/LoadingBar';
import Overlapping from '../../components/Overlapping/Overlapping';
import CarouselControl from '../../components/CarouselControl/CarouselControl';
import CarouselOverlapping from '../../components/CarouselOverlapping/CarouselOverlapping';
import OverlappingItem from '../../components/OverlappingItem/OverlappingItem';
import Spinner from '../../components/preloader/Spinner/Spinner';

import Slider from '../../components/Slider/Slider';
import SliderControl from '../../components/SliderControl/SliderControl';
import SliderContainer from '../../components/SliderContainer/SliderContainer';
import SliderItem from '../../components/SliderItem/SliderItem';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import hello from './img/hello.jpeg';

import { ReactComponent as Prev } from './img/prev.svg';
import { ReactComponent as Next } from './img/next.svg';
import IconButton from '../../components/IconButton/IconButton';
import Badge from '../../components/Badge/Badge';
import Image from '../../components/Image/Image';

import LazyTest from './LazyTest';

import Dialog from '../../components/Dialog/Dialog';
import InputRange from '../../components/InputRange/InputRange';
import InputRangeDouble from '../../components/InputRangeDouble/InputRangeDouble';
import Accordion from '../../components/Accordion/Accordion';
import AccordionList from '../../components/AccordionList/AccordionList';
import ActionBar from '../../components/ActionBar/ActionBar';
import ActionMenu from '../../components/ActionMenu/ActionMenu';
import Textfield from '../../components/Textfield/Textfield';

const images = [img6, img2, img3, img4, img5, img1];

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

  let [dialog, setDialog] = useState(false);

  let [originalImage, setOriginalImage] = React.useState();
  let [imageCropped, setImageCropped] = React.useState();
  // let [blobCropped, setBlobCropped] = React.useState(null)
  let [dataCropped, setDataCropped] = React.useState();

  useEffect(() => {
    setAlbums(kda);
    setOriginalImage(hello);
  }, []);

  useEffect(
    () => {
      setTimeout(() => {
        setIsTransitioning(false);
        setFromLeft(false);
        setFromRight(false);
      }, 800);
      let body = document.querySelector('body');
      let html = document.querySelector('html');
      let root = document.querySelector('#root');
      if (dialog) {
        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';
        root.style.height = '100vh';
        body.style.height = '100vh';
      } else {
        body.style.overflow = 'unset';
        html.style.overflow = 'unset';
        root.style.height = '';
        body.style.height = '';
      }
    },
    [activeIndex, dialog]
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

  let [canvas, setCanvas] = React.useState();

  const handleImageData = (img, blob, data, canvas) => {
    setImageCropped(img);
    // setBlobCropped(blob)
    setDataCropped(data);
    setCanvas(canvas);
  };

  let [value1, setValue1] = React.useState(10);

  let doubleInitial = { min: 0, max: 20 };
  let [doubleValue, setDoubleValue] = React.useState(doubleInitial);

  const handleRotation = val => {
    console.log(val);
  };

  const faqs = [
    {
      title: 'Accordion here 1',
      text:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eligendi ipsam quis maxime iure nihil dolore placeat distinctio ea nesciunt.'
    },
    {
      title: 'Accordion here 2',
      text:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eligendi ipsam quis maxime iure nihil dolore placeat distinctio ea nesciunt.'
    },
    {
      title: 'Accordion here 3',
      text:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eligendi ipsam quis maxime iure nihil dolore placeat distinctio ea nesciunt.'
    }
  ];

  let [altValue, setAltValue] = useState('');
  let [altTone, altSetTone] = useState('');
  let [message, setMessage] = useState('');

  // let [passwordMessage, setPasswordMessage] = useState('')
  // let [passwordTone, setPasswordTone] = useState('')
  // let [passwordField, setPasswordField] = useState('')

  return (
    <React.Fragment>
      <Header title="Sandbox" description="Experimental components" />

      <Preview clean>
        <Textfield
          label="Email address"
          id="hello"
          name="hello"
          type="email"
          value={altValue}
          tone={altTone}
          setTone={altSetTone}
          message={message}
          setMessage={msg => setMessage(msg)}
          setValue={e => setAltValue(e.target.value)}
          placeholder="Please enter your email address"
          required
        />
        <Textfield
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Enter a strong password"
          // value={passwordField}
          // setValue={e => setPasswordField(e.target.value)}
          // tone={passwordTone}
          // setTone={setPasswordTone}
          // message={passwordMessage}
          // setMessage={msg => setPasswordMessage(msg)}
          required
        />
      </Preview>

      <Preview clean>
        <Text heading4Alt component="h3">
          This is a preview for &ltActionBar/&gt, resize your viewport to tablet
          or mobile to see it in action!
        </Text>
        <ActionBar>
          <ActionMenu active>Home</ActionMenu>
          <ActionMenu>Schedule</ActionMenu>
          <ActionMenu>Register</ActionMenu>
          <ActionMenu>Contacts</ActionMenu>
        </ActionBar>
      </Preview>

      <Preview>
        <AccordionList>
          {faqs &&
            faqs.map((faq, index) => (
              <Accordion
                hideOnDoubleClick
                key={index}
                index={index}
                style={{ marginBottom: '24px' }}
              >
                {(triggerClick, show) => (
                  <React.Fragment>
                    <Text
                      onClick={triggerClick}
                      heading5Alt
                      style={{ cursor: 'pointer' }}
                      component="h2"
                    >
                      Show my content!
                    </Text>
                    {show && <Text large>{faq.text}</Text>}
                  </React.Fragment>
                )}
              </Accordion>
            ))}
        </AccordionList>
      </Preview>
      <Divider large />

      <Preview clean>
        <InputRangeDouble
          percent
          affordance
          min={0}
          max={100}
          minValue={doubleInitial.min}
          maxValue={doubleInitial.max}
          getValue={({ minVal, maxVal }) =>
            setDoubleValue({ min: minVal, max: maxVal })
          }
          step={1}
          dark
        />
        <Divider large />
        <Text heading3 component="p">
          bottom: {doubleValue.min}
        </Text>
        <Text heading3 component="p">
          top: {doubleValue.max}
        </Text>
      </Preview>
      <Divider large />

      <Preview clean>
        <InputRange
          percent
          affordance
          min={0}
          max={100}
          value={value1}
          getValue={val => setValue1(val)}
          unit={5}
          step={1}
          dark
        />
        <Divider large />
        <Text heading4 component="h3">
          value: {value1}
        </Text>
      </Preview>
      <Divider large />

      <Preview>
        {imageCropped ? (
          <Image
            src={imageCropped}
            containerStyle={{ marginBottom: '24px' }}
            alt="Hello there!"
            naturalWidth="720"
            naturalHeight="1080"
          />
        ) : null}
        <Button primary small onClick={() => setDialog(true)}>
          Open editor
        </Button>
      </Preview>

      {dialog && (
        <Dialog dark hidden>
          <Socky
            // secondary
            canvas={canvas}
            data={dataCropped}
            getImageData={handleImageData}
            getRotationValue={handleRotation}
            closeDialog={() => setDialog(false)}
            ratio={720 / 1080}
            src={originalImage}
            maxZoom={3}
            header={
              <Text heading3 style={{ color: '#ffffff' }} component="h2">
                Edit photo
              </Text>
            }
          />
        </Dialog>
      )}

      <Preview clean style={{ background: 'rgba(0,0,0,.80)' }}>
        <Text display3 component="h2" breakWord className={styles.title}>
          Cypher Pt. 4: Baepsae
        </Text>
        <Text component="p" medium className={styles.body}>
          Have smoke and carbon monoxide detectors? Great! Check that they’re
          working and make sure your listing description is up-to-date. Don’t
          have them? You can get a free detector and read other safety tips on
          our updated Home Safety page.
        </Text>
        <Text heading4Alt withChevron link component="a" target="#">
          Show all (2000+)
        </Text>
      </Preview>
      <Preview clean>
        <Card large>
          <Badge primary large>
            BETA
          </Badge>
          <Text
            display3
            component="h2"
            truncate
            style={{ marginBottom: '12px' }}
          >
            Cypher Pt. 4: Baepsae
          </Text>
          <Text component="p" medium>
            Have smoke and carbon monoxide detectors? Great! Check that they’re
            working and make sure your listing description is up-to-date. Don’t
            have them? You can get a free detector and read other safety tips on
            our updated Home Safety page.
          </Text>
          <Text heading4Alt withChevron link component="a" target="#">
            Show all (2000+)
          </Text>
        </Card>
      </Preview>
      <Divider large />

      <Preview clean>
        <Spinner />
        <Slider items={images} column="3">
          <SliderContainer className={styles.wrapper}>
            {() =>
              images.map((img, index) => (
                <SliderItem
                  key={index}
                  className={classnames(styles.column, 'col-sm-4')}
                >
                  <div
                    style={{
                      height: '360px',
                      marginBottom: '12px'
                    }}
                  >
                    <Image
                      className={classnames(styles.imageCarousel)}
                      src={img}
                      fit="cover"
                      alt="hello world"
                    />
                  </div>
                  <Text heading4 component="h2">
                    Campaign Number One on The Planet
                  </Text>
                  <Text small component="p">
                    Catch a wave with World Surf League experiences hosted by
                    pro surfers around the world.
                  </Text>
                </SliderItem>
              ))
            }
          </SliderContainer>
          <SliderControl>
            {context => (
              <IconButton
                secondary
                large
                className={classnames(styles.roundLeft, styles.buttonLeft)}
                onClick={context.prevSlide}
              >
                <Prev />
              </IconButton>
            )}
          </SliderControl>
          <SliderControl>
            {context => (
              <IconButton
                secondary
                large
                className={classnames(styles.roundRight, styles.buttonRight)}
                onClick={context.nextSlide}
              >
                <Next />
              </IconButton>
            )}
          </SliderControl>
        </Slider>
      </Preview>
      <Divider large />

      <Preview>
        <Overlapping data={kda} className={styles.iseng}>
          <CarouselOverlapping style={{ height: '320px' }}>
            {data =>
              data.map((kda, index) => (
                <OverlappingItem
                  style={{ height: '320px' }}
                  key={kda.id}
                  index={index}
                  item={kda}
                >
                  <Image fit="cover" src={kda.url} alt={kda.title} />
                </OverlappingItem>
              ))
            }
          </CarouselOverlapping>
          <CarouselControl>
            {({ data, isTransitioning, prev }) => (
              <button
                type="button"
                className={styles.controlLeft}
                disabled={isTransitioning}
                onClick={() => prev(data.length - 1)}
              >
                Prev
              </button>
            )}
          </CarouselControl>
          <CarouselControl>
            {({ data, isTransitioning, next }) => (
              <button
                type="button"
                className={styles.controlRight}
                disabled={isTransitioning}
                onClick={() => next(data.length - 1)}
              >
                Next
              </button>
            )}
          </CarouselControl>
          <CarouselControl>
            {({ isPlaying, setIsPlaying }) =>
              isPlaying ? (
                <div
                  style={{ padding: '6px 12px', cursor: 'pointer' }}
                  onClick={() => setIsPlaying(false)}
                >
                  Pause
                </div>
              ) : (
                <div
                  style={{ padding: '6px 12px', cursor: 'pointer' }}
                  onClick={() => setIsPlaying(true)}
                >
                  Play
                </div>
              )
            }
          </CarouselControl>
        </Overlapping>
      </Preview>
      <Divider large />
      <Preview>
        <LazyTest />
      </Preview>
      <Preview>
        <Overlapping data={kda}>
          <CarouselOverlapping style={{ height: '344px' }}>
            {data =>
              data.map((kda, index) => (
                <OverlappingItem
                  style={{ height: '320px' }}
                  key={kda.id}
                  index={index}
                  item={kda}
                >
                  <Image fit="cover" src={kda.url} alt={kda.title} />
                </OverlappingItem>
              ))
            }
          </CarouselOverlapping>
          <CarouselControl>
            {({ data, isTransitioning, prev }) => (
              <Button
                style={{ marginRight: '12px' }}
                small
                primary
                disabled={isTransitioning}
                onClick={() => prev(data.length - 1)}
              >
                Prev
              </Button>
            )}
          </CarouselControl>
          <CarouselControl>
            {({ data, isTransitioning, next }) => (
              <Button
                small
                primary
                disabled={isTransitioning}
                onClick={() => next(data.length - 1)}
              >
                Next
              </Button>
            )}
          </CarouselControl>
        </Overlapping>
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
        {banner && (
          <Banner tone="positive" className={styles.bannerPosition}>
            Whoops! Looks like you are having trouble loading the page.{' '}
            <Text component="a" link className={styles.lightLink}>
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
    </React.Fragment>
  );
};

export default Sandbox;
