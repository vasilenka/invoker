import styles from './CheckboxPage.module.scss';
import React, { useState } from 'react';
import cx from 'classnames';

import Header from '../../docs/Header/Header';
import Subheader from '../../docs/Subheader/Subheader';
import Preview from '../../docs/Preview/Preview';
import Code from '../../docs/Code/Code';
import Divider from '../../docs/Divider/Divider';

import Table from '../../components/Table/Table';

import Checkbox from '../../primitives/Checkbox/Checkbox';
import CheckLabel from '../../primitives/CheckLabel/CheckLabel';
import Text from '../../primitives/Text/Text';
import CheckMark from '../../primitives/CheckMark/CheckMark';

let headProps = ['', 'name', 'type', 'default'];

let checkboxProps = [
  {
    required: true,
    name: 'children',
    type: 'React.Node',
    default: '-'
  },
  {
    required: true,
    name: 'id',
    type: 'string',
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
    name: 'name',
    type: 'string',
    default: '-'
  },
  {
    required: true,
    name: 'value',
    type: 'any',
    default: '-'
  },
  {
    required: false,
    name: 'isDisabled',
    type: 'boolean',
    default: 'false'
  },
  {
    required: false,
    name: 'isChecked',
    type: 'boolean',
    default: 'false'
  },
  {
    required: false,
    name: 'setValue',
    type: 'fn() => value',
    default: '-',
    help:
      'Get the value of the checkbox. Automatically triggered on onClick event.'
  }
];

const markProps = [
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'component',
    type: 'string of HTML.element',
    default: '<span>'
  },
  {
    required: false,
    name: 'large',
    type: 'boolean',
    default: 'small'
  },
  {
    required: false,
    name: 'size',
    type: '"normal" | "large"',
    default: 'normal',
    help: 'Use the value directly as a props in Text component.'
  }
];

const labelProps = [
  {
    required: true,
    name: 'label',
    type: 'React.node',
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
    name: 'onClick',
    type: 'fn() => Event',
    default: '-',
    help:
      'Pass your own handler here if you want to add some additional handler for the onClick event. By the default the function will return an event value.'
  }
];

const CheckboxPage = props => {
  let [val, setValue] = useState(['']);

  const validateValue = state => {
    if (state.isChecked) {
      val.push(state.value);
      setValue([...val]);
    } else {
      setValue(val.filter(value => value !== state.value));
    }
  };

  return (
    <div className={styles.root}>
      <Subheader
        title="Checkbox input"
        description="Set of components to make a complete checkbox input. Use checkbox when the user can select more than one options."
      />
      <Divider large />

      <Header
        title="Checkbox"
        description="Use Checkbox to wrap your Checkmark and CheckLabel. Checkbox will manage the shared values between Checkmark and RadioLabel."
      />
      <Table
        className={styles.tableProps}
        head={headProps}
        body={checkboxProps}
      />

      <Header
        title="CheckMark"
        description="A wrapper around the actual checkbox input element. Note that by default the CheckMark will render to a span element."
      />
      <Table className={styles.tableProps} head={headProps} body={markProps} />

      <Header
        title="CheckLabel"
        description="A wrapper component for the checkbox label. By default, CheckLabel will wrap it's children with a Text component with heading5 value and label element."
      />
      <Table className={styles.tableProps} head={headProps} body={labelProps} />

      <Subheader
        title="Complete Checkbox"
        description="Here are an example of a complete Checkbox utilizing all the component above."
      />

      <Preview>
        <Checkbox
          setValue={state => validateValue(state)}
          name="something"
          id="1"
          isChecked
          value="🍑"
        >
          <CheckMark className={styles.checkmark} />
          <CheckLabel
            label={
              <Text heading3>
                You can anything as label here!{' '}
                <span role="img" aria-label="three peach">
                  🍑🍑🍑
                </span>
              </Text>
            }
          />
        </Checkbox>

        <Checkbox
          setValue={state => validateValue(state)}
          className={styles.markRight}
          name="something"
          id="2"
          value="🍓"
        >
          <CheckLabel
            className={styles.labelLeft}
            label="Second checkbox label"
          />
          <CheckMark large className={cx(styles.checkmark, styles.toRight)} />
        </Checkbox>

        <Checkbox
          setValue={state => validateValue(state)}
          name="something"
          id="3"
          value="🍏"
        >
          <CheckMark
            large
            className={cx(styles.checkmark, styles.specialCheckmark)}
          />
          <CheckLabel
            label="Third checkbox label"
            className={styles.specialChecklabel}
          />
        </Checkbox>

        {val.length > 0 && (
          <Text>
            Selected value is:{' '}
            {val.map((el, index) => (
              <Text
                key={index}
                heading2
                style={{ paddingTop: '12px', paddingBottom: '12px' }}
              >
                {el}{' '}
              </Text>
            ))}
          </Text>
        )}
      </Preview>
      <Code className={styles.code}>
        {`
let [val, setValue] = useState(['']);

const validateValue = state => {
  if (state.isChecked) {
    val.push(state.value);
    setValue([...val]);
  } else {
    setValue(val.filter(value => value !== state.value));
  }
};

<Checkbox
  setValue={state => validateValue(state)}
  name="something"
  id="1"
  isChecked
  value="🍑"
>
  <CheckMark />
  <CheckLabel
    label={
      <Text heading3>
        You can anything as label here! 🍑🍑🍑
      </Text>
    }
  />
</Checkbox>

<Checkbox
  setValue={state => validateValue(state)}
  name="something"
  id="2"
  value="🍓"
>
  <CheckLabel label="Second checkbox label" />
  <CheckMark large/>
</Checkbox>

<Checkbox
  setValue={state => validateValue(state)}
  name="something"
  id="3"
  value="🍏"
>
  <CheckMark large />
  <CheckLabel label="Third checkbox label" />
</Checkbox>
        `}
      </Code>
      <Divider large />
    </div>
  );
};

export default CheckboxPage;
