import React from 'react';

export default class IncrementWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.countDown = this.countDown.bind(this);
    this.countUp = this.countUp.bind(this);
    this.updateParent = this.updateParent.bind(this);
  }

  countDown() {
    if (this.state.count > 0) {
      this.setState({
        count: --this.state.count
      });
    }

    this.updateParent();
  }

  countUp() {
    if (this.state.count < this.props.maxCount) {
      this.setState({
        count: ++this.state.count
      });
    }

    this.updateParent();
  }

  updateParent() {
    this.props.updateValue(this.state.count, this.props.name);
  }

  render() {
    return (
      <div className="increment">
        <button className="increment-item increment-btn" onClick={this.countDown}>-</button>
        <h2 className="increment-item">{this.state.count}</h2>
        <button className="increment-item increment-btn" onClick={this.countUp}>+</button>
      </div>
    );
  }
}
