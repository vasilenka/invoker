import styles from './FieldLabelPage.module.scss';
import React from 'react';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Code from './../../docs/Code/Code';
import Divider from './../../docs/Divider/Divider';

import Table from './../../components/Table/Table';
import Text from './../../components/Text/Text';
import FieldLabel from './../../components/FieldLabel/FieldLabel';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
  {
    required: true,
    name: 'id',
    type: 'string',
    help: 'Provide an id of the complementary FieldInput',
    default: '-'
  },
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-'
  },
  {
    required: true,
    name: 'label',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'secondaryLabel',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'tertiaryLabel',
    type: 'React.Node',
    help:
      'Basically you can put anything here. For best user experience, only use this for a helper of the input field. e.g. a tooltips that provide detailed explanation about the current input field.',
    default: '-'
  },
  {
    required: false,
    name: 'small',
    type: 'boolean',
    default: 'false',
    help:
      'Add this props if you want to use small FieldLabel. By default, FieldLabel is using medium size.'
  }
];

const FieldInputPage = props => {
  return (
    <div className={styles.root}>
      <Header
        title="FieldLabel"
        description="A swiss-knife label text for your FieldInput."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader title="Basic" description="A simple FieldLabel component." />
      <Preview>
        <FieldLabel
          id="email"
          label="Email field"
          secondaryLabel="(with built-in validation)"
          tertiaryLabel={
            <Text link component="a" href="http://meridian.id">
              Go to creator
            </Text>
          }
        />
      </Preview>
      <Code className={styles.code}>
        {`
<FieldLabel
  id="email"
  label="Email field"
  secondaryLabel="(with built-in validation)"
  tertiaryLabel={
    <Text link component="a" href="http://meridian.id">Go to creator</Text>
  }
/>
        `}
      </Code>
      <Divider large />
    </div>
  );
};

export default FieldInputPage;
