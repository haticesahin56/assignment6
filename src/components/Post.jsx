const Post = ({ title, body }) => (
  <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);
export default Post;