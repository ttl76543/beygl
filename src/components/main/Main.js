import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LanguageSelection from '../LanguageSelection/index';
import DateSelection from '../DateSelection.js';
import ItemPicker from '../ItemPicker/index';
import Payment from '../Payment';
import Delivery from '../Delivery/index';

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Total Bagels",
      currentView: 0,
      flow: [
        "picker",
        "delivery",
        "payment"
      ]
    }
  }

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/' component={LanguageSelection}/>
          <Route path='/DateSelection' component={DateSelection}/>
          <Route path='/picker' component={ItemPicker} />
          <Route path='/delivery' component={Delivery} />
          <Route path='/payment' component={Payment} />
        </Switch>
      </div>
    );
  }
}
