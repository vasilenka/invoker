import styles from './Lab.module.scss';
import React, { Component } from 'react';
import cx from 'classnames';

import Airtable from 'airtable';
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
import Image from '../Image/Image';
import Text from '../Text/Text';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyqSgVh2vcDvTDfW'
});
const base = Airtable.base('app9tJz1QiQ6cWnSQ');

class Lab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentWillMount = () => {
    base('post')
      .select({
        // Selecting the first 3 records in Grid view:
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
      <div>
        {this.state.post.map((post, index) => {
          return (
            <div style={{ marginBottom: '48px' }}>
              <div
                style={{
                  width: '100%',
                  height: '320px',
                  marginBottom: '16px',
                  overflow: 'hidden',
                  borderRadius: '8px'
                }}
              >
                <Image src={post.fields.cover_url} fit="cover" />
              </div>
              <Text heading6 style={{ marginBottom: '24px' }}>
                Published on {post.fields.publishedAt} by {post.fields.author}
              </Text>
              <Text heading2 component="h2" style={{ marginBottom: '4px' }}>
                {post.fields.title}
              </Text>
              <Text medium component="p">
                {post.fields.description}
              </Text>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Lab;
