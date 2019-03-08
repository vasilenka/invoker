import styles from './TooltipsPage.module.scss';
import React from 'react';
import cx from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Divider from './../../docs/Divider/Divider';
import Code from '../../docs/Code/Code';

import Button from './../../primitives/Button/Button';
import Table from '../../primitives/Table/Table';
import Tooltips from '../../primitives/Tooltips/Tooltips';
import Text from '../../primitives/Text/Text';

let headProps = ['', 'props', 'type', 'default'];
let buttonProps = [
  {
    required: true,
    name: 'children',
    type: 'React.Node',
    help:
      'You can pass anything as the children. This component will be used as the trigger event of the Tooltips.',
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
    name: 'content',
    type: 'any',
    default: '-'
  },
  {
    required: false,
    name: 'withArrow',
    type: 'boolean',
    help: '',
    default: 'true'
  },
  {
    required: true,
    name: 'position',
    type:
      '"rightTop" | "right" | "rightBottom" | "bottomRight" | "bottom" | "bottomLeft" | "leftBottom" | "left" | "leftTop" | "topLeft" | "top" | "topRight"',
    help: 'Use the value directly as the props.',
    default: '-'
  }
  // {
  //   required: false,
  //   name: 'onHover',
  //   type: 'fn() => Event',
  //   help: 'Pass your own event handler for the Button.',
  //   default: '-'
  // }
];

const tooltips = (
  <Text
    small
    component="p"
    style={{ color: '#FFFFFF', marginBottom: 0, maxWidth: '200px' }}
  >
    Additional information to help user understand more about the current
    element.
  </Text>
);

const TooltipsPage = ({ className, ...restProps }) => {
  return (
    <>
      <Header
        title="Tooltips"
        description="A brief, informative message that appears when a user interacts with an element."
      />
      <Table
        className={cx(styles.tableProps)}
        head={headProps}
        body={buttonProps}
      />
      <Subheader
        title="Location"
        description="All available Tooltips location."
      />
      <Preview>
        <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
          <Tooltips className={styles.tooltips} rightTop content={tooltips}>
            <Button small primary>
              rightTop
            </Button>
          </Tooltips>
          <Tooltips
            withArrow={false}
            className={styles.tooltips}
            right
            content={tooltips}
          >
            <Button small primary>
              right
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} rightBottom content={tooltips}>
            <Button small primary>
              rightBottom
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} leftTop content={tooltips}>
            <Button small primary>
              leftTop
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} left content={tooltips}>
            <Button small primary>
              left
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} leftBottom content={tooltips}>
            <Button small primary>
              leftBottom
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} topLeft content={tooltips}>
            <Button small primary>
              topLeft
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} top content={tooltips}>
            <Button small primary>
              top
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} topRight content={tooltips}>
            <Button small primary>
              topRight
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} bottomLeft content={tooltips}>
            <Button small primary>
              bottomLeft
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} bottom content={tooltips}>
            <Button small primary>
              bottom
            </Button>
          </Tooltips>
          <Tooltips className={styles.tooltips} bottomRight content={tooltips}>
            <Button small primary>
              bottomRight
            </Button>
          </Tooltips>
        </div>
      </Preview>
      <Code>
        {`
const tooltips = (
  <Text
    small
    component="p"
    style={{ color: '#FFFFFF', marginBottom: 0, maxWidth: '200px' }}
    >
    Additional information to help user understand more about the current element.
  </Text>
)

<Tooltips rightTop content={tooltips}>
  <Button small primary>rightTop</Button>
</Tooltips>

<Tooltips withArrow={false} right content={tooltips}>
  <Button small primary>right</Button>
</Tooltips>

...

<Tooltips bottomRight content={tooltips}>
  <Button small primary>bottomRight</Button>
</Tooltips>

        `}
      </Code>
      <Divider large />
    </>
  );
};

export default TooltipsPage;
