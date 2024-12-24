import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
    return (
        // Wrapping the app with Provider to make the Redux store available
        <Provider store={store}>
            <div className="App">
                <PostForm />
                <PostList />
            </div>
        </Provider>
    );
}

export default App;
