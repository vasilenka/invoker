import styles from './RadioList.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import RadioMark from './../RadioMark/RadioMark';
import Text from './../Text/Text';
import { RadioContext } from './../context/context';

class RadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      onChange: this.onChange,
      name: ''
    };
  }

  componentWillReceiveProps = () => {
    this.setState({
      ...this.state,
      name: this.props.name
    });
  };

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
      <RadioContext.Provider value={{ state: this.state, props: this.props }}>
        <div
          className={classnames({
            [styles.root]: true,
            [className]: className
          })}
          {...restProps}
        >
          {children}
        </div>
      </RadioContext.Provider>
    );
  }
}

export default RadioList;
