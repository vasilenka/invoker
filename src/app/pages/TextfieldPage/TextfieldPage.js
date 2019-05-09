import styles from './TextfieldPage.module.scss';
import React, { Component } from 'react';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';
import Code from './../../docs/Code/Code';

import Table from './../../components/Table/Table';

import Textfield from './../../primitives/Textfield/Textfield';
import Text from './../../primitives/Text/Text';

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
    name: 'onChange',
    type: 'fn() => event, value, type',
    default: '-'
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

class TextfieldPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'usern@me',
      password: 'P@ssw0rd'
    };
  }

  handleChange = (value, type) => {
    this.setState({
      [type]: value
    });
  };

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
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            secondaryLabel="(Please jangan alay)"
            tertiaryLabel={
              <Text link component="a">
                why we need this?
              </Text>
            }
          />
          <Textfield
            className={styles.field}
            id="password"
            type="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
            placeholder="Enter your password"
            label="Password"
            secondaryLabel=""
          />
        </Preview>
        <Code>
          {`
<Textfield
  className={styles.field}
  id="email"
  type="email"
  required
  placeholder="This is a good placeholder text"
  value={this.state.email}
  onChange={this.handleChange}
  label="Email"
  secondaryLabel="(Please jangan alay)"
  tertiaryLabel={
    <Text link component="a">
      why we need this?
    </Text>
  }
/>

<Textfield
  className={styles.field}
  id="password"
  type="password"
  value={this.state.password}
  required
  onChange={this.handleChange}
  placeholder="This is a good placeholder text"
  label="Password"
  secondaryLabel=""
/>
          `}
        </Code>
      </React.Fragment>
    );
  }
}

export default TextfieldPage;
