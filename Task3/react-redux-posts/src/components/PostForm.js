import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/postActions';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = { id: Date.now(), title, body };
        dispatch(addPost(newPost));
        setTitle('');
        setBody('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Post</h2>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <textarea
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Post</button>
        </form>
    );
};

export default PostForm;
