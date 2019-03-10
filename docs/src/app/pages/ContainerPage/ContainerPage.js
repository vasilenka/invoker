import styles from './ContainerPage.module.scss';
import React from 'react';
import cx from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
// import Code from './../../docs/Code/Code';
import Divider from './../../docs/Divider/Divider';

import Table from './../../components/Table/Table';
import Text from './../../primitives/Text/Text';
import Image from '../../primitives/Image/Image';

import desktopNarrow from './webp/desktop-narrow.webp';
import desktopWide from './webp/desktop-wide.webp';
import desktop from './webp/desktop.webp';
import fixLeft from './webp/fixLeft.webp';
import fixRight from './webp/fixRight.webp';
import mobile from './webp/mobile.webp';
import tablet from './webp/tablet.webp';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'type',
    type: '"normal" | "narrow" | "bleed"',
    help: 'Use the value directly as a props.',
    default: 'normal'
  },
  {
    required: false,
    name: 'fixLeft',
    type: 'boolean',
    default: '-'
  },
  {
    required: false,
    name: 'fixRight',
    type: 'boolean',
    default: '-'
  },
  {
    required: false,
    name: 'children',
    type: 'React.Node',
    default: '-'
  }
];

const ContainerPage = props => {
  return (
    <div className={styles.root}>
      <Header
        title="Container"
        description="Containers are useful in responsively laying out content on different screens."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader title="Type" description="" />
      <Text heading4 component="h3">
        Normal
      </Text>
      <Text medium component="p">
        Default container, provide default gutter space (default to 24px) for
        each screen size.
      </Text>
      <Divider medium />
      <Preview>
        <Text heading6Alt component="p" className={cx(styles.previewTitle)}>
          MOBILE (width &lt; 600px)
        </Text>
        <Image
          containerClassName={styles.previewImage}
          src={mobile}
          naturalWidth="960"
          naturalHeight="640"
        />
        <Text heading6Alt component="p" className={cx(styles.previewTitle)}>
          TABLET PORTRAIT & LANDSCAPE (600px &lt; width &lt; 1224px)
        </Text>
        <Image
          containerClassName={styles.previewImage}
          src={tablet}
          naturalWidth="960"
          naturalHeight="640"
        />
        <Text heading6Alt component="p" className={cx(styles.previewTitle)}>
          DESKTOP (1224px &lt; width &lt; 1800px)
        </Text>
        <Image
          containerClassName={styles.previewImage}
          src={desktop}
          naturalWidth="960"
          naturalHeight="640"
        />
        <Text heading6Alt component="p" className={cx(styles.previewTitle)}>
          DESKTOP WIDE (width &gt; 1800px)
        </Text>
        <Image
          containerClassName={styles.previewImage}
          src={desktopWide}
          naturalWidth="960"
          naturalHeight="640"
        />
      </Preview>
      <Divider large />
      <Text heading4 component="h3">
        Narrow
      </Text>
      <Text medium component="p">
        Extended from container, with limited max-width (default to 1080px) on
        desktop and larger screen.
      </Text>
      <Divider medium />
      <Preview>
        <Text heading6Alt component="p" className={styles.previewTitle}>
          DESKTOP (width &lt; 600px)
        </Text>
        <Image
          containerClassName={styles.previewImage}
          src={desktopNarrow}
          naturalWidth="960"
          naturalHeight="640"
        />
      </Preview>
      <Divider large />
      <Text heading4 component="h3">
        Bleed
      </Text>
      <Text medium component="p">
        A bleed container stretched to the edge of the screen. Good for a
        full-bleed image, or as a background container.
      </Text>
      <Divider large />
      <Subheader
        title="fixLeft"
        description={
          'Allocate a space on the left side of the container (default to 15vw). Good for a sidebar and secondary navigation. Note that this props only provide the space, you need to fill it with your own component (i.e. <LeftSection />).'
        }
      />
      <Preview>
        <Image src={fixLeft} naturalWidth="960" naturalHeight="640" />
      </Preview>
      <Divider large />
      <Subheader
        title="fixRight"
        description={
          'Allocate a space on the right side of the container (default to 25vw). Good for a additional information and secondary navigation. Note that this props only provide the space, you need to fill it with your own component (i.e. <RightSection />).'
        }
      />
      <Preview>
        <Image src={fixRight} naturalWidth="960" naturalHeight="640" />
      </Preview>
    </div>
  );
};

export default ContainerPage;
