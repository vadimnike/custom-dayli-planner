import React from 'react';
import moment from 'moment';
import WeekDays from './WeekDays'
import DaysOfMonth from './DaysOfMonth';
import DailyPlannner from '../daily-planner/DailyPlanner';

let time = moment("2016-10-20 4:30", "YYYY-MM-DD HH:mm");
let fullTime = moment();

export default class Calendar extends React.Component {
  state = {
    month: moment()
  };

  handlePreviousMonth = () => {
    let month = this.state.month;
    month.add(-1, "M");
    this.setState({
      month: month
    });
  };

  handleNextMonth = () => {
    let month = this.state.month;
    month.add(1, "M");
    this.setState({
      month: month
    });
  };

  handlePreviousYear = () => {
    let month = this.state.month;
    month.add(-12, "M");
    this.setState({
      month: month
    });
  };

  handleNextYear = () => {
    let month = this.state.month;
    month.add(12, "M");
    this.setState({
      month: month
    });
  };

  renderMonthName = () => <span>{this.state.month.format("MMMM")}</span>;
  renderYear = () => <span>{this.state.month.format("YYYY")}</span>;


  render() {
    // console.log(time, fullTime);
    return (
      <div className='table-wrap'>
        <div className="momnet-wrapper">
          {moment().format('LT')}
        </div>
        <DailyPlannner/>
        <table className="calendar bordered">
          <caption>
            <div className="calendar-handle-wrapper">
              <div className="moth-wrapper">
                <i className="ic ic-back prev-step" onClick={this.handlePreviousMonth}></i>
                 {this.renderMonthName()}
                <i className="ic ic-back next-step" onClick={this.handleNextMonth}></i>
              </div>
              <div className="year-wrapper">
                <i className="ic ic-back prev-step" onClick={this.handlePreviousYear}></i>
                 {this.renderYear()}
                <i className="ic ic-back next-step" onClick={this.handleNextYear}></i>
              </div>
            </div>
          </caption>
          <WeekDays/>
          <DaysOfMonth month={this.state.month}/>
        </table>
      </div>
    )
  }
}
