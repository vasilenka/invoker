import styles from './FieldInputPage.module.scss';
import React, { useState } from 'react';
import cx from 'classnames';
import * as yup from 'yup';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Code from './../../docs/Code/Code';
import Divider from './../../docs/Divider/Divider';

import { Table } from './../../components/Table';
import Text from '../../components/Text/Text';
import FieldInput from '../../components/FieldInput/FieldInput';
import FieldLabel from '../../components/FieldLabel/FieldLabel';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
  {
    required: true,
    name: 'id',
    type: 'string',
    default: '-',
  },
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-',
  },
  {
    required: false,
    name: 'placeholder',
    type: 'string',
    default: '-',
  },
  {
    required: false,
    name: 'small',
    type: 'boolean',
    default: 'false',
    help:
      'Add this props if you want to use small FieldInput. By default, FieldInput is using medium size.',
  },
  {
    required: false,
    name: 'required',
    type: 'boolean',
    default: 'false',
  },
  {
    required: false,
    name: 'disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    required: false,
    name: 'type',
    type: '"text" | "email" | "password" | "number" | "url"',
    help: 'Textfield will provide validation by default based on the type.',
    default: 'text',
  },
  {
    required: false,
    name: 'value',
    type: 'string',
    default: '-',
  },
  {
    required: false,
    name: 'setValue',
    type: 'fn() => value',
    help: 'return the value of the FieldInput. Executed on onChange event.',
    default: '-',
  },
  {
    required: false,
    name: 'tone',
    type: '"neutral" | "critical" | "positive"',
    default: '-',
  },
  {
    required: false,
    name: 'setTone',
    type: 'fn() => tone',
    help:
      'return the tone from FieldInput validation result. Executed on onBlur event.',
    default: '-',
  },
  {
    required: false,
    name: 'setMessage',
    type: 'fn() => message',
    help:
      'return the message from FieldInput validation result. Executed on onBlur event.',
    default: '-',
  },
  {
    required: false,
    name: 'yupShape',
    type: 'Yup shape object',
    help: `This is for field validation purpose. You can provide your own validation schema to this props if you want to override the default validation schema. Go to yup to see more details.`,
    default: '-',
  },
];

const FieldInputPage = props => {
  const [toneBasic, setToneBasic] = useState();
  const [messageBasic, setMessageBasic] = useState();
  const [valueBasic, setValueBasic] = useState();
  const [toneCustom, setToneCustom] = useState();
  const [messageCustom, setMessageCustom] = useState();
  const [valueCustom, setValueCustom] = useState();

  const yupShape = {
    text: yup
      .string()
      .required('Story is required')
      .min(20, 'Your story must be at least 20 character'),
  };

  return (
    <div className={styles.root}>
      <Header
        title="FieldInput"
        description="Basic building block input field with baked-in validation for email, password, text, number and required field. But you can also plug your own validation if needed, no string attached."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader
        title="Basic"
        description="A simple FieldInput component with type of email and validated using built-in validation schema."
      />
      <Preview>
        <FieldLabel
          id="email"
          label="Email field"
          secondaryLabel="(with built-in validation)"
        />
        <FieldInput
          className={styles.inputField}
          id="email"
          type="email"
          placeholder="Enter your email address"
          required
          setTone={tone => setToneBasic(tone)}
          setMessage={message => setMessageBasic(message)}
          setValue={value => setValueBasic(value)}
        />
        <Text
          heading5
          component="h5"
          style={{ paddingTop: '12px' }}
          className={cx({ [styles[toneBasic]]: toneBasic })}
        >
          tone: {toneBasic}
        </Text>
        <Text
          heading5
          component="h5"
          style={{ paddingTop: '12px' }}
          className={cx({ [styles[toneBasic]]: toneBasic })}
        >
          message: {messageBasic}
        </Text>
        <Text heading5 component="h5" style={{ paddingTop: '12px' }}>
          value: {valueBasic}
        </Text>
      </Preview>
      <Code className={styles.code}>
        {`
<FieldInput
  id="email"
  type="email"
  placeholder="Enter your email address"
  required
  setTone={setToneBasic}
  setMessage={setMessageBasic}
  setValue={setValueBasic}
/>
        `}
      </Code>
      <Divider large />
      <Subheader
        title="Custom validation schema"
        description={
          'You can validate the field using a custom validation schema by providing a Yup shape.'
        }
      />
      <Preview>
        <FieldLabel id="text" label="Story" />
        <FieldInput
          className={styles.inputField}
          id="text"
          type="text"
          placeholder="Write your story"
          setTone={tone => setToneCustom(tone)}
          setMessage={message => setMessageCustom(message)}
          setValue={value => setValueCustom(value)}
          yupShape={yupShape}
        />
        <Text
          heading5
          component="h5"
          style={{ paddingTop: '12px' }}
          className={cx({ [styles[toneCustom]]: toneCustom })}
        >
          tone: {toneCustom}
        </Text>
        <Text
          heading5
          component="h5"
          style={{ paddingTop: '12px' }}
          className={cx({ [styles[toneCustom]]: toneCustom })}
        >
          message: {messageCustom}
        </Text>
        <Text heading5 component="h5" style={{ paddingTop: '12px' }} breakWord>
          value: {valueCustom}
        </Text>
      </Preview>
      <Code className={styles.code}>
        {`
import * as yup from 'yup';

const yupShape = {
  text: yup
    .string()
    .required('Story is required')
    .min(20, 'Your story must be at least 20 character')
};

return (
  <FieldInput
    id="text"
    type="text"
    placeholder="Write your story"
    setTone={setToneCustom}
    setMessage={setMessageCustom}
    setValue={setValueCustom}
    yupShape={yupShape}
  />
)`}
      </Code>
      <Divider large />
    </div>
  );
};

export default FieldInputPage;
