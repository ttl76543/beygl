import React from 'react';
import BView from '../wrappers/BView';
import messages from './messages';

export default class Delivery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: "pickup"
    }

    this.handleNext = this.handleNext.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  handleNext() {

  }

  updateSelection(e) {
    this.setState({
      showing: e.target.dataset.view
    });
  }

  render() {
    return (
      <BView onNext={this.handleNext} messages={messages} title="Delivery Options">
        <div className="delivery">
          <div className="delivery-options">
            <button data-view="delivery" onClick={this.updateSelection} className={`btn-selection ${this.state.showing === "delivery" ? "active" : ""}`}>Deliver</button>
            <button data-view="pickup" onClick={this.updateSelection} className={`btn-selection ${this.state.showing === "pickup" ? "active" : ""}`}>Pickup</button>
          </div>
          <div className="delivery-view">
            {
              (() => {
                if (this.state.showing === "delivery") {
                  return <h1>SHOW FORM</h1>
                } else if (this.state.showing === "pickup") {
                  return <Selection />
                }
              })()
            }
          </div>
        </div>
      </BView>
    );
  }
}

function Selection() {
  return (
    <div>
      <button className="btn-selection btn-full">Location A</button>
      <button className="btn-selection btn-full">Location B</button>
    </div>
  )
}
