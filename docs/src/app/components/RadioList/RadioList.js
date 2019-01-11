import styles from './RadioList.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import RadioMark from './../RadioMark/RadioMark';
import Text from './../Text/Text';

class RadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      onChange: this.onChange
    };
  }

  onChange = value =>
    this.setState({ ...this.state, selected: value }, () => {
      this.props.onChange(this.state.selected);
    });
  onFocus = () => {};

  render() {
    let {
      className,
      markClass,
      labelClass,
      header,
      radioClass,
      options,
      selected,
      value,
      name,
      children,
      onChange,
      ...restProps
    } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        {header}
        {options &&
          options.map((radio, index) => (
            <div
              className={classnames({
                [styles.defaultRadio]: true,
                [radioClass]: radioClass
              })}
            >
              <RadioMark
                className={classnames({
                  [styles.defaultMark]: true,
                  [markClass]: markClass
                })}
                key={`${name}${index}`}
                id={`radio__${name}${index}`}
                name={name}
                value={radio.value}
                checked={radio.value === this.state.selected}
                onChange={this.onChange}
                onClick={this.onClick}
                onFocus={this.onFocus}
              />
              <Text
                className={classnames({
                  [styles.defaultLabel]: true,
                  [labelClass]: labelClass
                })}
                heading5
                component="label"
                htmlFor={`radio__${name}${index}`}
              >
                {radio.label}
              </Text>
            </div>
          ))}
      </div>
    );
  }
}

export default RadioList;
