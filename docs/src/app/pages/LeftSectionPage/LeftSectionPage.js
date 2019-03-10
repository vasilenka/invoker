import styles from './LeftSectionPage.module.scss';
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

import leftSection from './webp/leftSection.webp';
import helper from './webp/helper.webp';

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
    name: 'fixed',
    type: 'boolean',
    help: 'Set the position property to fixed.',
    default: '-'
  },
  {
    required: false,
    name: 'children',
    type: 'React.Node',
    default: '-'
  }
];

const LeftSectionPage = props => {
  return (
    <div className={styles.root}>
      <Header
        title="LeftSection"
        description="Good for a sidebar and secondary navigation."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      {/* <Subheader title="Example" description="" /> */}
      <Preview>
        <Image
          containerClassName={styles.previewImage}
          src={leftSection}
          naturalWidth="960"
          naturalHeight="640"
        />
        <Image
          containerClassName={styles.previewImage}
          src={helper}
          naturalWidth="960"
          naturalHeight="72"
        />
      </Preview>
      <Divider large />
    </div>
  );
};

export default LeftSectionPage;
