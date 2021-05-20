import React, {Component} from 'react';
import './Gallery.css'

class Gallery extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentImageIndex: 1,
            images: []
        }
    }

    previousSlide= () => {
        const landIndex = images.length -1
        const {currentImageIndex} =
        this.state
        const shouldResetIndex = currentImageIndex === 0
        const index = shouldResetIndex ? lastIndex : currentImageIndex -1

        this.setState ({currentImageIndex: index})
    }

    nextSlide = () => {
        const lastIndex = images.length -1
        const {currentImageIndex} = this.state
        const shouldResetIndex = currentImageIndex === lastIndex
        const index = shouldResetIndex ? 0 : currentImageIndex + 1
        this.setState({currentImageIndex: index})
    }

    render(){
    return(
        <div>
            <h2>Photos by Michelle</h2>
            <section className = 'gallery-container'>
                <Arrow direction ='left'
                clickFunction = {this.previousSlide}/>
            
            </section>
        </div>
    )
    }
}
export default Gallery;