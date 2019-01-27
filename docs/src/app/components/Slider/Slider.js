import styles from './Slider.module.scss';
import React, { Component } from 'react';
import cx from 'classnames';
import { SliderContext } from './../context/context';
import Image from '../Image/Image';
import Text from '../Text/Text';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      items: this.props.items,
      nextSlide: this.nextSlide,
      prevSlide: this.prevSlide,
      isTransitioning: false,
      column: this.props.column,
      maxIndex: this.props.items.length - this.props.column,
      minIndex: this.props.column - 1,
      width: 0,
      renderImage: this.renderImage
    };
    this.myRef = React.createRef();
  }

  componentDidMount = () => {
    this.setState({ width: this.myRef.current.clientWidth }, () => {
      console.log(this.state.width);
    });
  };

  nextSlide = () => {
    if (
      this.state.activeIndex < this.state.items.length - 1 &&
      this.state.activeIndex < this.state.maxIndex
    ) {
      this.setState(
        {
          ...this.state,
          activeIndex: this.state.activeIndex + 1
        },
        () => {
          console.log(this.state.activeIndex);
        }
      );
    }
  };

  prevSlide = () => {
    if (this.state.activeIndex > 0) {
      this.setState({
        ...this.state,
        activeIndex: this.state.activeIndex - 1
      });
    }
  };

  renderImage = (img, index) => (
    <div ref={this.myRef} key={index} className={cx(styles.column, 'col-sm-6')}>
      <div
        style={{
          height: '200px',
          marginBottom: '12px'
        }}
      >
        <Image
          className={cx(styles.image)}
          src={img}
          fit="cover"
          alt="hello world"
        />
      </div>
      <Text heading5Alt component="h2">
        Campaign Number One on The Planet
      </Text>
      <Text small component="p">
        Catch a wave with World Surf League experiences hosted by pro surfers
        around the world.
      </Text>
    </div>
  );

  render() {
    let { children, className, ...restProps } = this.props;

    return (
      <SliderContext.Provider value={this.state}>
        <div className={styles.root} {...restProps}>
          {children}
        </div>
      </SliderContext.Provider>
    );
  }
}

export default Slider;
