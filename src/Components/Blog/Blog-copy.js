import React, {Component} from 'react'
import axios from 'axios'
import './Blog.css'


class Blog extends Component{
    constructor(){
      super()
        this.state = {
           posts: [],
           img: ''
        }
    }

   componentDidMount(){
       this.getPosts()
   }

    getPosts = () => {
        axios.get(`/api/blog/:${this.post_id}`)
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log(this.state.posts)
        // let imgSrc= this.state.img ? this.state.img : 'noImage';
    return(
        <div>
            <section className='blog-container'>
               
                {this.state.posts?.map((posts) => (
                    <div key={this.state.posts.post_id} >
                        <section>
                        {/* <img src={imgSrc}/> */}
                        <p>{this.state.posts.title}</p>
                        <p>{this.state.posts.content}</p>
                        </section>
                    </div>
                ))}
            </section>
        </div>
        )
    }
}
export default Blog;