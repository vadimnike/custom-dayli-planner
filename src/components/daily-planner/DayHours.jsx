import React from 'react';
import {HOURS} from '../../constants/hours';

export default class DayHours extends React.Component{
  render(){
    return(
      <div className="hours-columnn">
        <div className="cell title-cell">Time</div>
        {
          HOURS.map( hour=>{
            return(
              <div className="cell  hour-cell" key={hour}>
                {hour}
              </div>
            )
          })
        }
      </div>
    )
  }
}
