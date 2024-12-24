# React-Redux Posts Application

## Overview

This application is a simple React-Redux app that fetches and displays posts from an API. It also includes a form to add new posts. The app uses Redux for state management and Axios for API requests.

## Features

- Fetch and display posts from an external API.
- Add new posts using a form.
- Manage state using Redux and Redux Toolkit.

## Technologies Used

- React
- Redux & Redux Toolkit
- Axios
- CSS for simple styling

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/thisisbuihiu/SETA_Entrance_Test.git>
   cd react-redux-posts
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

   The application will open in your default web browser at `http://localhost:3000`.

## API

- The application fetches posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).

## Project Structure

- `src/store.js`: Configures the Redux store.
- `src/reducers/`: Contains Redux reducers.
- `src/actions/`: Contains Redux action creators.
- `src/components/`: Contains React components (`PostList` and `PostForm`).

## Usage

- **Viewing Posts**: Posts are fetched and displayed automatically when the app loads.
- **Adding a Post**: Use the form at the top of the page to add a new post. Enter a title and body, then click "Add Post".

