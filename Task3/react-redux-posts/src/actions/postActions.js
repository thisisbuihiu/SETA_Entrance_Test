import axios from 'axios';

// Fetch posts action from API
export const fetchPosts = () => async (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_POSTS_FAILURE', error: error.message });
    }
};

// Add a new post
export const addPost = (post) => ({
    type: 'ADD_POST',
    payload: post,
});
