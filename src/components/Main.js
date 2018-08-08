// require();
require('../../markup/css/main.css');
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import DayliPlanner from './daily-planner/DailyPlanner'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="calendar-wrapper">
        <DayliPlanner/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
