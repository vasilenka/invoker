import styles from './DropdownPage.module.scss';
import React, { useState } from 'react';
// import classnames from 'classnames';

import Header from '../../docs/Header/Header';
import Subheader from '../../docs/Subheader/Subheader';
import Preview from '../../docs/Preview/Preview';
import Code from '../../docs/Code/Code';
import Divider from '../../docs/Divider/Divider';

import Table from '../../primitives/Table/Table';
import Text from '../../primitives/Text/Text';
import Dropdown from '../../primitives/Dropdown/Dropdown';
import Option from '../../primitives/Option/Option';

let options = [
  {
    label: 'Nurul Reza',
    value: 'eza@gmail.com'
  },
  {
    label: 'Madams team',
    value: [
      {
        label: 'Ongki Herlambang',
        value: 'ongkiherlambang@gmail.com'
      },
      {
        label: 'Khairani Ummah',
        value: 'khairani.u@gmail.com'
      },
      {
        label: 'Hanifan Mohamad',
        value: 'hanifan@gmail.com'
      }
    ]
  }
];

let headProps = ['', 'name', 'type', 'default'];

let selectProps = [
  {
    required: true,
    name: 'name',
    type: 'string',
    default: '-'
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
    name: 'withArrow',
    type: 'boolean',
    default: 'true',
    help: 'Showing an arrow at the right side of the Dropdown component.'
  },
  {
    required: false,
    name: 'size',
    type: '"small" | "normal"',
    default: '"normal"',
    help: 'Use the value directly as props.'
  },
  {
    required: false,
    name: 'value',
    type: 'Dropdown.value',
    default: '-',
    help: 'Assign an initial selected value to the Dropdown'
  },
  {
    required: false,
    name: 'onChange',
    type: 'fn() => Radio.value',
    default: '-',
    help:
      'Get the selected values of the Dropdown. Triggered on onChange event.'
  }
];

const optionProps = [
  {
    required: true,
    name: 'label',
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
    default: '-'
  },
  {
    required: false,
    name: 'onClick',
    type: 'fn() => Event',
    default: '-',
    help:
      'Pass your own function if you want to add additional handler on onClick event.'
  }
];

const DropdownPage = props => {
  let [selected, setSelected] = useState('hanifan@gmail.com');

  return (
    <div className={styles.root}>
      <Header
        title="Dropdown"
        description="Use Dropdown when you have five or more items you want a user to choose from. For a smaller amount of items, consider using Radio input or Checkbox instead. Don't use it if you have a really long list of options, that will hurt the user experience. You might wanna use Combobox instead."
      />
      <Table
        className={styles.tableProps}
        head={headProps}
        body={selectProps}
      />

      <Header
        title="Option"
        description="A wrapper fot the actual option element."
      />
      <Table
        className={styles.tableProps}
        head={headProps}
        body={optionProps}
      />

      <Subheader
        title="Complete Dropdown"
        description="Basic usage of the Dropdown component."
      />

      <Preview>
        <Dropdown
          className={styles.dropdown}
          setValue={value => setSelected(value)}
          value={selected}
        >
          {options &&
            options.map((option, index) => {
              if (Array.isArray(option.value)) {
                return (
                  <optgroup
                    key={`${index}${option.value}`}
                    label={option.label}
                  >
                    {option.value.map((opt, index) => (
                      <Option
                        key={`${index}${opt.value}`}
                        value={opt.value}
                        label={opt.label}
                      />
                    ))}
                  </optgroup>
                );
              }
              return (
                <Option
                  isDisabled
                  key={`${index}${option.value}`}
                  value={option.value}
                  label={option.label}
                />
              );
            })}
        </Dropdown>
        <Text component="p" medium>
          This is the selected value:{' '}
          <Text heading5 style={{ fontWeight: '600' }}>
            {selected}
          </Text>
        </Text>
      </Preview>
      <Code className={styles.code}>
        {`
let options = [
  {
    label: 'Nurul Reza',
    value: 'eza@gmail.com'
  },
  {
    label: 'Madams team',
    value: [
      {
        label: 'Ongki Herlambang',
        value: 'ongkiherlambang@gmail.com'
      },
      {
        label: 'Khairani Ummah',
        value: 'khairani.u@gmail.com'
      },
      {
        label: 'Hanifan Mohamad',
        value: 'hanifan@gmail.com'
      }
    ]
  }
];

let [selected, setSelected] = useState('hanifan@gmail.com');

<Dropdown
  className={styles.dropdown}
  setValue={value => setSelected(value)}
  value={selected}
>
{options &&
  options.map((option, index) => {
    if (Array.isArray(option.value)) {
    return (
      <optgroup
        label={option.label}
      >
        {option.value.map((opt, index) => (
          <Option
            value={opt.value}
            label={opt.label}
          />
        ))}
      </optgroup>
    )}
    return (
      <Option
        isDisabled
        value={option.value}
        label={option.label}
      />
    )
  })}
</Dropdown>
        `}
      </Code>
      <Divider large />
    </div>
  );
};

export default DropdownPage;
