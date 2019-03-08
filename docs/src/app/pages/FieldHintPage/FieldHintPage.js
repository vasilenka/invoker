import styles from './FieldHintPage.module.scss';
import React from 'react';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Code from './../../docs/Code/Code';
import Divider from './../../docs/Divider/Divider';

import Table from './../../components/Table/Table';
import FieldHint from './../../primitives/FieldHint/FieldHint';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
  {
    required: false,
    name: 'children',
    type: 'React.Node',
    default: '-'
  },
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'tone',
    type: '"positive" | "critical" | "neutral"',
    default: '"neutral"'
  }
];

const FieldHintPage = props => {
  return (
    <div className={styles.root}>
      <Header
        title="FieldHint"
        description="How much hints is too much hint?"
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader title="Basic" description="A simple FieldHint component." />
      <Preview>
        <FieldHint tone="critical">
          This is a message with positive tone
        </FieldHint>
        <FieldHint tone="positive">
          This is a message with positive tone
        </FieldHint>
        <FieldHint tone="neutral">
          This is a message with neutral tone
        </FieldHint>
      </Preview>
      <Code className={styles.code}>
        {`
<FieldHint tone="critical">
  This is a message with positive tone
</FieldHint>

<FieldHint tone="positive">
  This is a message with positive tone
</FieldHint>

<FieldHint tone="neutral">
  This is a message with neutral tone
</FieldHint>
        `}
      </Code>
      <Divider large />
    </div>
  );
};

export default FieldHintPage;
