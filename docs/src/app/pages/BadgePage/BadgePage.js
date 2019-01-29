import styles from './BadgePage.module.scss';
import React from 'react';
// import classnames from 'classnames';

import Table from './../../components/Table/Table';
import Badge from './../../components/Badge/Badge';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Code from './../../docs/Code/Code';
import Divider from './../../docs/Divider/Divider';

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
    name: 'size',
    type: '"small" | "large"',
    help: 'Use the value directly as a props in Text component',
    default: '"small"'
  },
  {
    name: 'type',
    type: '"primary" | "secondary"',
    help: 'Use the value directly as a props in Text component',
    default: '"primary"'
  },
  {
    name: 'circle',
    type: 'boolean',
    help: 'Set the Badge shape to full-rounded.',
    default: '"false"'
  },
  {
    name: 'component',
    type: 'string',
    help:
      'Add this props if you want to render a different element for the Badge wrapper. Different type of HTML.element has different display value, e.g. block or inline.',
    default: '"span"'
  }
];

const BadgePage = ({ className, ...restProps }) => {
  return (
    <React.Fragment>
      <Header
        title="Badge"
        description="Badge provide a metadata or indicate status of items and navigational elements."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader title="Example" />
      <Preview>
        <Badge large primary style={{ marginRight: '12px' }}>
          BETA
        </Badge>
        <Badge primary style={{ marginRight: '12px' }}>
          New
        </Badge>
        <Badge primary circle style={{ marginRight: '12px' }}>
          9+
        </Badge>
        <Badge primary circle style={{ marginRight: '12px' }}>
          9
        </Badge>
        <Badge large secondary style={{ marginRight: '12px' }}>
          BETA
        </Badge>
        <Badge secondary style={{ marginRight: '12px' }}>
          New
        </Badge>
        <Badge secondary circle style={{ marginRight: '12px' }}>
          9
        </Badge>
      </Preview>
      <Code>
        {`
<Badge large primary>
  BETA!
</Badge>
<Badge primary>
  New
</Badge>
<Badge large secondary>
  Large Secondary Badge
</Badge>
<Badge secondary>
  Small Secondary Badge
</Badge>
        `}
      </Code>
      <Divider large />
    </React.Fragment>
  );
};

export default BadgePage;
