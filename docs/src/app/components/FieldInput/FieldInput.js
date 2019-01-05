import styles from './FieldInput.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import { defaultShape } from './helper/fieldInputHelper';

import * as yup from 'yup';

class FieldInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tone: this.props.tone,
      defaultValue: this.props.defaultValue,
      schema: this.props.schema || this.defaultSchema
    };
  }

  componentDidMount = () => {
    this.validationSchema = yup
      .object()
      .shape(
        this.props.yupShape ||
          defaultShape(this.props.type, this.props.required, this.props.id)
      );

    if (this.props.value) {
      this.setState({
        value: this.props.value
      });
    }

    if (this.props.value) {
      this.validationSchema
        .validate({
          [this.props.type || 'text']: this.props.value
        })
        .then(valid => {
          if (valid) {
            this.props.clearTone();
            this.props.clearMessage();
          }
        })
        .catch(err => {
          this.props.setTone('critical');
          this.props.setMessage(err.errors[0]);
        });
    }
  };

  handleFocus = e => {
    this.setState({
      error: false
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };

  handleBlur = e => {
    let { clearMessage, setMessage, setTone, clearTone } = this.props;
    if (clearMessage && setMessage && setTone && clearTone) {
      this.validationSchema
        .validate({
          [this.props.type || 'text']: this.state.value
        })
        .then(valid => {
          if (valid) {
            clearTone();
            clearMessage();
          }
        })
        .catch(err => {
          setTone('critical');
          setMessage(err.errors[0]);
        });
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
      clearMessage,
      setTone,
      clearTone,
      toggleHint,
      disabled,
      type,
      placeholder,
      value,
      defaultValue,
      tone,
      inline,
      ...restProps
    } = this.props;

    return (
      <input
        {...restProps}
        disabled={disabled}
        required={required}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onFocus={onFocus}
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
        defaultValue={this.state.defaultValue}
      />
    );
  }
}

export default FieldInput;
