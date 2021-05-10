import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu'
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    toggleDropdown = () => {
        this.setState({open: !this.state.open})
      }
    render() {
    return(
        <div>
            <header>
                <h1>Michelle Facer Baguley</h1>
                <section className='container'>   
            
                <HamburgerMenu 
                isOpen = {this.state.open} 
                menuClicked = {this.toggleDropdown}
                width={30}
                height={22}
                color='black'
                position='fixed'
                z-index = {10}
                justify-content = 'right'
                />
            
            {this.state.open
          ? (
            <nav className = 'nav'>
                
                <Link exact to = '/' className='nav-links'>Home</Link>
                <Link to = '/books' className='nav-links'>Books</Link>
                <Link to = '/post' replace className='nav-links'>Blog</Link>
                <Link to = '/about' className='nav-links'>About</Link>
                <Link to = '/gallery' className='nav-links'>Gallery</Link>
                <Link to = '/events' className='nav-links'>Events</Link>
                <Link to = '/contact' className='nav-links'>Contact</Link>
            </nav>
            )
            : null}
            </section>
            </header>
        </div>
    )
 }
}
export default withRouter(Header)