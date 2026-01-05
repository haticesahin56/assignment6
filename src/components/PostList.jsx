import Post from './Post';
const PostList = ({ posts }) => (
  <div>
    {posts.map(post => <Post key={post.id} title={post.title} body={post.body} />)}
  </div>
);
export default PostList;