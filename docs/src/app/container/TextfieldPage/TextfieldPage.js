import styles from './TextfieldPage.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';

import Header from './../../docs/Header/Header';
import Subheader from './../../docs/Subheader/Subheader';
import Preview from './../../docs/Preview/Preview';

import Textfield from './../../components/Textfield/Textfield';
import Table from './../../components/Table/Table';
import Text from './../../components/Text/Text';

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
    default: 'false'
  },
  {
    required: false,
    name: 'errorMessage',
    type: '"current-password" | "on" | "off" | "username"',
    default: '-'
  }
];

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
            placeholder="This is a good placeholder text"
            label="Enter your location name"
            secondaryLabel="(So keep your eyes on me now)"
            tertiaryLabel={<Text link>help?</Text>}
            hint="This is the hint message that we have here"
          />
        </Preview>
      </React.Fragment>
    );
  }
}

export default TextfieldPage;
