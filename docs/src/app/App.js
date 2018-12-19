import React, { Component } from 'react';
import styles from './App.module.scss';
import classnames from 'classnames';

import Container from './layouts/Container/Container';
import LeftSection from './layouts/LeftSection/LeftSection';
import RightSection from './layouts/RightSection/RightSection';
import MainContent from './layouts/MainContent/MainContent';

import Text from './components/Text/Text';
import Navbar from './components/Navbar/Navbar';

// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

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
        <Container fixLeft fixRight>
          <MainContent>
            <Text display3 component="h1">
              Easy to maintain open source documentation websites.
            </Text>
            <Text medium component="p">
              Mari is such a wonderful host! She is so knowledgeable and
              friendly. The tea ceremony was beautiful and she did an amazing
              job communicating and answering questions. It was a really special
              experience and I highly recommend it to anyone visiting Kyoto!
            </Text>
            <Text medium component="p">
              Every day most digital designers look for inspiration on sources
              like Dribbble or Behance for mobile and webdesign UI/UX works. In
              a large stream of the works, it is very easy to miss some quality
              shots with small number of likes and comments. We decided to
              change that and showcase some of the recent cool shots from the
              design community.
            </Text>
            <Text display3 component="h2">
              Mari is such a wonderful host! She is so knowledgeable and
              friendly. The tea ceremony was beautiful and she did an amazing
              job communicating and answering questions. It was a really special
              experience and I highly recommend it to anyone visiting Kyoto!
            </Text>
            <Text medium component="p">
              Mari is such a wonderful host! She is so knowledgeable and
              friendly. The tea ceremony was beautiful and she did an amazing
              job communicating and answering questions. It was a really special
              experience and I highly recommend it to anyone visiting Kyoto!
            </Text>
          </MainContent>
        </Container>
        <LeftSection fixed className={styles.leftSection} />
        <RightSection fixed className={styles.rightSection} />
      </div>
    );
  }
}

export default App;
