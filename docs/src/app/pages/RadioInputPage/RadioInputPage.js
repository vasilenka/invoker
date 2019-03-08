import styles from './RadioInputPage.module.scss';
import React, { useState } from 'react';
import classnames from 'classnames';

import Header from '../../docs/Header/Header';
import Subheader from '../../docs/Subheader/Subheader';
import Preview from '../../docs/Preview/Preview';
import Code from '../../docs/Code/Code';
import Divider from '../../docs/Divider/Divider';

import Table from '../../components/Table/Table';

import RadioList from '../../primitives/RadioList/RadioList';
import RadioButton from '../../primitives/RadioButton/RadioButton';
import RadioMark from '../../primitives/RadioMark/RadioMark';
import RadioLabel from '../../primitives/RadioLabel/RadioLabel';
import Text from '../../primitives/Text/Text';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
  {
    required: true,
    name: 'name',
    type: 'string',
    default: '-',
    help:
      'The name props will be assign to all radio buttons in a single group. And combined with index, it will be used to generate specific id for each RadioButton in the list.'
  },
  {
    required: false,
    name: 'children',
    type: 'React.Node',
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
    name: 'onChange',
    type: 'fn() => Radio.value',
    default: '-',
    help: 'Get the selected values of the RadioList'
  },
  {
    required: false,
    name: 'selected',
    type: 'Radio.value',
    default: '-',
    help: 'Assign a selected value to the RadioList'
  }
];

const options = [
  {
    label: (
      <Text heading3 style={{ color: '#ff5a5b' }}>
        hello there! General Kenobi{' '}
        <span aria-label="robot emoji" role="img">
          🤖
        </span>
      </Text>
    ),
    value: 'ongki'
  },
  {
    label: 'Khairani Ummah',
    value: 'khairani'
  },
  {
    label: 'Hanifan Mohamad',
    value: 'hanifan'
  }
];

const buttonProps = [
  {
    required: true,
    name: 'children',
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
    required: true,
    name: 'id',
    type: 'string',
    default: '-',
    help:
      'The id generated for each RadioButton will be unique, you just need to pass a value here'
  },
  {
    required: false,
    name: 'isDisabled',
    type: 'boolean',
    default: '-'
  }
];

const markProps = [
  {
    required: false,
    name: 'id*',
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
    name: 'name*',
    type: 'string',
    default: '-'
  },
  {
    required: false,
    name: 'isDisabled*',
    type: 'boolean',
    default: '-'
  },
  {
    required: false,
    name: 'checked*',
    type: 'boolean',
    default: 'false'
  },
  {
    required: true,
    name: 'value',
    type: 'Radio.value',
    default: '-'
  },
  {
    required: false,
    name: 'size',
    type: '"small" | "large"',
    default: 'small',
    help: 'Use the value directly as a props in Text component'
  },
  {
    required: false,
    name: 'onClick',
    type: 'fn() => Event',
    default: '-'
  },
  {
    required: false,
    name: 'onChange',
    type: 'fn() => Event',
    default: '-'
  }
];

const labelProps = [
  {
    required: true,
    name: 'id',
    type: 'string',
    default: '-',
    help: 'Provided by RadioButton by default'
  },
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-'
  },
  {
    required: true,
    name: 'label',
    type: 'React.node',
    default: '-'
  },
  {
    required: false,
    name: 'isDisabled*',
    type: 'boolean',
    default: '-',
    help: 'Provided by RadioButton by default'
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

const RadioButtonPage = props => {
  let [radio, setRadio] = useState('khairani');
  let [disabled] = useState([2]);

  return (
    <div className={styles.root}>
      <Subheader
        title="Radio"
        description="Set of primtives to make a complete radio input. Use radio input when you have a few options that a user can choose from. Don't use radio input if the user can select more than one option from a list, or if there's only one option to select from. That's what Checkbox are for."
      />
      <Divider large />

      <Header
        title="RadioList"
        description="A wrapper component for set of RadioButton."
      />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />

      <Header
        title="RadioButton"
        description="Use RadioButton to wrap your RadioMark and RadioLabel. RadioButton will also manage the disabled status of a radio input."
      />
      <Table
        className={styles.tableProps}
        head={headProps}
        body={buttonProps}
      />

      <Header
        title="RadioMark"
        description="A wrapper around the actual radio input element."
      />
      <Table
        className={styles.tableProps}
        head={headProps}
        body={markProps}
        message={'(*) Provided by RadioButton and RadioList by default'}
      />

      <Header
        title="RadioLabel"
        description="A wrapper component for the radio label. By default, RadioLabel will wrap it's children with a Text component with heading5 value and label element."
      />
      <Table className={styles.tableProps} head={headProps} body={labelProps} />

      <Subheader
        title="Complete Radio Input"
        description="Here are an example utilizing all the component above."
      />

      <Preview>
        <RadioList
          name="hello"
          className={styles.radioClass}
          onChange={selected => setRadio(selected)}
          selected={radio}
        >
          {options.map((item, index) => (
            <RadioButton
              key={`radio__${index}`}
              id={index}
              className={styles.radioClass}
              isDisabled={disabled.includes(index)}
            >
              <RadioMark
                className={classnames(styles.markClass)}
                value={item.value}
              />
              <RadioLabel className={styles.labelClass} label={item.label} />
            </RadioButton>
          ))}
        </RadioList>
        <Text component="p" medium>
          This is the selected radio:{' '}
          <Text heading5 style={{ fontWeight: '600' }}>
            {radio}
          </Text>
        </Text>
      </Preview>
      <Code className={styles.code}>
        {`
const options = [
  {
    label: (
      <Text heading3 style={{ color: '#ff5a5b' }}>
        hello there! General Kenobi 🤖
      </Text> ),
    value: 'ongki'
  },
  {
    label: 'Khairani Ummah',
    value: 'khairani'
  },
  {
    label: 'Hanifan Mohamad',
    value: 'hanifan'
  }
];

let [radio, setRadio] = useState('khairani')
let [disabled, setDisabled] = useState([2])

<RadioList
  name="hello"
  className={styles.radioClass}
  onChange={selected => setRadio(selected)}
  selected={radio}
>
  {options.map((item, index) => (
    <RadioButton
      id={index}
      className={styles.radioClass}
      isDisabled={disabled.includes(index)}
    >
      <RadioMark
        className={classnames(styles.markClass)}
        value={item.value}
      />

      <RadioLabel className={styles.labelClass} label={item.label} />
    </RadioButton>
  ))}
</RadioList>
        `}
      </Code>
      <Divider large />
    </div>
  );
};

export default RadioButtonPage;
