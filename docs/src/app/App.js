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
import PreloaderPage from './pages/PreloaderPage/PreloaderPage';
import ComboboxPage from './pages/ComboboxPage/ComboboxPage';
import AirtablePage from './pages/AirtablePage/AirtablePage';
import ButtonPage from './pages/ButtonPage/ButtonPage';
import BadgePage from './pages/BadgePage/BadgePage';
import TooltipsPage from './pages/TooltipsPage/TooltipsPage';
import PopoutPage from './pages/PopoutPage/PopoutPage';

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
                <Route exact path="/sandbox" component={SandboxPage} />
                <Route exact path="/airtable" component={AirtablePage} />
                <Route exact path="/text" component={TextPage} />
                <Route exact path="/button" component={ButtonPage} />
                <Route exact path="/textfield" component={TextfieldPage} />
                <Route exact path="/field-label" component={FieldLabelPage} />
                <Route exact path="/field-input" component={FieldInputPage} />
                <Route exact path="/field-hint" component={FieldHintPage} />
                <Route exact path="/radio-list" component={RadioInputPage} />
                <Route exact path="/checkbox" component={CheckboxPage} />
                <Route exact path="/dropdown" component={DropdownPage} />
                <Route exact path="/combobox" component={ComboboxPage} />
                <Route exact path="/mask" component={MaskPage} />
                <Route exact path="/preloader" component={PreloaderPage} />
                <Route exact path="/badge" component={BadgePage} />
                <Route exact path="/tooltips" component={TooltipsPage} />
                <Route exact path="/popout" component={PopoutPage} />
              </MainContent>
            </Container>
            <LeftSection fixed className={styles.leftSection}>
              <Link to="/sandbox">
                <Text className={styles.link} link>
                  Sandbox
                </Text>
              </Link>
              <Link to="/airtable">
                <Text className={styles.link} link>
                  Airtable
                </Text>
              </Link>
              <Text heading6 component="h4" style={{ paddingTop: '24px' }}>
                PRIMITIVES
              </Text>
              <Link to="/button">
                <Text className={styles.link} link>
                  Button
                </Text>
              </Link>
              <Link to="/checkbox">
                <Text className={styles.link} link>
                  Checkbox
                </Text>
              </Link>
              <Link to="/combobox">
                <Text className={styles.link} link>
                  Combobox
                </Text>
              </Link>
              <Link to="/dropdown">
                <Text className={styles.link} link>
                  Dropdown
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
              <Link to="/radio-list">
                <Text className={styles.link} link>
                  Radio
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
              <Link to="/preloader">
                <Text className={styles.link} link>
                  Preloader
                </Text>
              </Link>
              <Link to="/badge">
                <Text className={styles.link} link>
                  Badge
                </Text>
              </Link>
              <Link to="/tooltips">
                <Text className={styles.link} link>
                  Tooltips
                </Text>
              </Link>
              <Link to="/popout">
                <Text className={styles.link} link>
                  Popout
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
