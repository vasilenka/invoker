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
            Let's get started!
          </Text>
          <Text className={styles.description} component="p">
            Introducing invoker, a design system built to adapth with any kind
            of project and empower designer and developer in solving the problem
            instead of nitpicking every pixel on sketch.
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
