import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Books from './Components/Books/Books'
import Contact from './Components/Contact/Contact'
import Gallery from './Components/Gallery/Gallery'
import MyCalendar from './Components/Events/MyCalendar'

export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/about' component={About}/>
        <Route path= '/post' component={Blog}/>
        <Route path= '/books' component={Books}/>
        <Route path= '/contact' component={Contact}/>
        <Route path= '/gallery' component={Gallery}/>
        <Route path = '/events' component ={MyCalendar}/>
    </Switch>
)