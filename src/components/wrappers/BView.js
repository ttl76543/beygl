import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BagelStore from '../../stores/BagelStore';
import {IntlProvider} from 'react-intl';
import { translationMessages } from '../../i18n';

export default class BView extends React.Component {
  constructor(props) {
    super(props);

    const lang = BagelStore.getLang();

    this.state = {
      lang: lang
    }
  }

  render() {
    return (
      <IntlProvider locale={this.state.lang} messages={translationMessages[this.state.lang]}>
        <div className="b-view">
          <Header handlePrev={this.handlePrev} value={this.props.headerValue} messages={this.props.messages} />
          <div className="b-view-content">
            {this.props.children}
          </div>
          <Footer handleClick={this.props.onNext} />
        </div>
      </IntlProvider>
    );
  }
}
