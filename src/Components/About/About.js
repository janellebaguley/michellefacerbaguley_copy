import './About.css'
import michelle from '../../assets/michelle.jpeg'

function About () {
    return(
        <section className = 'about'>
        <div className='about-container'>
            <img src={michelle} alt='Michelle Facer Baguley'/>
            <p className='about-p'>
                Michelle Facer Baguley is a recovering politician, who once served as a city incorporator, city council member, and transit trustee. She has also worked as an assisted living director, but the titles that give her the greatest joy are: wife, mother, grandmother, sister and daughter. Michelle currently lives in Herriman, Utah. 
            </p>
        </div>
        </section>
    )
}
export default About;