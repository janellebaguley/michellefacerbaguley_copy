import React, {Component} from 'react'

class Day extends React.Component {
    render() {
      let day = this.props.day;
      let selected = this.props.selected;
      let select = this.props.select;
  
      return (
        React.createElement("div", {
          className:
          "day" + (
          day.isToday ? " today" : "") + (
          day.isCurrentMonth ? "" : " different-month") + (
          day.date.isSame(selected) ? " selected" : "") + (
          day.hasEvents ? " has-events" : ""),
  
          onClick: () => select(day) }, 
  
          React.createElement("div", { className: "day-number" }, day.number)));
  
  
    }}
export default Day