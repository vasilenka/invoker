import styles from './Textfield.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import { setFieldTone } from './helper/fieldHelper';

import FieldLabel from './../FieldLabel/FieldLabel';
import FieldInput from './../FieldInput/FieldInput';
import FieldHint from './../FieldHint/FieldHint';

class Textfield extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      hint: '',
      tone: this.props.tone,
      message: this.props.message
    };
  }

  handleChange = value => {
    this.props.onChange(value, this.props.type);
    this.setState({
      ...this.state,
      value
    });
  };

  handleFocus = e => {
    this.setState({
      ...this.state,
      tone: ''
    });
  };

  setMessage = message => {
    this.setState({
      ...this.state,
      message
    });
  };

  setTone = tone => {
    this.setState({
      ...this.state,
      tone: setFieldTone(tone)
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
      message,
      tone,
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
          setMessage={this.setMessage}
          setTone={this.setTone}
          onBlur={this.onBlur}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          placeholder={placeholder}
          type={type}
          small={small}
          tone={this.state.tone}
          id={id}
          name={id}
          defaultValue={defaultValue}
          value={this.props.value}
          className={classnames({
            [styles.spaceBottom]: (hint || this.state.error) && !inline
          })}
        />

        {this.state.tone && this.state.message && (
          <FieldHint tone={this.state.tone}>{this.state.message}</FieldHint>
        )}
      </div>
    );
  }
}

export default Textfield;
