import './Gallery.css'
import sunset1 from '../../assets/sunset1.jpg'
import sunset2 from '../../assets/sunset2.jpg'
import sunset3 from '../../assets/sunset3.jpg'
import sunset4 from '../../assets/sunset4.jpg'
import sunset5 from '../../assets/sunset5.jpg'
import sunset6 from '../../assets/sunset6.jpg'

function Gallery (){
    return(
        <div>
            <h2>Photos by Michelle</h2>
            <section className='photo-sizing'>
            <img alt='sunset' src={sunset1}/>
            <img alt='sunset' src={sunset2}/>
            <img alt='sunset' src={sunset3}/>
            <img alt='sunset' src={sunset4}/>
            </section>
            <section className='photo-sizing'>
            <img alt='sunset' src={sunset5}/>
            <img alt='sunset' src={sunset6}/>
            </section>
        </div>
    )
}
export default Gallery;