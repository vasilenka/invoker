import styles from './FieldInput.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import * as yup from 'yup';
import { defaultShape } from './helper/fieldInputHelper';

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

class FieldInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || '',
      tone: this.props.tone,
      schema: this.props.schema || this.defaultSchema
    };
  }

  componentDidMount = () => {
    const {
      yupShape,
      value,
      type,
      required,
      id,
      setTone,
      setMessage
    } = this.props;
    this.validationSchema = yup
      .object()
      .shape(yupShape || defaultShape(type, required, id));

    if (value) {
      this.validationSchema
        .validate({
          [type || 'text']: value
        })
        .then(valid => {
          if (valid) {
            setTone('none');
            setMessage();
          }
        })
        .catch(err => {
          setTone('critical');
          setMessage(err.errors[0]);
        });
    }
  };

  onChange = e => {
    const { onChange } = this.props;
    this.setState({
      value: e.target.value
    });
    if (onChange) {
      onChange(e.target.value);
    }
  };

  onBlur = () => {
    let { setMessage, setTone, type, onBlur } = this.props;
    if (setMessage && setTone) {
      this.validationSchema
        .validate({
          [type || 'text']: this.state.value
        })
        .then(valid => {
          if (!valid) {
            return Promise.reject();
          }
          setTone();
          setMessage();
        })
        .catch(err => {
          setTone('critical');
          setMessage(err.errors[0]);
        });
    }
    if (onBlur) {
      onBlur();
    }
  };

  onFocus = () => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus();
    }
  };

  onClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  };

  onKeyDown = () => {
    const { onKeyDown } = this.props;
    if (onKeyDown) {
      onKeyDown();
    }
  };

  onKeyUp = () => {
    const { onKeyUp } = this.props;
    if (onKeyUp) {
      onKeyUp();
    }
  };

  render() {
    const {
      className,
      required,
      onChange,
      id,
      yupShape,
      onFocus,
      small,
      setMessage,
      setTone,
      toggleHint,
      disabled,
      type,
      placeholder,
      value,
      tone,
      inline,
      ...restProps
    } = this.props;

    return (
      <input
        {...restProps}
        disabled={disabled}
        required={required}
        onClick={this.onClick}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onKeyDown={this.onKeyDown}
        onKeyUp={this.onKeyUp}
        type={type || 'text'}
        id={id}
        className={classnames({
          [styles.root]: true,
          [styles.normal]: !small,
          [styles.small]: small,
          [styles.stack]: !inline,
          [styles.inline]: inline,
          [styles[tone]]: tone,
          [styles.disabled]: disabled,
          [className]: className
        })}
        placeholder={placeholder}
        value={this.state.value}
      />
    );
  }
}

export default FieldInput;
