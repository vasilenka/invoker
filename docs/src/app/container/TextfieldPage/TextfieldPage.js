import styles from './TextfieldPage.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';

import Textfield from './../../components/Textfield/Textfield';
import Table from './../../components/Table/Table';
import Text from './../../components/Text/Text';

// import * as yup from 'yup';

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
    type: 'any',
    default: '-'
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
    name: 'tone',
    type: '"neutral" | "critical" | "positive"',
    default: '-'
  },
  {
    required: false,
    name: 'message',
    type: 'string',
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

// const yupShape = {
//   email: yup
//     .string()
//     .email('Email is not valid')
//     .required('Email is required')
// };

class TextfieldPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header
          title="Textfield"
          description="TextField allows for text input."
        />
        <Table
          className={styles.tableProps}
          head={headProps}
          body={bodyProps}
        />
        <Subheader
          title="Example"
          description="A TextField will expand to fill the width of their parent container."
        />
        <Preview>
          <Textfield
            className={styles.field}
            id="location"
            type="email"
            required
            placeholder="This is a good placeholder text"
            value="hello@gmail.com"
            label="Email"
            secondaryLabel="(Please jangan alay)"
            tertiaryLabel={<Text link>why we need this?</Text>}
            message="There's some error here"
            tone="critical"
          />
          <Textfield
            className={styles.field}
            id="password"
            type="password"
            // value=""
            required
            placeholder="This is a good placeholder text"
            label="Password"
            secondaryLabel=""
            // tertiaryLabel={<Text link>why we need this?</Text>}
            // message="There's some error here"
            // tone="critical"
          />
        </Preview>
      </React.Fragment>
    );
  }
}

export default TextfieldPage;
