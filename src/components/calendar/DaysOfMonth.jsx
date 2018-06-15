import React from 'react';
import moment from 'moment';
import shortid from 'shortid';

let days = [];


export default class DaysOfMonth extends React.Component{
  state={
    selectedDay: null,
    month: this.props.month
  };

  // componentWillReceiveProps(nextProps){
  //   console.log('new month');
  //   this.setState({
  //     month: nextProps.month
  //   })
  // };

  isCurrentDay = ()=> moment().format("D");



  isFirstDayOfMonth = () => {
    let firstDay = this.props.month.startOf('month').format('d'); // Day of week 0...1..5...6
    return firstDay;
  };

  handleSelectDay = (e)=> {
    this.setState({
      selectedDay: e.target.innerText
    })
  };

  getDaysInMonth = ()=>{
    let emptyCells = [];
    let daysInMonth = [];
    let weekRows = [];
    let cells = [];

    let daysOfMothLength = this.state.month.daysInMonth();

    for (let i = 0; i < this.isFirstDayOfMonth(); i++) {
      emptyCells.push(<td key={shortid.generate()} className="emptyCell">
          {""}
        </td>
      );
    };
    // console.log("emptyCells: ", emptyCells);

    for(let day = 1; day <= daysOfMothLength; day++){
      let  classNames = ((day == this.isCurrentDay() && this.state.selectedDay===null) ? 'current-day' : (day==this.state.selectedDay) ? 'selected-day' : '' )
      daysInMonth.push(
        <td key={day} className={'day '+ classNames} onClick={this.handleSelectDay}>
          {day}
        </td>
      )
    };


    var fullDateCells = [...emptyCells, ...daysInMonth];
    //console.log(fullDateCells);

    fullDateCells.forEach((dateCell, i) => {
      if ((i % 7) !== 0) {
        cells.push(dateCell);
      } else {
        let insertRow = cells.slice();
        weekRows.push(insertRow);
        cells = [];
        cells.push(dateCell);
      }
      if (i === fullDateCells.length - 1) {
        let insertRow = cells.slice();
        weekRows.push(insertRow);
      }
    });

    let weeksArr = weekRows.map((day) => {
      return (
        <tr key={shortid.generate()}>
          {day}
        </tr>
      );
    });


    // console.log(this.state.month);
    return weeksArr
  };


  render(){
    // console.log(moment().format("D"));
    return (
      <tbody>
          {this.getDaysInMonth()}
      </tbody>
    )
  }
}
