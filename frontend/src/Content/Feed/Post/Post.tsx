import './Post.css';
import { IAttachment, IComment, IPost } from '../../../interfaces/Models';
import { Avatar } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { currentUser } from '../../../TestData/users';
import { useState } from 'react';
import { Attachments } from './Attachments/Attachments';

export interface IPostProps {
    post: IPost;
}



const Post = ({ post }: IPostProps) => {     

    const [ showComments, setShowComments ] = useState<boolean>(false);

    const toggleShowComments = () => {
        if(showComments) {
            setShowComments(false);
        } else {
            setShowComments(true);
        }
    }

  return (
    <div className="post-wrapper">
        <div className="post">
            <div className="post-inner">
                <figure className="post-avatar">
                    <Avatar src={ post.user.avatar } sx={{ height: "10rem", width: "10rem" }} alt={ post.user.name } />
                    <figcaption className="post-avatar__user-name">{ post.user.name } </figcaption>
                </figure>
                <div className="post-content">
                    <h2 className="post-content__title">{ post.title }</h2>
                    <p className="post-content__text">{ post.content }</p>
                </div>
            </div>
            { post.attachments && post.attachments.length > 0 && ( <Attachments attachments={ post.attachments } /> ) }
            
            <div className="post-details">
                <div className="post-likes">
                    {
                        post.likes.find((like) => like.id === currentUser.id) ? (
                            <button className="button-like"><ThumbUpIcon sx={{ color: '#f04141' }} /></button>
                        ) : (
                            <button className="button-like"><ThumbUpIcon /></button>
                        )
                    }
                    <h3 className="likes-count">{ post.likes.length === 1 ? `${ post.likes.length } like` : `${ post.likes.length } likes` }</h3>
                </div>
                <div className="post-comments">
                    <button onClick={ () => toggleShowComments() } className='button-comment'><CommentIcon /></button>
                    <h3 onClick={ () => toggleShowComments() } className="comments-count">{ post.comments.length === 1 ? `${ post.comments.length } Kommentar` : `${ post.comments.length } Kommentare` }</h3>
                </div>
            </div>
        </div>
        <ul className={ `comments ${ showComments ? 'show-comments' : 'hide-comments' }` }>
        { 
            post.comments.map((comment: IComment) => {
                return (
                    <li key={ comment.id } className="comment">
                        <div className="comment-info">
                            <div className="comment-user-info">
                                <Avatar src={ comment.user.avatar } sx={{ height: "8rem", width: "8rem" }} alt={ comment.user.name } />
                                <h3 className="user-name">{ comment.user.name }</h3>
                            </div>
                            <div className="comment-content">
                                <p className="comment-date">{ comment.createdAt.toLocaleString() }</p>
                                <p className="comment-text">{ comment.content }</p>
                            </div>
                        </div>
                    </li>
                );
            })
        }
        </ul>
    </div>
  );
}

export default Post;
