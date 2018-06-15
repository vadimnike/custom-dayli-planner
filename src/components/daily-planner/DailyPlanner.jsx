import React from 'react';
import DayHours from './DayHours';
import Weeks from './Weeks';
import moment from 'moment';

export default class DailyPlanner extends React.Component {
  state = {
    actualTime: moment()
  };

  handlePreviousWeek = () => {
    let actualTime = this.state.actualTime;
    actualTime.add(-1, 'w');
    this.setState({
      actualTime: actualTime
    })
  };

  handleNextWeek = () => {
    let actualTime = this.state.actualTime;
    actualTime.add(1, 'w');
    this.setState({
      actualTime: actualTime
    })
  };


  render() {
    let actualTime = this.state.actualTime;

    return (
      <div className="daily-planner">
        <div className="header-block">
          <span>My Daily Planner</span>
          <div className="year">
            {actualTime.format('YYYY')}
          </div>
        </div>
        <div className="daily-planner-wrap">
          <DayHours/>
          <Weeks
            week={actualTime.week()}
            goPrevWeek={this.handlePreviousWeek}
            goNextWeek={this.handleNextWeek}
          />
        </div>
      </div>
    )
  }
}
