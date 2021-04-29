import React, {Component} from 'react'
import axios from 'axios'
import './Blog.css'


class Blog extends Component{
    constructor(){
      super()
        this.state = {
           posts: []
        }
    }

   componentDidMount(){
       this.getPosts()
   }

    getPosts = () => {
        axios.get('/api/blog')
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
    return(
        <div>
            <section className='container'>
                {this.posts.map((posts, i) => (
                    <div key={i} >
                        <section>
                        <h4>{posts.title}</h4>
                        <h5>{posts.content}</h5>
                        </section>
                    </div>
                ))}
            </section>
        </div>
        )
    }
}
export default Blog;