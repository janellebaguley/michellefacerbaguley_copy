import {Link, withRouter} from 'react-router-dom'
import './Header.css'

function Header (){
    return(
        <div>
            <header className = 'header-container'>
                <h1>Michelle Facer Baguley</h1>
            <nav className = 'nav-links'>
                
                <Link to = '/'>Home</Link>
                <Link to = '/books'>Books</Link>
                <Link to = '/blog'>Blog</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/galler'>Gallery</Link>
                <Link to = '/contact'>Contact</Link>
            </nav>
            </header>
        </div>
    )
}
export default withRouter(Header)