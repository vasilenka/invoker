import styles from './FieldLabel.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Secondary from './../Secondary/Secondary';
import Text from './../Text/Text';

class FieldLabel extends Component {
  renderSecondary = () => {
    const { secondaryLabel } = this.props;

    if (!secondaryLabel) {
      return null;
    }

    return (
      <Secondary className={styles.secondaryLabel}>{secondaryLabel}</Secondary>
    );
  };

  renderTertiary = () => {
    const { tertiaryLabel } = this.props;

    if (!tertiaryLabel) {
      return null;
    }

    return <span className={styles.tertiaryLabel}>{tertiaryLabel}</span>;
  };

  render() {
    let {
      id,
      label,
      inline,
      small,
      secondaryLabel,
      tertiaryLabel,
      className,
      ...restProps
    } = this.props;

    const labelProps = {
      labelMedium: !small,
      labelSmall: small,
      htmlFor: id
    };

    return (
      <Text
        {...restProps}
        className={classnames({
          [styles.root]: true,
          [styles.stack]: !inline,
          [styles.inline]: inline
        })}
        {...labelProps}
        component="label"
      >
        {label}
        {this.renderSecondary()}
        {this.renderTertiary()}
      </Text>
    );
  }
}

export default FieldLabel;
