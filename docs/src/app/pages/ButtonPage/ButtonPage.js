import styles from './ButtonPage.module.scss';
import React from 'react';
import cx from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Divider from './../../docs/Divider/Divider';

import Button from './../../components/Button/Button';
import Table from '../../components/Table/Table';
import Code from '../../docs/Code/Code';

let headProps = ['', 'props', 'type', 'default'];
let buttonProps = [
  {
    required: true,
    name: 'children',
    type: 'React.Node',
    help: 'You can pass anything as the children of the button.',
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
    name: 'type',
    type: 'string',
    default: 'button'
  },
  {
    required: true,
    name: 'styles',
    type:
      '"primary" | "primaryBold" | "primaryAlt" | "primaryAltBold" | "secondary" | "secondaryAlt"',
    help: 'Use the value directly as the props',
    default: '-'
  },
  {
    required: false,
    name: 'size',
    type: '"small" | "medium"',
    help: 'Use the value directly as the props',
    default: 'medium'
  },
  {
    required: false,
    name: 'disabled',
    type: 'boolean',
    help: '',
    default: 'false'
  },
  {
    required: false,
    name: 'onClick',
    type: 'fn() => Event',
    help: 'Pass your own event handler for the Button.',
    default: '-'
  }
];

const ButtonPage = ({ className, ...restProps }) => {
  return (
    <React.Fragment>
      <Header title="Button" description="Bring some action!" />
      <Table
        className={styles.tableProps}
        head={headProps}
        body={buttonProps}
      />
      <Subheader title="Styles" description="All available button styles." />
      <Preview>
        <Button className={cx(styles.button)} primary>
          Button Primary
        </Button>
        <Button className={cx(styles.button)} primaryAlt>
          Button PrimaryAlt
        </Button>
        <Button className={cx(styles.button)} primaryBold>
          Button PrimaryBold
        </Button>
        <Button className={cx(styles.button)} primary disabled>
          Button PrimaryDisabled
        </Button>
        <Button className={cx(styles.button)} secondary>
          Button Secondary
        </Button>
        <Button className={cx(styles.button)} secondary disabled>
          Button SecondaryDisabled
        </Button>
        <Button className={cx(styles.button)} secondaryAlt>
          Button SecondaryAlt
        </Button>
        <Button className={cx(styles.button)} secondaryAlt disabled>
          Button SecondaryAltDisabled
        </Button>
      </Preview>
      <Code>
        {`
<Button primary>Button Primary</Button>
<Button primaryAlt>Button PrimaryAlt</Button>
<Button primaryBold>Button PrimaryBold</Button>
<Button primary disabled>Button PrimaryDisabled</Button>
<Button secondary>Button Secondary</Button>
<Button secondary disabled>Button SecondaryDisabled</Button>
<Button secondaryAlt>Button SecondaryAlt</Button>
<Button secondaryAlt disabled>Button SecondaryAltDisabled</Button>
        `}
      </Code>
      <Divider large />
      <Subheader title="Sizes" description="All available button size." />
      <Preview>
        <Button style={{ marginRight: '12px' }} primary>
          Button Primary
        </Button>
        <Button primary small>
          Button Primary Small
        </Button>
      </Preview>
      <Code>
        {`
<Button className={styles.button} primary>Button Primary</Button>
<Button className={styles.button} primary small>Button Primary Small</Button>
        `}
      </Code>
      <Divider large />
    </React.Fragment>
  );
};

export default ButtonPage;
