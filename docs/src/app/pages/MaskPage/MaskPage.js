import styles from './MaskPage.module.scss';
import React from 'react';
// import classnames from 'classnames';

import Text from './../../primitives/Text/Text';
import Table from './../../primitives/Table/Table';
import Mask from './../../primitives/Mask/Mask';
import Image from './../../primitives/Image/Image';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Code from './../../docs/Code/Code';
import Divider from './../../docs/Divider/Divider';

import blue from './img/blue.jpg';
import carbon from './img/carbon.jpg';

let headProps = ['props', 'type', 'default'];

let bodyProps = [
  {
    name: 'children',
    type: 'React.Node',
    default: '-'
  },
  {
    name: 'className',
    type: 'string',
    default: '-'
  },
  {
    name: 'shape',
    type: '"circle" | "rounded" | "square"',
    help: 'Use the value directly as a props in Text component',
    default: '"square"'
  },
  {
    name: 'wash',
    type: 'boolean',
    default: 'false'
  }
];

const MaskPage = ({ className, ...restProps }) => {
  return (
    <React.Fragment>
      <Header title="Mask" description="Let you fit an item into a shape." />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader title="Example" />
      <Preview className={styles.previewMasked}>
        <Mask className={styles.maskedImage} circle>
          <Image
            src={blue}
            fit="cover"
            alt="Sophisticated white carbon net"
            naturalWidth="3905"
            naturalHeight="2929"
            bgColor="#008384"
          />
        </Mask>
      </Preview>
      <Code>
        {`<Mask className={styles.maskedImage} circle >
  <Image
    src={blue}
    fit="cover"
    alt="Sophisticated blue sea pattern"
    />
</Mask>`}
      </Code>
      <Subheader title="Shape" />
      <Preview className={styles.previewMasked}>
        <div style={{ marginRight: '48px' }}>
          <Text align="center" component="h3" className={styles.headingText}>
            "circle"
          </Text>
          <Mask className={styles.maskedImage} circle />
        </div>
        <div style={{ marginRight: '48px' }}>
          <Text align="center" component="h3" className={styles.headingText}>
            "rounded"
          </Text>
          <Mask className={styles.maskedImage} rounded />
        </div>
        <div style={{ marginRight: '48px' }}>
          <Text align="center" component="h3" className={styles.headingText}>
            "square"
          </Text>
          <Mask className={styles.maskedImage} />
        </div>
      </Preview>
      <Divider large />
      <Subheader
        title="Wash"
        description="If you expect the masked content to be nearly white, you can apply a wash to emphasize the edge of the mask."
      />
      <Preview className={styles.previewMasked}>
        <Mask className={styles.washedImage} circle wash>
          <Image
            src={carbon}
            fit="cover"
            alt="Sophisticated white carbon net"
            naturalWidth="3905"
            naturalHeight="2929"
            bgColor="#008384"
          />
        </Mask>
      </Preview>
      <Divider large />
    </React.Fragment>
  );
};

export default MaskPage;
