import styles from './FieldInput.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import * as yup from 'yup';

const defaultShape = (type = 'text', required, id = 'Text') => {
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
      return required
        ? { [type]: yup.string().required(`${[id]} is required`) }
        : '';
  }
};

class FieldInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      error: '',
      schema: this.props.schema || this.defaultSchema
    };
  }

  componentDidMount = () => {
    this.setState({ error: this.props.error });
    this.validationSchema = yup
      .object()
      .shape(
        this.props.yupShape ||
          defaultShape(this.props.type, this.props.required, this.props.id)
      );
    let { clearError, setError } = this.props;
    this.validationSchema
      .validate({
        [this.props.type || 'text']: this.state.value
      })
      .then(valid => {
        if (valid) {
          clearError();
        }
      })
      .catch(err => {
        setError(err.errors[0]);
      });
  };

  handleFocus = e => {
    // console.log(e.target.value)
    this.setState({
      error: false
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleBlur = e => {
    let { clearError, setError } = this.props;
    this.validationSchema
      .validate({
        [this.props.type || 'text']: this.state.value
      })
      .then(valid => {
        if (valid) {
          clearError();
        }
      })
      .catch(err => {
        setError(err.errors[0]);
      });
  };

  render() {
    const {
      className,
      required,
      id,
      yupShape,
      onFocus,
      small,
      setError,
      clearError,
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
          [styles.error]: error,
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
