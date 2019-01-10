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
      value: this.props.value || '',
      tone: this.props.tone || '',
      message: this.props.message || ''
    };
  }

  onChange = value => {
    this.props.onChange(value, this.props.type);
    this.setState({
      ...this.state,
      value
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
      onChange,
      onBlur,
      onFocus,
      onClick,
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
          id={id}
          type={type}
          className={classnames({
            [styles.spaceBottom]: (hint || this.state.error) && !inline
          })}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          small={small}
          value={this.props.value}
          setMessage={this.setMessage}
          tone={this.state.tone}
          setTone={this.setTone}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onFocus={this.onFocus}
          yupShape={yupShape}
        />

        {this.state.tone && this.state.message && (
          <FieldHint tone={this.state.tone}>{this.state.message}</FieldHint>
        )}
      </div>
    );
  }
}

export default Textfield;
