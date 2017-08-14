import React from 'react';
import IncrementWidget from './IncrementWidget';
import $ from 'jquery';

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetLeft: 0
    }

    this.shouldFocusToDiv = this.shouldFocusToDiv.bind(this);
  }

  componentDidMount() {
    let offsetLeft = $(this.productDiv).offset().left;

    this.setState({
      offsetLeft: offsetLeft
    });

    this.shouldFocusToDiv();
  }

  componentDidUpdate(prevProps, prevState) {
    this.shouldFocusToDiv();
  }

  shouldFocusToDiv() {
    if (this.props.shouldFocus) {
      $(this.productDiv).parent('.picker').animate({scrollLeft: this.state.offsetLeft}, 300);
    }
  }

  render() {
    const width = this.props.width * .60;
    return (
      <div ref={el => this.productDiv = el} className="product">
        <ProductImage size={width} image={this.props.image} />
        <h3 className="product-content product-title">{this.props.name}</h3>
        <IncrementWidget updateValue={this.props.updateValue} name={this.props.name} maxCount={this.props.maxCount} />
        <p className="product-content product-desc">{this.props.description}</p>
      </div>
    );
  }
}

function ProductImage(props) {
  const style = {
    height: props.size,
    width: props.size
  }

  return (
    <div style={style} className="product-content product-img-wrapper">
      <img alt="product" src={props.image} className="product-img" />
    </div>
  )
}
