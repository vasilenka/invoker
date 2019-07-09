import styles from './RightSectionPage.module.scss';
import React from 'react';
import cx from 'classnames';

import Header from './../../docs/Header/Header';
// import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Divider from './../../docs/Divider/Divider';

import Table from './../../components/Table';
// import Text from './../../components/Text/Text';
import Image from '../../components/Image/Image';

import rightSection from './webp/rightSection.webp';
import helper from './webp/helper.webp';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-',
  },
  {
    required: false,
    name: 'fixed',
    type: 'boolean',
    help: 'Set the position property to fixed.',
    default: '-',
  },
  {
    required: false,
    name: 'children',
    type: 'React.Node',
    default: '-',
  },
];

const RightSectionPage = props => {
  return (
    <div className={cx(styles.root)}>
      <Header
        title="RightSection"
        description="Good for a additional information and secondary navigation."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      {/* <Subheader title="Example" description="" /> */}
      <Preview>
        <Image
          containerClassName={styles.previewImage}
          src={rightSection}
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

export default RightSectionPage;
