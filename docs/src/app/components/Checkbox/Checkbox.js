import styles from './Checkbox.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import { CheckboxContext } from '../context/context';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      isDisabled: this.props.isDisabled,
      isChecked: this.props.isChecked,
      name: this.props.name,
      value: this.props.value,
      onChange: this.onChange
    };
  }

  // state = {
  //   hover: false,
  //   isDisabled: false,
  //   isChecked: false,
  //   name: '',
  //   value: '',
  //   onChange: this.onChange,
  // };

  onHover = e => {
    this.setState({
      ...this.state,
      hover: true
    });
  };

  onLeave = e => {
    this.setState({
      ...this.state,
      hover: false
    });
  };

  onChange = e => {
    let { onChange } = this.props;

    this.setState({
      ...this.state,
      value: e.target.value
    });

    if (onChange) {
      onChange(e);
    }
  };

  // componentDidMount = () => {
  //   let {id, name, isDisabled, isChecked} = this.props
  //   this.setState({
  //     isChecked,
  //     isDisabled,
  //     name,
  //     id,
  //   })
  // }

  render() {
    let {
      position,
      name,
      id,
      value,
      isChecked,
      isDisabled,
      children,
      className,
      ...restProps
    } = this.props;

    return (
      <CheckboxContext.Provider value={this.state}>
        <label
          {...restProps}
          className={classnames({
            [styles.root]: true,
            [className]: className
          })}
          onMouseEnter={this.onHover}
          onMouseLeave={this.onLeave}
        >
          {children}
        </label>
      </CheckboxContext.Provider>
    );
  }
}

export default Checkbox;
