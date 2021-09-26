import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>this is home</h1>
            <p>I have {posts.length} posts</p>
            {
                posts.map(post => <Post post={post} />)
            }
        </div>
    );
};

export default Home;