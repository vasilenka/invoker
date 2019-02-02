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
  // let [reference, setReference] = React.useState();

  // React.useEffect(() => {
  //   if(document && reference.current) {
  //     document.addEventListener('mousedown', docClick, false)
  //     document.addEventListener('touchend', docClick, false)
  //   }
  // }, [reference])

  // const docClick = (e) => {
  //   if(!reference.current.contains(e.target)) {
  //     setReference(null)
  //   }
  // }

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
          <Popout className={styles.tooltips} rightTop content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                RightTop
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} right content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                Right
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} rightBottom content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                RightBottom
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} leftTop content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                LeftTop
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} left content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                Left
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} leftBottom content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                LeftBottom
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} topLeft content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                TopLeft
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} top content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                Top
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} topRight content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                TopRight
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} bottomLeft content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                BottomLeft
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} bottom content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                Bottom
              </Button>
            )}
          </Popout>
          <Popout className={styles.tooltips} bottomRight content={popout}>
            {handleClick => (
              <Button onClick={() => handleClick()} small primary>
                BottomRight
              </Button>
            )}
          </Popout>
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
    </div>
  );
};

export default PopoutPage;
