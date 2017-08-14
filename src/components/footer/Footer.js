import React from 'react';
import messages from './messages';
import {FormattedMessage} from 'react-intl';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <button onClick={this.props.handleClick} className="footer-btn btn">
          <FormattedMessage {...messages.buttonNext} />
        </button>
      </div>
    );
  }
}
