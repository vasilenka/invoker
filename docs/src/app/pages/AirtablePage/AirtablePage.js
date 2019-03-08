import styles from './AirtablePage.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

import Header from './../../docs/Header/Header';
import Divider from './../../docs/Divider/Divider';

import Lab from '../../primitives/Lab/Lab';
import Spinner from '../../primitives/Spinner/Spinner';
import Airtable from 'airtable';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyqSgVh2vcDvTDfW'
});
const base = Airtable.base('app9tJz1QiQ6cWnSQ');

class AirtablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount = () => {
    base('post')
      .select({
        maxRecords: 10,
        view: 'Grid view'
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.map((record, index) =>
            this.setState({
              ...this.state,
              post: this.state.post.concat(record)
            })
          );
          fetchNextPage();
        },
        err => {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  render() {
    return (
      <React.Fragment>
        <Header title="AirtablePage" description="Experiments with airtable" />
        {this.state.post.length > 0 ? (
          <Lab post={this.state.post} className={classnames(styles.root)} />
        ) : (
          <Spinner />
        )}
        <Divider large />
      </React.Fragment>
    );
  }
}

export default AirtablePage;
