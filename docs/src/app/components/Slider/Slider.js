import styles from './Slider.module.scss';
import React, { Component } from 'react';
import cx from 'classnames';
import { SliderContext } from './../context/context';
import Image from '../Image/Image';
import Button from '../Button/Button';

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
      width: 0
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
    <div
      ref={this.myRef}
      key={index}
      className={styles.itemContainer}
      style={{
        // marginRight: '12px',
        flex: '1',
        minWidth: `${100 / this.props.column}%`,
        height: '200px'
      }}
    >
      <Image
        className={cx(styles.image)}
        src={img}
        fit="cover"
        alt="hello world"
      />
    </div>
  );

  render() {
    let { children, className, ...restProps } = this.props;
    let sliderStyle = {
      transform: `translateX(-${this.state.activeIndex * this.state.width +
        this.state.activeIndex * 12}px)`,
      transition: 'all .4s cubic-bezier(0.8, 0, 0.2, 1)'
    };

    return (
      <SliderContext.Provider value={this.state}>
        <div
          className={cx({
            [styles.root]: true,
            [className]: className
          })}
          {...restProps}
        >
          <div style={sliderStyle} className={styles.wrapper}>
            {this.state.items &&
              this.state.items.map((item, index) =>
                this.renderImage(item, index)
              )}
          </div>
        </div>
        <Button primary small onClick={this.prevSlide}>
          Prev
        </Button>
        <Button primary small onClick={this.nextSlide}>
          Next
        </Button>
      </SliderContext.Provider>
    );
  }
}

export default Slider;
