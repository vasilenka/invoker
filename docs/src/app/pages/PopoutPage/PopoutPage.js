import styles from './PopoutPage.module.scss';
import React from 'react';
import cx from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Divider from './../../docs/Divider/Divider';

import Button from './../../components/Button/Button';
import Table from '../../components/Table/Table';
import Code from '../../docs/Code/Code';
import Text from '../../components/Text/Text';
import Popout from '../../components/Popout/Popout';

let headProps = ['', 'props', 'type', 'default'];
let buttonProps = [
  {
    required: true,
    name: 'children',
    type: 'fn(setVisibility, visible, popoutRef, wrapperRef) => React.Node',
    help:
      'Popout is using RenderProp pattern. Pass a function as children. The children will be used as the trigger event of the Tooltips.',
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
];

const popout = (
  <>
    <Text heading3 component="h3" style={{ maxWidth: '200px' }}>
      Consetetur sadipscing elitr, sed diam.
    </Text>
    <Text small component="p" style={{ marginBottom: 0, maxWidth: '200px' }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et.
    </Text>
  </>
);

const PopoutPage = ({ className, ...restProps }) => {
  return (
    <div>
      <Header
        title="Popout"
        description="A container for additional information or action."
      />
      <Table
        className={cx(styles.tableProps)}
        head={headProps}
        body={buttonProps}
      />
      <Subheader
        title="Location"
        description="All available Popout location."
      />
      <Preview>
        <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
          <Popout
            className={styles.tooltips}
            withArrow={false}
            rightTop
            content={popout}
          >
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                RightTop
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} right content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                Right
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} rightBottom content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                RightBottom
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} leftTop content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                LeftTop
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} left content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                Left
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} leftBottom content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                LeftBottom
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} topLeft content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                TopLeft
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} top content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                Top
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} topRight content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                TopRight
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} bottomLeft content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                BottomLeft
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} bottom content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                Bottom
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} bottomRight content={popout}>
            {(setVisible, visible, popRef, wrapperRef) => (
              <Button onClick={() => setVisible(!visible)} small primary>
                BottomRight
              </Button>
            )}
          </Popout>
        </div>
      </Preview>
      <Code>
        {`
const popout = (
  <>
    <Text heading3 component="h3" style={{ maxWidth: '200px' }}>
      Consetetur sadipscing elitr, sed diam.
    </Text>
    <Text small component="p" style={{ marginBottom: 0, maxWidth: '200px' }}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      labore et.
    </Text>
  </>
);

<Popout withArrow={false} rightTop content={popout}>
  {(setVisible, visible, popRef, wrapperRef) => (
    <Button onClick={() => setVisible(!visible)} small primary>
      RightTop
    </Button>
  )}
</Popout>

<Popout right content={popout}>
  {(setVisible, visible, popRef, wrapperRef) => (
    <Button onClick={() => setVisible(!visible)} small primary>
      Right
    </Button>
  )}
</Popout>

...

<Popout bottomRight content={popout}>
  {(setVisible, visible, popRef, wrapperRef) => (
    <Button onClick={() => setVisible(!visible)} small primary>
      BottomRight
    </Button>
  )}
</Popout>

        `}
      </Code>
      <Divider large />
    </div>
  );
};

export default PopoutPage;
