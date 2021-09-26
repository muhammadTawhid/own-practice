import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment'

const PostDetails = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    // useEffect for comments load
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h3>this is post detail: {id}</h3>
            <p>User Posted: {post.id}</p>
            <p>title: {post.title}</p>
            <p>post body: {post.body}</p>
            <p>_____________________________________________________________________</p>
            <h3>total comments: {comments.length}</h3>
            {
                comments.map(comment => <Comment comment={comment} />)
            }
        </div>
    );
};

export default PostDetails;