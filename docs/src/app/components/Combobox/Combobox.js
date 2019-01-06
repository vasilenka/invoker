import styles from './Combobox.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';
import Downshift from 'downshift';

import Autocomplete from './../Autocomplete/Autocomplete';
// import FieldLabel from './../FieldLabel/FieldLabel';
// import FieldInput from './../FieldInput/FieldInput';
// import Text from './../Text/Text';

const items = [
  { value: 'Apple' },
  { value: 'Pear' },
  { value: 'Orange' },
  { value: 'Grape' },
  { value: 'Banana' }
];

class Combobox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  render() {
    let { limitedHeight } = this.props;

    return (
      <Downshift
        // onChange={selection => alert(`You selected ${selection.value}`)}
        itemToString={item => (item ? item.value : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem
        }) => (
          <div>
            <label {...getLabelProps()}>Enter a fruit</label>
            <input {...getInputProps()} />
            <Autocomplete
              {...getMenuProps()}
              isOpen
              limitedHeight={limitedHeight}
            >
              {isOpen
                ? items
                    .filter(
                      item => !inputValue || item.value.includes(inputValue)
                    )
                    .map((item, index) => (
                      <li
                        className={styles.item}
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? 'lightgray'
                                : 'white',
                            fontWeight:
                              selectedItem === item ? 'bold' : 'normal'
                          }
                        })}
                      >
                        {item.value}
                      </li>
                    ))
                : null}
            </Autocomplete>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Combobox;
