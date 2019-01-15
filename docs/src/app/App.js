import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import classnames from 'classnames';

import Container from './layouts/Container/Container';
import LeftSection from './layouts/LeftSection/LeftSection';
import MainContent from './layouts/MainContent/MainContent';

import Navbar from './components/Navbar/Navbar';
import Text from './components/Text/Text';

import TextfieldPage from './pages/TextfieldPage/TextfieldPage';
import TextPage from './pages/TextPage/TextPage';
import SandboxPage from './pages/Sandbox/Sandbox';
import MaskPage from './pages/MaskPage/MaskPage';

import FieldLabelPage from './pages/FieldLabelPage/FieldLabelPage';
import FieldInputPage from './pages/FieldInputPage/FieldInputPage';
import FieldHintPage from './pages/FieldHintPage/FieldHintPage';
import RadioInputPage from './pages/RadioInputPage/RadioInputPage';
import CheckboxPage from './pages/CheckboxPage/CheckboxPage';
import DropdownPage from './pages/DropdownPage/DropdownPage';

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
        <Router>
          <React.Fragment>
            <Container fixLeft fixRight className={styles.mainContainer}>
              <MainContent>
                <Route exact path="/text" component={TextPage} />
                <Route exact path="/textfield" component={TextfieldPage} />
                <Route exact path="/sandbox" component={SandboxPage} />
                <Route exact path="/mask" component={MaskPage} />
                <Route exact path="/field-label" component={FieldLabelPage} />
                <Route exact path="/field-input" component={FieldInputPage} />
                <Route exact path="/field-hint" component={FieldHintPage} />
                <Route exact path="/radio-list" component={RadioInputPage} />
                <Route exact path="/checkbox" component={CheckboxPage} />
                <Route exact path="/dropdown" component={DropdownPage} />
              </MainContent>
            </Container>
            <LeftSection fixed className={styles.leftSection}>
              <Link to="/sandbox">
                <Text className={styles.link} link>
                  Sandbox
                </Text>
              </Link>
              <Text heading6 component="h4" style={{ paddingTop: '24px' }}>
                PRIMITIVES
              </Text>
              <Link to="/text">
                <Text className={styles.link} link>
                  Text
                </Text>
              </Link>
              <Link to="/textfield">
                <Text className={styles.link} link>
                  Textfield
                </Text>
              </Link>
              <Link to="/field-label">
                <Text className={styles.link} link>
                  FieldLabel
                </Text>
              </Link>
              <Link to="/field-input">
                <Text className={styles.link} link>
                  FieldInput
                </Text>
              </Link>
              <Link to="/field-hint">
                <Text className={styles.link} link>
                  FieldHint
                </Text>
              </Link>
              <Link to="/radio-list">
                <Text className={styles.link} link>
                  Radio
                </Text>
              </Link>
              <Link to="/checkbox">
                <Text className={styles.link} link>
                  Checkbox
                </Text>
              </Link>
              <Link to="/dropdown">
                <Text className={styles.link} link>
                  Dropdown
                </Text>
              </Link>
              <Text heading6 component="h4" style={{ paddingTop: '24px' }}>
                UTILS
              </Text>
              <Link to="/mask">
                <Text className={styles.link} link>
                  Mask
                </Text>
              </Link>
            </LeftSection>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
