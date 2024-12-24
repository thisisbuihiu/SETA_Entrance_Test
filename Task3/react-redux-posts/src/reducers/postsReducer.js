const initialState = {
    posts: [],
    loading: false,
    error: null,
};

// Reducer function to handle post actions
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_POSTS_SUCCESS':
            return { ...state, loading: false, posts: action.payload };
        case 'FETCH_POSTS_FAILURE':
            return { ...state, loading: false, error: action.error };
        case 'ADD_POST':
            return { ...state, posts: [...state.posts, action.payload] };
        default:
            return state;
    }
};

export default postsReducer;
