import React from 'react';
import moment from 'moment';
import shortid from 'shortid';
import {HOURS} from 'constants/hours';
import EventModal from './EventModal';

export default class Dates extends React.Component {
  state = {
    dates: null,
    events: [],
    isOpenedModal: false
  };

  getHoursByDays = () => {
    let hoursByDays = [];
    let hoursArray = [];

    for (let i = 0; i < 7; i++) {
      let elements = [];
      HOURS.forEach((item) => {
        let weekDay = moment().week(this.props.week).weekday(i).startOf('day').format('ddd');
        let dayOfMonth = moment().week(this.props.week).weekday(i).startOf('day').format('MMM Do');
        let el = item + ', ' + weekDay + ', ' + dayOfMonth;
        elements.push(el);
      });
      hoursByDays.push(elements);
    }

    HOURS.forEach((item) => {
      item = moment(item, 'HH:mm a');
      hoursArray.push(item);
      return hoursArray
    });

    //let momentVar = moment(hoursByDays[0], 'HH:mm a ddd MMM Do');
    // console.log(momentVar);

    // this.setState({
    //   dates: hoursByDays
    // });
    return hoursByDays;
  };

  getDayEvent = (e) => {
    console.log(e.target.textContent);
    document.body.classList.add('overlay');



    this.setState({
      isOpenedModal: !this.state.isOpenedModal
    })
  };

  handleCloseModal = ()=> {
    document.body.classList.remove('overlay');
    this.setState({
      isOpenedModal: false
    });
  };



  render() {
    return (
      <div className="table-body">
        {
          this.getHoursByDays().map((item) => {
            for (let i = 0; i < item.length; i++) {
              return (
                <div className="table-row" key={shortid.generate()}>
                  {item.map((el) => {
                      return (
                        <div className="cell table-cell" key={shortid.generate()} onClick={this.getDayEvent}>
                          {el}
                        </div>
                      )
                    }
                  )}
                </div>
              )
            }
          })
        }
        {
          this.state.isOpenedModal && <EventModal open={this.state.isOpenedModal}
                                                  startDatesArray={this.state.dates || ['one', 'two', 'three']}
                                                  endDatesArray={this.state.dates || ['one', 'two', 'three']}
                                                  handleCloseModal={this.handleCloseModal}
          />
        }
      </div>
    )
  }
}
