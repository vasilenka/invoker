import styles from './Draft.module.scss';
import React, { Component } from 'react';
// import classnames from 'classnames';
import { Editor, EditorState } from 'draft-js';

class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
    this.setDomEditorRef = ref => (this.domEditor = ref);
  }

  componentDidMount() {
    this.domEditor.focus();
  }

  render() {
    return (
      <div className={styles.root} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          ref={this.setDomEditorRef}
        />
      </div>
    );
  }
}

export default Draft;
