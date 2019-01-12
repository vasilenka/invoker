import styles from './RadioListPage.module.scss';
import React, { useState, useContext } from 'react';
import classnames from 'classnames';

import Header from '../../docs/Header/Header';
import Subheader from '../../docs/Subheader/Subheader';
import Preview from '../../docs/Preview/Preview';
import Code from '../../docs/Code/Code';
import Divider from '../../docs/Divider/Divider';

import Table from '../../components/Table/Table';

import RadioList from '../../components/RadioList/RadioList';
import RadioButton from '../../components/RadioButton/RadioButton';
import RadioMark from '../../components/RadioMark/RadioMark';
import RadioLabel from '../../components/RadioLabel/RadioLabel';
import Text from '../../components/Text/Text';

let headProps = ['', 'name', 'type', 'default'];

let bodyProps = [
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
    name: 'tone',
    type: '"positive" | "critical" | "neutral"',
    default: '"neutral"'
  }
];

const RadioButtonPage = props => {
  let [radio, setRadio] = useState('khairani');
  let [disabled, setDisabled] = useState([2]);
  let [options, setOptions] = useState([
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
  ]);

  return (
    <div className={styles.root}>
      <Header title="RadioList" description="" />
      <Table className={styles.tableProps} head={headProps} body={bodyProps} />
      <Subheader title="Basic" description="A simple FieldHint component." />
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
                checked={item.value === radio}
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
  className={styles.list}
  onChange={selected => setRadio(selected)}
  selected={radio}
>

  {options.map((item, index) => (
    <RadioButton className={styles.radio}>

      <RadioMark
        id={index}
        className={styles.mark}
        value={item.value}
        checked={item.value === radio} />

      <RadioLabel
        id={index}
        className={styles.label}
        label={item.label}/>

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
