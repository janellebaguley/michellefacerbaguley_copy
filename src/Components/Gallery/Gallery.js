import React, {useEffect} from 'react';
import Slider from 'react-slick'
import Photos from './Photos'
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
import './Gallery.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = props =>{
    useEffect(() => {
        document.title = ''
        window.scrollTo(0,0)
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: 4,
        dots: false,
        arrows: false,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
    }

    return(
        <div className='carousel-container'>
            <h2 className='carousel-heading'>Photos by Michelle</h2>
            <section className='carousel-section'>
            <Slider {...settings} >
                <img src={bridge} alt='bridge'/>
                <img src={clouds} alt='clouds'/>
                <img src={foot} alt='foot'/>
                <img src={fox} alt='fox'/>
                <img src={hawk} alt='hawk'/>
                <img src={lightning} alt='lightning'/>
                <img src={lightning2} alt='lightning'/>
                <img src={owl} alt='owl'/>
                <img src={owl2} alt='owl'/>
                <img src={owl3} alt='owl'/>
                <img src={owl4} alt='owl'/>
                <img src={owls} alt='owl'/>
                <img src={redrocks} alt='redrocks'/>
                <img src={river} alt='river'/>
                <img src={river2} alt='river'/>
                <img src={river3} alt='river'/>
                <img src={sunset1} alt='sunset'/>
                <img src={sunset2} alt='sunset'/>
                <img src={sunset3} alt='sunset'/>
                <img src={sunset4} alt='sunset'/>
                <img src={sunset5} alt='sunset'/>
                <img src={sunset6} alt='sunset'/>
                <img src={sunset7} alt='sunset'/>
                <img src={yellowsunset} alt='sunset'/>
                <img src={trunk} alt='trunk'/>
                <img src={trunk2} alt='trunk'/>
                <img src={trunk3} alt='trunk'/>
                <img src={trunk5} alt='trunk'/>
                <img src={water} alt='water'/>
                <img src={water2} alt='water'/>
                <img src={wire} alt='wire'/>
            </Slider>
            </section>
        </div>
        )
    }

export default Gallery;