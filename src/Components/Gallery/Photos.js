import './Photos.css'

const Photos = (props) => {
const {src} = props.photos
const {images, i} = props
const lastI = images.length -1
return(
    <div>
        <section>
            {src}
        </section>
        <button className ={i === 0 ? 'dec-none' : null}
        onClick={props.dec}
        > previous</button>
       <button className={i === lastI ? 'inc-none' : null}
       onClick={props.inc}
       >next</button>
    </div>
    )
}
export default Photos;