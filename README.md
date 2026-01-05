# Assignment 6 - Post Dashboard

This project is a React-based dashboard that fetches posts from an external API, manages data states, and allows real-time filtering. It follows strict React best practices, focusing on clean state management and efficient rendering.

## File Organization
The project is structured to keep logic, state, and UI separated:

* **`src/api/postsApi.js`**: Contains the `fetch` logic. It is a pure JavaScript file that handles data fetching independently from the UI.
* **`src/reducer/postsReducer.js`**: Manages the complex state of the application (loading, success, error) using a pure reducer function.
* **`src/components/`**: Houses all presentational components like `Post`, `PostList`, and `FilterForm`.
* **`src/App.jsx`**: The main orchestrator. It uses `useEffect` to trigger data fetching and handles the derived state for filtering.

## Challenges & Solutions

### 1. Managing Async State
Instead of using multiple `useState` hooks, I used `useReducer`.Bu approach helped in keeping the "Loading", "Error", and "Data" states synchronized and predictable.

### 2. Derived State for Filtering
To follow the assignment rules, I did not store the filtered posts in a separate state. Instead, I calculated the filtered list during the render process based on the search input. This keeps the state minimal and prevents synchronization bugs.

### 3. Data Safety and Cleanup
I implemented `try/catch` blocks to handle API failures gracefully. I also used a cleanup mechanism in `useEffect` to ensure that if the component unmounts during a fetch, it doesn't cause memory leaks or state updates on an unmounted component.

## How to Run
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
