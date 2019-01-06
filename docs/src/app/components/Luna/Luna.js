import styles from './Luna.module.scss';
import React, { Component } from 'react';
import classnames from 'classnames';

const handleFile = file => {
  let reader = new FileReader();
  let image = { src: '', value: '', file };
  reader.onload = r => (image.src = r.target.result);
  reader.readAsDataURL(file);
  image.value = reader;
  return image;
};

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.reader = new FileReader();
    this.state = {
      loaded: false,
      url: 'http://google.com',
      onLoad: this.onLoad,
      input: this.input,
      files: []
    };
  }

  // onLoad = () => {
  //   this.setState(({on}) => ({ on: !on }))
  // }

  onChange = e => {
    let files = e.target.files;
    let storedFiles = [];

    for (let i = 0; i < files.length; i++) {
      let image = handleFile(files[i]);
      storedFiles.push(image);
    }

    this.setState({
      files: storedFiles
    });
  };

  onLoad = (e, reader) => {
    let files = e.target.files;
    console.log('Files: ', files);
    console.log('Reader: ', reader);
  };

  render() {
    let { children, className, ...restProps } = this.props;
    return (
      <div
        className={classnames({
          [styles.root]: true,
          [className]: className
        })}
        {...restProps}
      >
        {children(this.state)}
        <input
          ref={this.input}
          onChange={this.onChange}
          className="Hide"
          capture={true}
          multiple
          type="file"
        />
      </div>
    );
  }
}

export default ImageUploader;
