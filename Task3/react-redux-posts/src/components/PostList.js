import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);

    // Fetch posts when component mounts
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;
