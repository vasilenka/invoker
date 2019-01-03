import styles from './FieldInput.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import * as yup from 'yup';

const defaultShape = (type = 'text', required) => {
  switch (type) {
    case 'email':
      return required
        ? {
            email: yup
              .string()
              .email('Email is not valid')
              .required()
          }
        : { email: yup.string().email('Email is not valid') };

    case 'password':
      return {
        password: yup
          .string()
          .min(8)
          .required()
      };

    case 'number':
      return required
        ? { password: yup.number().required() }
        : { password: yup.number() };

    case 'url':
      return required
        ? {
            url: yup
              .string()
              .url('URL is not valid')
              .required()
          }
        : { url: yup.string().url('URL is not valid') };

    default:
      return required ? { [type]: yup.string().required() } : '';
  }
};

class FieldInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      error: this.props.error,
      schema: this.props.schema || this.defaultSchema
    };
  }

  componentDidMount = () => {
    this.validationSchema = yup
      .object()
      .shape(
        this.props.yupShape ||
          defaultShape(this.props.type, this.props.required)
      );
  };

  handleFocus = e => {
    this.setState({
      error: false
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleBlur = e => {
    this.validationSchema
      .isValid({
        [this.props.type || 'text']: this.state.value
      })
      .then(valid => {
        valid
          ? this.setState({ error: false })
          : this.setState({ error: true });
      });
  };

  render() {
    const {
      className,
      required,
      id,
      yupShape,
      onClick,
      small,
      disabled,
      type,
      placeholder,
      value,
      defaultValue,
      error,
      inline,
      ...restProps
    } = this.props;

    return (
      <input
        {...restProps}
        disabled={disabled}
        required={required}
        onClick={onClick}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        type={type || 'text'}
        id={id}
        className={classnames({
          [styles.root]: true,
          [styles.normal]: !small,
          [styles.small]: small,
          [styles.stack]: !inline,
          [styles.inline]: inline,
          [styles.error]: this.state.error,
          [styles.disabled]: disabled,
          [className]: className
        })}
        placeholder={placeholder}
        value={this.state.value}
        defaultValue={defaultValue}
      />
    );
  }
}

export default FieldInput;
