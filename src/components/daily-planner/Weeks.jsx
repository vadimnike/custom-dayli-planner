import React from 'react';
import moment from 'moment';
// import {HOURS} from 'constants/hours';
// import shortid from 'shortid';
import Dates from './Dates';

export default class Weeks extends React.Component {
  state = {
    week: this.props.week,
    goNextWeek: this.props.goNextWeek,
    goPrevWeek: this.props.goPrevWeek
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      week: nextProps.week,
      goNextWeek: nextProps.goNextWeek,
      goPrevWeek: nextProps.goPrevWeek
    })
  }


  getWeekDays = () => {
    let weekArr = [];
    for (let i = 0; i <= 6; i++) {
      let weekDay = moment().week(this.state.week).weekday(i).startOf('day').format('ddd');
      let dayOfMonth = moment().week(this.state.week).weekday(i).startOf('day').format('MMM Do');
      weekArr.push(
        {
          day: weekDay,
          dayOfMonth: dayOfMonth
        });
    }
    return weekArr;
  };




  render() {
    return (
      <div className="weeks-column">
        <div className="table weeks">
          <i className="ic ic-back prev-step" onClick={this.props.goPrevWeek}></i>
          <div className="table-head">
            {
              this.getWeekDays().map(item => {
                return (
                  <div className="table-cell week-day" key={item.dayOfMonth}>
                    {item.day + ', ' + item.dayOfMonth}
                  </div>
                )
              })
            }
          </div>
         <Dates week={this.state.week}/>
          <i className="ic ic-back next-step" onClick={this.props.goNextWeek}></i>
        </div>
      </div>
    )
  }
}
