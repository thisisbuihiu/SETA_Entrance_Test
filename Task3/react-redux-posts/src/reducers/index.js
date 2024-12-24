import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

// Combining reducers into a single root reducer
export default combineReducers({
    posts: postsReducer,
});
