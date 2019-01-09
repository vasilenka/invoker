import styles from './FieldInputPage.module.scss';
import React, { useState } from 'react';
import cx from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Code from './../../docs/Code/Code';
import Divider from './../../docs/Divider/Divider';

import Table from './../../components/Table/Table';
import Text from './../../components/Text/Text';
import FieldInput from './../../components/FieldInput/FieldInput';
import FieldLabel from './../../components/FieldLabel/FieldLabel';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
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
    required: false,
    name: 'placeholder',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'small',
    type: 'boolean',
    default: 'false',
    help:
      'Add this props if you want to use small Textfield. By default, Textfield is using medium size.'
  },
  {
    required: false,
    name: 'required',
    type: 'boolean',
    default: 'false'
  },
  {
    required: false,
    name: 'disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    required: false,
    name: 'type',
    type: '"text" | "email" | "password" | "number" | "url"',
    help: 'Textfield will provide validation by default based on the type.',
    default: 'text'
  },
  {
    required: false,
    name: 'value',
    type: '"neutral" | "critical" | "positive"',
    default: '-'
  },
  {
    required: false,
    name: 'setValue',
    type: 'fn() => value',
    help: 'get the value of the FieldInput. Executed on onKeyUp event.',
    default: '-'
  },
  {
    required: false,
    name: 'tone',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'setTone',
    type: 'fn() => tone',
    help:
      'get the tone from FieldInput validation result. Executed on onBlur event.',
    default: '-'
  },
  {
    required: false,
    name: 'setMessage',
    type: 'fn() => message',
    help:
      'get the message from FieldInput validation result. Executed on onBlur event.',
    default: '-'
  },
  {
    required: false,
    name: 'yupShape',
    type: 'Yup shape object',
    help: `This is for field validation purpose. You can provide your own validation schema to this props if you want to override the default validation schema. Go to yup to see more details.`,
    default: '-'
  }
];

const FieldInputPage = props => {
  const [tone, setTone] = useState();
  const [message, setMessage] = useState();
  const [value, setValue] = useState();

  return (
    <div className={styles.root}>
      <Header
        title="FieldInput"
        description="Basic building block for input field for text."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader
        title="Example"
        description="A TextField will expand to fill the width of their parent container."
      />
      <Preview>
        <FieldLabel
          id="email"
          label="Email field"
          secondaryLabel="(with built-in validation)"
        />

        <FieldInput
          id="email"
          type="email"
          placeholder="Enter your email address"
          required
          setTone={tone => setTone(tone)}
          setMessage={message => setMessage(message)}
          setValue={value => setValue(value)}
        />
        <Text
          heading5
          component="h5"
          style={{ paddingTop: '12px' }}
          className={cx({ [styles[tone]]: tone })}
        >
          tone: {tone}
        </Text>
        <Text
          heading5
          component="h5"
          style={{ paddingTop: '12px' }}
          className={cx({ [styles[tone]]: tone })}
        >
          message: {message}
        </Text>
        <Text heading5 component="h5" style={{ paddingTop: '12px' }}>
          value: {value}
        </Text>
      </Preview>
      <Code>
        {`const [tone, setTone] = useState()
const [message, setMessage] = useState()
const [value, setValue] = useState()

<FieldInput
  id="email"
  type="email"
  placeholder="Enter your email address"
  required
  setTone={tone => setTone(tone)}
  setMessage={message => setMessage(message)}
  setValue={value => setValue(value)}
/>`}
      </Code>
      <Divider large />
    </div>
  );
};

export default FieldInputPage;
