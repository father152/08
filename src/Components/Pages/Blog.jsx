import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []); 
    
    return (
        <div>
        <h1>Blog</h1>
      
        {
        posts.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`}>
            <li>{post.title}</li>
            <li>{post.body}</li>
            </Link>
        ))
        }
        </div>
   )
    }
export {Blog}