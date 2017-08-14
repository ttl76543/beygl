import React from 'react';
import BView from '../wrappers/BView';
import ProductItem from '../ProductItem';
import BagelActions from '../../actions/BagelActions';
import BagelStore from '../../stores/BagelStore';
import messages from './messages';
import CONSTANTS from '../../utils/constants';

export default class ItemPicker extends React.Component {
  constructor(props) {
    super(props);

    const lang = BagelStore.getLang();

    this.state = {
      totalSelected: 0,
      maxCount: 100,
      viewIndex: 0,
      lang: lang,
      products: CONSTANTS.PRODUCTS[lang]
    };

    this.jumpScroll = this.jumpScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.updateItemCount = this.updateItemCount.bind(this);
    this.bagelStoreUpdated = this.bagelStoreUpdated.bind(this);
  }

  componentWillMount() {
    BagelStore.bind('change', this.bagelStoreUpdated);

    this.handleResize();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUpdate(nextProps, nextState) {
    BagelStore.unbind('change', this.bagelStoreUpdated);
  }

  bagelStoreUpdated() {

  }

  handleResize() {
    let containerWidth = document.body.clientWidth;
    this.setState({
      containerWidth: containerWidth
    });
  }

  renderProducts() {
    return this.state.products.map((product,i) => <ProductItem shouldFocus={this.state.viewIndex === i} updateValue={this.updateItemCount} maxCount={this.state.maxCount} width={this.state.containerWidth} key={product.name} {...product} />);
  }

  updateItemCount(value, product) {
    let updateProduct = [...this.state.products];
    let productIndex = updateProduct.findIndex(p => p.name === product);
    updateProduct[productIndex].total = value;

    let total = updateProduct.reduce((sum,value) => {
      return sum + value.total
    }, 0);

    this.setState({
      products: updateProduct,
      totalSelected: total
    });
  }

  jumpScroll() {
    if (this.state.products.length - 1 === this.state.viewIndex) {
      // update store with final product list
      BagelActions.updateCart();
      // push user to delivery
      this.props.history.push(`/delivery`);
    } else {
      this.setState({
        viewIndex: ++this.state.viewIndex
      });
    }
  }

  render() {
    return (
      <BView onNext={this.jumpScroll} messages={messages} headerValue={this.state.totalSelected}>
        <div ref={picker => this.pickerEl = picker} className="picker">
          {this.renderProducts()}
        </div>
      </BView>
    );
  }
}
