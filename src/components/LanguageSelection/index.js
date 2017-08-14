import React from 'react';
import BView from '../wrappers/BView';
import messages from './messages';
import BagelActions from '../../actions/BagelActions';

export default class LanguageSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showing: "pickup"
    }

    this.handleNext = this.handleNext.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleNext() {

  }

  updateSelection(e) {
    this.setState({
      showing: e.target.dataset.view
    });
  }

  handleSelection(e) {
    BagelActions.updateLang(e.target.dataset.item);

    this.props.history.push(`/picker`);
  }

  render() {
    return (
      <BView onNext={this.handleNext} messages={messages} title="Delivery Options">
        <div className="delivery">
          <Selection handleClick={this.handleSelection} />
        </div>
      </BView>
    );
  }
}

function Selection(props) {
  return (
    <div>
      <button data-item="en" onClick={props.handleClick} className="btn-selection btn-full">English</button>
      <button data-item="es" onClick={props.handleClick} className="btn-selection btn-full">Español</button>
    </div>
  )
}
