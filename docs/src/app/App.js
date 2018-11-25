import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';

import Text from './components/Text/Text';
import Navbar from './components/Navbar/Navbar';
import Textfield from './components/Textfield/Textfield';
import Button from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className={classnames(styles.root)}>
        <Navbar />
        <div className={styles.container}>
          <Text className={styles.title} heading2 component="h1">
            Review and Pay
          </Text>
          <Text component="p">
            You can add more friends to this experience and confirm your
            reservation.Guests ages 10 and up can attend. Parents may also bring
            children under 2 years of age.
          </Text>
          <Textfield
            className={styles.field}
            label="First name"
            id="first_name"
          />
          <Textfield
            className={styles.field}
            label="Last name"
            id="last_name"
          />
          <Textfield
            className={styles.field}
            label="Street address"
            id="address"
            errorMessage="Address is required"
          />
          <Textfield className={styles.field} label="City" id="city" />
          <Button primary>Confirm & Pay</Button>
        </div>
      </div>
    );
  }
}

export default App;
