import { IPost } from '../../interfaces/Models';
import './Feed.css';
import Post from './Post/Post';
import { posts } from '../../TestData/posts';


const Feed = () => {
  
  return (
    <div className="feed-wrapper">
      <ul className="posts">
        { posts.map((post: IPost) => (<Post key={ post.id } post={ post } /> )) }
      </ul>
    </div>
  );
}

export default Feed;
