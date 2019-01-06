import styles from './Luna.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Luna extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.state = {
      files: [],
      onClick: this.handleClick,
      input: this.input
    };
  }

  handleClick = () => {
    this.fileInput.current.click();
  };

  inputFileChanged = e => {
    let files = e.target.files;

    if (!window.FileReader) {
      throw new Error("Sorry, your browser does'nt support for preview");
    }

    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.onload = r => {
        const prevfiles = this.state.files;
        this.setState({
          files: prevfiles.concat({
            url: r.target.result,
            value: r,
            file: files[i]
          })
        });
      };
      reader.readAsDataURL(files[i]);
    }
  };

  render() {
    const { className, accept, capture, multiple, children } = this.props;

    return (
      <div
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
      >
        <input
          type="file"
          ref={this.fileInput}
          accept={Array.isArray(accept) ? accept.join(',') : accept}
          multiple={multiple}
          capture={capture}
          style={{ display: 'none' }}
          onChange={this.inputFileChanged}
        />
        {children(this.state)}
      </div>
    );
  }
}

Luna.defaultProps = {
  accept: 'image/*',
  capture: true,
  multiple: true
};
Luna.propTypes = {
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  capture: PropTypes.bool,
  multiple: PropTypes.bool
};

export default Luna;
