import styles from './ContainerPage.module.scss';
import React, { useState } from 'react';
import cx from 'classnames';
import * as yup from 'yup';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Code from './../../docs/Code/Code';
import Divider from './../../docs/Divider/Divider';

import Table from './../../components/Table/Table';
import Text from './../../primitives/Text/Text';
import FieldInput from './../../primitives/FieldInput/FieldInput';
import FieldLabel from './../../primitives/FieldLabel/FieldLabel';

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
      <Subheader
        title="Basic"
        description="A simple FieldInput component with type of email and validated using built-in validation schema."
      />
      <Preview />
      <Code className={styles.code}>{``}</Code>
      <Divider large />
      <Subheader
        title="Custom validation schema"
        description={
          'You can validate the field using a custom validation schema by providing a Yup shape.'
        }
      />
      <Divider large />
    </div>
  );
};

export default ContainerPage;
