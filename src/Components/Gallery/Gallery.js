import './Gallery.css'
import bridge from '../../assets/bridge.jpg'
import clouds from '../../assets/clouds.jpg'
import foot from '../../assets/foot.jpg'
import fox from '../../assets/fox.jpg'
import hawk from '../../assets/hawk.jpg'
import lightning from '../../assets/lightning.jpg'
import lightning2 from '../../assets/lightning2.jpg'
import owl from '../../assets/owl.jpg'
import owl2 from '../../assets/owl2.jpg'
import owl3 from '../../assets/owl3.jpg'
import owl4 from '../../assets/owl4.jpg'
import owls from '../../assets/owls.jpg'
import redrocks from '../../assets/redrocks.jpg'
import river from '../../assets/river.jpg'
import river2 from '../../assets/river2.jpg'
import river3 from '../../assets/river3.jpg'
import sunset1 from '../../assets/sunset1.jpg'
import sunset2 from '../../assets/sunset2.jpg'
import sunset3 from '../../assets/sunset3.jpg'
import sunset4 from '../../assets/sunset4.jpg'
import sunset5 from '../../assets/sunset5.jpg'
import sunset6 from '../../assets/sunset6.jpg'
import sunset7 from '../../assets/sunset7.jpg'
import yellowsunset from '../../assets/yellow_sunset.jpg'
import trunk from '../../assets/trunk.jpg'
import trunk2 from '../../assets/trunk2.jpg'
import trunk3 from '../../assets/trunk3.jpg'
import trunk5 from '../../assets/trunk5.jpg'
import water from '../../assets/water.jpg'
import water2 from '../../assets/water2.jpg'
import wire from '../../assets/wire.jpg'

function Gallery (){
    return(
        <div>
            <div className='photo-gallery'>
            <h2>Photos by Michelle</h2>
            </div>
            <section className='photo-sizing'>
            <img alt='sunset' src={sunset1}/>
            <img alt='sunset' src={sunset2}/>
            <img alt='sunset' src={sunset3}/>
            <img alt='sunset' src={sunset4}/>
            </section>
            <section className='photo-sizing'>
            <img alt='sunset' src={sunset5}/>
            <img alt='sunset' src={sunset6}/>
            <img alt='sunset' src={sunset7}/>
            <img alt='sunset' src={yellowsunset}/>
            </section>
            <section className='photo-sizing'>
            <img alt='bridge' src={bridge}/>
            <img alt='clouds' src={clouds}/>
            <img alt='foot' src={foot}/>
            <img alt='fox' src={fox}/>
            </section>
            <section className='photo-sizing'>
            <img alt='hawk' src={hawk}/>   
            <img alt='lightning' src={lightning}/>
            <img alt='lightning' src={lightning2}/>
            <img alt='owl' src={owl}/> 
            </section>
            <section className='photo-sizing'>
            <img alt='owl' src={owl2}/>
            <img alt='owl' src={owl3}/>
            <img alt='owl' src={owl4}/>
            <img alt='owls' src={owls}/>
            </section>
            <section className='photo-sizing'>
            <img alt='redrocks' src={redrocks}/>
            <img alt='river' src={river}/>
            <img alt='river' src={river2}/>
            <img alt='river' src={river3}/>
            </section>
            <section className='photo-sizing'>
            <img alt='trunk' src={trunk}/>
            <img alt='trunk' src={trunk2}/>
            <img alt='trunk' src={trunk3}/>
            <img alt='trunk' src={trunk5}/>
            </section>
            <section className='photo-sizing'>
            <img alt='water' src={water}/>
            <img alt='water' src={water2}/>
            <img alt='wire' src={wire}/>
            </section>
        </div>
    )
}
export default Gallery;