import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import classnames from 'classnames';

import Container from './layouts/Container/Container';
import LeftSection from './layouts/LeftSection/LeftSection';
// import RightSection from './layouts/RightSection/RightSection';
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
              </MainContent>
            </Container>
            <LeftSection fixed className={styles.leftSection}>
              <Text heading6 component="h3" className={styles.sidebarTitle}>
                Components
              </Text>
              <Link to="/sandbox">
                <Text className={styles.link}>Sandbox</Text>
              </Link>
              <Link to="/mask">
                <Text className={styles.link}>Mask</Text>
              </Link>
              <Link to="/text">
                <Text className={styles.link}>Text</Text>
              </Link>
              <Link to="/textfield">
                <Text className={styles.link}>Textfield</Text>
              </Link>
              <Link to="/field-label">
                <Text className={styles.link}>FieldLabel</Text>
              </Link>
              <Link to="/field-input">
                <Text className={styles.link}>FieldInput</Text>
              </Link>
              <Link to="/field-hint">
                <Text className={styles.link}>FieldHint</Text>
              </Link>
            </LeftSection>
            {/* <RightSection fixed className={styles.rightSection}>
              <Text heading6 component="h3" className={styles.sidebarTitle}>
                Components
              </Text>
              <Link to="/text">
                <Text className={styles.link}>Text</Text>
              </Link>
              <Link to="/textfield">
                <Text className={styles.link}>Textfield</Text>
              </Link>
            </RightSection> */}
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
