import styles from './RadioList.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';

import Radio from './../Radio/Radio';

class RadioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.selected
    };
  }

  onClick = value => {
    this.setState({
      ...this.state,
      value: value
    });
  };

  onFocus = e => {
    console.log('focusing!');
  };

  onChange = e => {
    console.log(e.target);
  };

  render() {
    let {
      header,
      options,
      selected,
      id,
      value,
      name,
      children,
      className,
      ...restProps
    } = this.props;

    return (
      <div className={styles.root} {...restProps}>
        {header}
        {options &&
          options.map((radio, index) => (
            <Radio
              key={`${id}${index}`}
              id={id}
              label={radio}
              value={radio}
              checked={this.state.value}
              onChange={this.onChange}
              onClick={this.onClick}
              onFocus={this.onFocus}
            />
          ))}
      </div>
    );
  }
}

export default RadioList;
