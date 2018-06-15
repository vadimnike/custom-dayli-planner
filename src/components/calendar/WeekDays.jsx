import React from 'react';
import {WEEK_DAYS} from '../../constants/weekDays';


export default class WeekDays extends React.Component{
  render(){
    return(
      <thead className="week-days">
        <tr>
          {WEEK_DAYS.map( item => {
            return(
              <th className="weekDayName" key={item}>
                {item}
              </th>
            )
          })}
        </tr>
      </thead>
    )
  }
}
