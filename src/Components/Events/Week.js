import React, {Component} from 'react'

class Week extends Component {
    render() {
      let days = [];
      let date = this.props.previousCurrentNextView;
      let currentMonthView = this.props.currentMonthView;
      let selected = this.props.selected;
      let select = this.props.select;
      let monthEvents = this.props.monthEvents;
  
      for (var i = 0; i < 7; i++) {if (window.CP.shouldStopExecution(4)) break;
        var dayHasEvents = false;
  
        for (var j = 0; j < monthEvents.length; j++) {if (window.CP.shouldStopExecution(5)) break;
          if (monthEvents[j].date.isSame(date, "day")) {
            dayHasEvents = true;
          }
        }window.CP.exitedLoop(5);
  
        let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === currentMonthView.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date,
          hasEvents: dayHasEvents };
  
  
        days.push(createElement(Day, { day: day, selected: selected, select: select }));
        date = date.clone();
        date.add(1, "d");
      }window.CP.exitedLoop(4);
      return (
        React.createElement("div", { className: "row week" },
        days));
  
  
    }}

export default Week