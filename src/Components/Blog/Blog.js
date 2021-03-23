import React, {Component} from 'react'
import axios from 'axios'
import './Blog.css'


class Blog extends Component{
    contructor(){
        this.state = {
            posts: []
        }
        this.getPosts = this.getPosts.bind(this)
    }

    componentDidMount() {
        axios.get('/api/posts')
        .then(res => {
            this.setState({posts: res.data})
        })
    }

    getPosts = () => {
        axios.get('/api/posts')
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    render() {
    return(
        <div>
            <main>
                {this.posts?.map((posts, i) => (
                    <div key={i} >
                        <h4>{posts.title}</h4>
                        <h5>{posts.content}</h5>
                    </div>
                ))}
            </main>
        </div>
        )
    }
}
export default Blog;