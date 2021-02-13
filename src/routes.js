import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Books from './Components/Books'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'


export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/about' component={About}/>
        <Route path= '/blog' component={Blog}/>
        <Route path= '/books' component={Books}/>
        <Route path= '/contact' component={Contact}/>
        <Route path= '/gallery' component={Gallery}/>
    </Switch>
)