import React, {Component} from 'react'
import moment from 'moment'

class Calendar extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selectedMonth: moment(),
        selectedDay: moment().startOf("day"),
        selectedMonthEvents: [],
        showEvents: false };
  
  
      this.previous = this.previous.bind(this);
      this.next = this.next.bind(this);
      this.addEvent = this.addEvent.bind(this);
      this.showCalendar = this.showCalendar.bind(this);
      this.goToCurrentMonthView = this.goToCurrentMonthView.bind(this);
  
      this.initialiseEvents();
    }
  
    previous() {
      const currentMonthView = this.state.selectedMonth;
  
      this.setState({
        selectedMonth: currentMonthView.subtract(1, "month") });
  
    }
  
    next() {
      const currentMonthView = this.state.selectedMonth;
      this.setState({
        selectedMonth: currentMonthView.add(1, "month") });
  
    }
  
    select(day) {
      this.setState({
        selectedMonth: day.date,
        selectedDay: day.date.clone(),
        showEvents: true });
  
    }
  
    goToCurrentMonthView() {
      const currentMonthView = this.state.selectedMonth;
      this.setState({
        selectedMonth: moment() });
  
    }
  
    showCalendar() {
      this.setState({
        selectedMonth: this.state.selectedMonth,
        selectedDay: this.state.selectedDay,
        showEvents: false });
  
    }
  
    renderMonthLabel() {
      const currentMonthView = this.state.selectedMonth;
      return (
        React.createElement("span", { className: "box month-label" },
        currentMonthView.format("MMMM YYYY")));
  
  
    }
  
    renderDayLabel() {
      const currentSelectedDay = this.state.selectedDay;
      return (
        React.createElement("span", { className: "box month-label" },
        currentSelectedDay.format("DD MMMM YYYY")));
  
  
    }
  
    renderTodayLabel() {
      const currentSelectedDay = this.state.selectedDay;
      return (
        React.createElement("span", { className: "box today-label", onClick: this.goToCurrentMonthView }, "Today"));
  
  
  
    }
  
    renderWeeks() {
      const currentMonthView = this.state.selectedMonth;
      const currentSelectedDay = this.state.selectedDay;
      const monthEvents = this.state.selectedMonthEvents;
  
      let weeks = [];
      let done = false;
      let previousCurrentNextView = currentMonthView.
      clone().
      startOf("month").
      subtract(1, "d").
      day("Monday");
      let count = 0;
      let monthIndex = previousCurrentNextView.month();
  
      while (!done) {if (window.CP.shouldStopExecution(0)) break;
        weeks.push(
        React.createElement(Week, {
          previousCurrentNextView: previousCurrentNextView.clone(),
          currentMonthView: currentMonthView,
          monthEvents: monthEvents,
          selected: currentSelectedDay,
          select: day => this.select(day) }));
  
  
        previousCurrentNextView.add(1, "w");
        done = count++ > 2 && monthIndex !== previousCurrentNextView.month();
        monthIndex = previousCurrentNextView.month();
      }window.CP.exitedLoop(0);
      return weeks;
    }
  
    handleAdd() {
      const monthEvents = this.state.selectedMonthEvents;
      const currentSelectedDate = this.state.selectedDay;
  
      let newEvents = [];
  
      var eventTitle = prompt("Please enter a name for your event: ");
  
      switch (eventTitle) {
        case "":
          alert("Event name cannot be empty.");
          break;
        case null:
          alert("Changed your mind? You can add one later!");
          break;
        default:
          var newEvent = {
            title: eventTitle,
            date: currentSelectedDate,
            dynamic: true };
  
  
          newEvents.push(newEvent);
  
          for (var i = 0; i < newEvents.length; i++) {if (window.CP.shouldStopExecution(1)) break;
            monthEvents.push(newEvents[i]);
          }window.CP.exitedLoop(1);
  
          this.setState({
            selectedMonthEvents: monthEvents });
  
          break;}
  
    }
  
    addEvent() {
      const currentSelectedDate = this.state.selectedDay;
      let isAfterDay = moment().startOf("day").subtract(1, "d");
  
      if (currentSelectedDate.isAfter(isAfterDay)) {
        this.handleAdd();
      } else {
        if (confirm("Are you sure you want to add an event in the past?")) {
          this.handleAdd();
        } else {
        } // end confirm past
      } //end is in the past
    }
  
    removeEvent(i) {
      const monthEvents = this.state.selectedMonthEvents.slice();
      const currentSelectedDate = this.state.selectedDay;
  
      if (confirm("Are you sure you want to remove this event?")) {
        let index = i;
  
        if (index != -1) {
          monthEvents.splice(index, 1);
        } else {
          alert("No events to remove on this day!");
        }
  
        this.setState({
          selectedMonthEvents: monthEvents });
  
      }
    }
  
    initialiseEvents() {
      const monthEvents = this.state.selectedMonthEvents;
  
      let allEvents = [];
  
      var event1 = {
        title:
        "Press the Add button and enter a name for your event. P.S you can delete me by pressing me!",
        date: moment(),
        dynamic: false };
  
  
     
      allEvents.push(event1);
      
  
      for (var i = 0; i < allEvents.length; i++) {if (window.CP.shouldStopExecution(2)) break;
        monthEvents.push(allEvents[i]);
      }window.CP.exitedLoop(2);
  
      this.setState({
        selectedMonthEvents: monthEvents });
  
    }
  
    render() {
      const currentMonthView = this.state.selectedMonth;
      const currentSelectedDay = this.state.selectedDay;
      const showEvents = this.state.showEvents;
  
      if (showEvents) {
        return (
            React.createElement("section", { className: "main-calendar" }, 
            React.createElement("header", { className: "calendar-header" }, 
            React.createElement("div", { className: "row title-header" },
          this.renderDayLabel()), 
  
          React.createElement("div", { className: "row button-container" },
          React.createElement("i", {
            className: "box arrow fa fa-angle-left",
            onClick: this.showCalendar }), 
  
            React.createElement("i", {
            className: "box event-button fa fa-plus-square",
            onClick: this.addEvent }))), 
  
            React.createElement(Events, {
            selectedMonth: this.state.selectedMonth,
            selectedDay: this.state.selectedDay,
            selectedMonthEvents: this.state.selectedMonthEvents,
            removeEvent: i => this.removeEvent(i) })));
  
  
  
      } else {
        return (
            React.createElement("section", { className: "main-calendar" }, 
            React.createElement("header", { className: "calendar-header" }, 
            React.createElement("div", { className: "row title-header" }, 
            React.createElement("i", {
            className: "box arrow fa fa-angle-left",
            onClick: this.previous }), 
            
            React.createElement("div", { className: "box header-text" },
          this.renderTodayLabel(),
          this.renderMonthLabel()), 
          
          React.createElement("i", { className: "box arrow fa fa-angle-right", onClick: this.next })), 
          
          React.createElement(DayNames, null)), 
          
          React.createElement("div", { className: "days-container" },
          this.renderWeeks())));
      }
    }}
  export default Calendar