import {Link, withRouter} from 'react-router-dom'
import './Books.css'
import cover from '../../assets/cover.jpeg'
import amazon from '../../assets/amazon.svg'
import archway from '../../assets/archway.jpg'
import barnes from '../../assets/barnesandnoble.png'
import books from '../../assets/booksamillion.png'
import powells from '../../assets/powellsbooks.jpg'

function Books() {
    return(
        <div>
            <div className='books-container'>
            <img src={cover} alt='Proceed to Remembrance' className='cover-photo'/>
            <p>I am Thrilled to announce the completion of my dystopian novel
            PROCEED TO REMEMBRANCE! 
            You can order your copy at all major book stores today.
            </p>
            </div>
            <section>
               <a href='https://www.archwaypublishing.com/Bookstore/BookDetail.aspx?Book=795968' >
                    <img src={archway} alt = 'archway' className= 'buy-book'/>
                </a>
                <a href = 'https://m.barnesandnoble.com/w/proceed-to-remembrance-michelle-facer-baguley/1133148522?ean=9781480878792'>
                    <img src={barnes} alt='barnes and noble' className= 'buy-book'/>
                </a>
                <a href ='https://www.powells.com/book/-9781480878792'>
                    <img src={powells} alt="Powell's books" className= 'buy-book'/>
                </a>
                <a href ='https://m.booksamillion.com/search?id=7671906111137&query=Proceed%20to%20Remembrance&filter='>
                    <img src={books} alt='book-a-million' className= 'buy-book'/>
                </a>
                <a href = 'https://www.amazon.com/Proceed-Remembrance-Michelle-Facer-Baguley/zdp/1480878790/ref=mp_s_a_1_1?keywords=proceed+to+remembrance&qid=1567258293&s=books&sr=1-1'>
                    <img src={amazon} alt = 'amazon' className= 'buy-book'/>
                </a>
            </section>
            <section className = 'book-review'>
                <h3>Book Reviews</h3>
                <p>
                <ul>Timothy Dean Lefler:</ul>
                <ul>“A must read.</ul>
                <ul>I found this book to be a deep and moving portrait of a new reality; a reality that may arrive all too soon. Vision and warning combine to form an apocalyptic adventure.”</ul>
                <ul>Jeanna Miller:</ul>
                <ul>“This book demands that you read and savor each word. It is so descriptive. It worms it’s way into your brain! The characters come alive to the point that it’s hard to put the book down because you want to know what will happen to them next. A great story and what an imagination Michelle has to have written it. I recommend it wholeheartedly. I think you should buy this book and read it.”</ul>
                <ul>Michael Smalley:</ul>
                <ul>“Michelle Facer Baguley takes this futuristic story to the next level. She may very well be the next Ray Bradbury and George Orwell all rolled up together. Proceed to Remembrance has the makings of Fahrenheit 451 not because of the lack of books but because of the overreaching social media. Michelle’s writing has a subtle resemblance to our world today, plugged into social media, devoid of any physical connection to family. I found myself unable to set the book aside, rooting for Emery to break free from the society that held her captive, to find the religion that her Grand Nanny was devoted to and to find love. This novice author has captured my soul and I look forward to Emery’s continued exploits. I highly recommend reading this book.”</ul>
                <ul>Timothy Dean Lefler</ul>
                <ul>Posted on Goodreads for Michelle:</ul>
                <ul>“This book is something special. Vivid imagery and fluid text converge to paint a picture of Apocalyptic adventure. This book provides a stark warning and an engaging read.”
                “five stars.”
                #PROCEEDTOREMEMBRANCE</ul>
                </p>
            </section>
        </div>
    )
}
export default withRouter(Books);