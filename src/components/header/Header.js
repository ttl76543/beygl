import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <button className="header-item header-btn-back">
          <i className="material-icons">arrow_back</i>
        </button>
        <h3 className="header-item header-title">
          <FormattedMessage {...this.props.messages.headerMessage}
            values={{
              total: this.props.value
            }}
          /></h3>
      </div>
    );
  }
}
