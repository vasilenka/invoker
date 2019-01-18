import styles from './ComboboxPage.module.scss';
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import Header from '../../docs/Header/Header';
import Subheader from '../../docs/Subheader/Subheader';
import Preview from '../../docs/Preview/Preview';
import Code from '../../docs/Code/Code';
import Divider from '../../docs/Divider/Divider';

import Table from '../../components/Table/Table';

import Text from '../../components/Text/Text';

import Downshift from 'downshift';
import FieldLabel from '../../components/FieldLabel/FieldLabel';
import ComboboxItem from '../../components/ComboboxItem/ComboboxItem';
import Combobox from '../../components/Combobox/Combobox';
import ComboboxInput from '../../components/ComboboxInput/ComboboxInput';
import ComboboxContainer from '../../components/ComboboxContainer/ComboboxContainer';

const fruits = [
  {
    label: (
      <Text heading4>
        Apple{' '}
        <span role="img" aria-label="apple emoji" style={{ color: 'red' }}>
          🍎
        </span>
      </Text>
    ),
    value: 'apple'
  },
  {
    label: (
      <Text heading3>
        Pear{' '}
        <span role="img" aria-label="pear emoji" style={{ color: 'red' }}>
          🍐
        </span>
      </Text>
    ),
    value: 'pear'
  },
  {
    label: 'Orange 🍊',
    value: 'orange'
  },
  {
    label: 'Grape 🍇',
    value: 'grape'
  },
  {
    label: 'Banana 🍌',
    value: 'banana'
  }
];

let headProps = ['', 'name', 'type', 'default'];

let containerProps = [
  {
    required: false,
    name: 'className',
    type: 'string',
    default: '-'
  },
  {
    required: true,
    name: 'refKey',
    default: '-',
    type: 'innerRef',
    help:
      "Make sure to pass 'innerRef' to this props. This is needed for the Downshift."
  },
  {
    required: false,
    name: 'component',
    type: 'HTML.element',
    default: 'ul',
    help: ''
  },
  {
    required: false,
    name: 'children',
    type: 'React.Node',
    default: '-',
    help: ''
  }
];

let optionsProps = [
  {
    required: false,
    name: 'component',
    type: 'HTML.element',
    default: 'ul',
    help: ''
  },
  {
    required: false,
    name: 'index',
    type: 'any',
    default: '-',
    help:
      'Optional by Downshift. This is how downshift keeps track of your item when updating the highlightedIndex as the user keys around.'
  },
  {
    required: true,
    name: 'label',
    type: 'React.node',
    default: '-',
    help: ''
  },
  {
    required: false,
    name: 'isSelected',
    type: 'boolean',
    default: 'false',
    help: ''
  },
  {
    required: false,
    name: 'isHighlighted',
    type: 'boolean',
    default: 'false',
    help: ''
  },
  {
    required: false,
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    help:
      'Optional by Downshift. If this is set to true, then all of the downshift item event handlers will be omitted. Items will not be highlighted when hovered, and items will not be selected when clicked. And the styling for the disabled item will be applied.'
  },
  {
    required: true,
    name: 'item',
    type: 'Combobox.option',
    default: '-',
    help:
      'Required by Downshift. This is the item data that will be selected when the user selects a particular item.'
  },
  {
    required: false,
    name: 'defaultClass',
    type: 'string of className',
    default: '-',
    help: 'Styling for the individual option.'
  },
  {
    required: false,
    name: 'highlightedClass',
    type: 'string of className',
    default: '-',
    help: 'Styling for the highlighted option.'
  },
  {
    required: false,
    name: 'selectedClass',
    type: 'string of className',
    default: '-',
    help: 'Styling for the selected option.'
  },
  {
    required: false,
    name: 'disabledClass',
    type: 'string of className',
    default: '-',
    help: 'Styling for the disabled option.'
  }
];

const ComboboxPage = props => {
  let [selected, setSelected] = useState('');

  useEffect(
    () => {
      console.log(selected);
    },
    [selected]
  );

  return (
    <div className={styles.root}>
      <Header
        title="Combobox"
        description="Dropdown + Search functionality = Combobox"
      />

      <Subheader
        title="Downshift"
        description={
          <span>
            We use Downshift as the wrapper for the Combobox component.
            Downshift is a libray to handle the logic behind the Combobox
            component. Go to{' '}
            <Text component="a" link href="https://github.com/paypal/downshift">
              Downshift
            </Text>
          </span>
        }
      />
      <Divider large />

      <Subheader
        title="Combobox"
        description="A wrapper for the complete combobox component. The sole purpose of this component is for the readibility of the code. You can just use regular <div> if you are sure about it."
      />
      <Divider large />

      <Subheader
        title="ComboboxInput"
        description="A wrapper for the regular input field with built-in styling."
      />
      <Divider large />

      <Subheader
        title="ComboboxContainer"
        description="A wrapper for the combobox options when it's shown on the screen."
      />
      <Table
        className={styles.tableProps}
        head={headProps}
        body={containerProps}
      />

      <Subheader
        title="ComboboxItem"
        description="A wrapper for the combobox item. The styling for the item is provided by default, but you can pass your own styling through the available props if you want to. The component will the provided styling instead of using the built-in one."
      />
      <Table
        className={styles.tableProps}
        head={headProps}
        body={optionsProps}
      />

      <Preview>
        <Downshift
          initialInputValue={fruits[0].value}
          onChange={selection => setSelected(selection)}
          itemToString={item => (item ? item.value : '')}
        >
          {({
            getRootProps,
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem
          }) => (
            <Combobox
              {...getRootProps({
                refKey: 'innerRef',
                className: classnames(styles.combobox)
              })}
            >
              <FieldLabel
                {...getLabelProps({
                  id: 'somethingawesome',
                  label: 'Dork souls',
                  secondaryLabel: '(git gud)'
                })}
              />
              <ComboboxInput
                {...getInputProps({
                  id: 'somethingawesome',
                  placeholder: 'Dork souls 3, git gud!'
                })}
              />
              <ComboboxContainer {...getMenuProps({ refKey: 'innerRef' })}>
                {isOpen
                  ? fruits
                      .filter(
                        fruit => !inputValue || fruit.value.includes(inputValue)
                      )
                      .map((fruit, index) => (
                        <ComboboxItem
                          {...getItemProps({
                            index,
                            key: fruit.value,
                            item: fruit,
                            label: fruit.label,
                            // defaultClass: styles.defaultItem,
                            isHighlighted: highlightedIndex === index,
                            // highlightedClass:styles.highlighted,
                            isSelected: selectedItem === fruit
                            // selectedClass: styles.selected,
                          })}
                        />
                      ))
                  : null}
              </ComboboxContainer>
            </Combobox>
          )}
        </Downshift>

        <Text component="p" medium>
          This is the selected value: <Text heading5>{selected.value}</Text>
        </Text>
      </Preview>
      <Code className={styles.code}>
        {`
const fruits = [
  {
    label: <Text heading4> Apple 🍎</Text>,
    value: 'apple'
  },
  {
    label: <Text heading3> Pear 🍐</Text>,
    value: 'pear'
  },
  {
    label: 'Orange 🍊',
    value: 'orange'
  },
  {
    label: 'Grape 🍇',
    value: 'grape'
  },
  {
    label: 'Banana 🍌',
    value: 'banana'
  }
]

let [selected, setSelected] = useState('')

<Downshift
  initialInputValue={fruits[0].value}
  onChange={selection => setSelected(selection)}
  itemToString={item => (item ? item.value : '')}
>
  {({
    getRootProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem
  }) => (
    <Combobox {...getRootProps({ refKey: 'innerRef' })}>
      <FieldLabel
        {...getLabelProps({
          id: 'somethingawesome',
          label: 'Dork souls',
          secondaryLabel: '(git gud)',
        })}
      />
      <ComboboxInput
        {...getInputProps({
          id: 'somethingawesome',
          placeholder: 'Dork souls 3, git gud!',
        })}
      />
      <ComboboxContainer {...getMenuProps({ refKey: 'innerRef' })}>
        {isOpen
          ? fruits
              .filter(
                fruit => !inputValue || fruit.value.includes(inputValue)
              )
              .map((fruit, index) => (
                <ComboboxItem
                  {...getItemProps({
                    index,
                    key: fruit.value,
                    item: fruit,
                    label: fruit.label,
                    isHighlighted: highlightedIndex === index,
                    isSelected: selectedItem === fruit,
                  })}
                />
              ))
          : null}
      </ComboboxContainer>
    </Combobox>
  )}
</Downshift>

        `}
      </Code>
      <Divider large />
    </div>
  );
};

export default ComboboxPage;
