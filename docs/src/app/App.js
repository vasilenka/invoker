import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';

import Text from './components/Text/Text';
import Navbar from './components/Navbar/Navbar';
import Textfield from './components/Textfield/Textfield';
import Button from './components/Button/Button';
import Combobox from './components/Combobox/Combobox';
import RadioList from './components/RadioList/RadioList';
import CheckboxList from './components/CheckboxList/CheckboxList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      options: ['Primary options', 'Secondary options']
    };
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>
        this.setState({
          users: json
        })
      );
  };

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
          <Combobox
            limitedHeight
            label="Any friend?"
            className={styles.autocomplete}
            options={this.state.users}
          />

          <div className={styles.radioList}>
            <RadioList
              name="options"
              options={this.state.options}
              selected={this.state.options[1]}
            />
          </div>

          <CheckboxList className={styles.checkboxList} />

          <Button primary>Confirm & Pay</Button>
        </div>
      </div>
    );
  }
}

export default App;
