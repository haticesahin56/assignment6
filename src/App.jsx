import { useReducer, useEffect, useState } from 'react';
import { fetchPosts } from './api/postsApi';
import { postsReducer, initialState } from './reducer/postsReducer';
import PostList from './components/PostList';
import FilterForm from './components/FilterForm';

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const loadData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    };
    loadData();
  }, []);

  const filteredPosts = state.posts.filter(post =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Post Dashboard</h1>
      <FilterForm filterText={filterText} onFilterChange={setFilterText} />
      
      {state.loading && <p>Yükleniyor...</p>}
      {state.error && <p style={{ color: 'red' }}>Hata: {state.error}</p>}
      {!state.loading && !state.error && filteredPosts.length === 0 && <p>Post bulunamadı.</p>}
      {!state.loading && !state.error && <PostList posts={filteredPosts} />}
    </div>
  );
}
export default App;