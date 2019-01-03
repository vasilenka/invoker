import styles from './Textfield.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import FieldLabel from './../FieldLabel/FieldLabel';
import FieldInput from './../FieldInput/FieldInput';
import FieldHint from './../FieldHint/FieldHint';

class Textfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
    this.removeError = this.removeError.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      error: this.props.errorMessage
    });
  };

  removeError = e => {
    this.setState({
      ...this.state,
      error: false
    });
  };

  render() {
    const {
      id,
      label,
      secondaryLabel,
      tertiaryLabel,
      className,
      placeholder,
      value,
      defaultValue,
      hint,
      small,
      type,
      inline,
      disabled,
      required,
      yupShape,
      errorMessage,
      handleChange,
      handleBlur,
      handleFocus,
      handleClick,
      ...restProps
    } = this.props;

    return (
      <div
        {...restProps}
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
      >
        <FieldLabel
          id={id}
          label={label}
          small={small}
          inline={inline}
          secondaryLabel={secondaryLabel}
          tertiaryLabel={tertiaryLabel}
        />
        <FieldInput
          yupShape={yupShape}
          disabled={disabled}
          required={required}
          onClick={this.removeError}
          onFocus={this.removeError}
          placeholder={placeholder}
          type={type}
          small={small}
          error={this.state.error}
          id={id}
          name={id}
          defaultValue={defaultValue}
          value={value}
          className={classnames({
            [styles.spaceBottom]: (hint || this.state.error) && !inline
          })}
        />

        {hint && <FieldHint>{hint}</FieldHint>}

        {this.state.error && (
          <FieldHint error={errorMessage}>{errorMessage}</FieldHint>
        )}
      </div>
    );
  }
}

export default Textfield;
