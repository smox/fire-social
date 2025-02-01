import { Avatar, Typography } from '@mui/material';
import { allOtherUsers as friends } from '../../TestData/users';
import './Chat.css';


const Chat = () => {


  return (
    <div className="chat-wrapper">
      <div className="chat">
        <Typography sx={{ textAlign: "center", marginTop: "20px" }} className="chat-title" variant="h4">Chat</Typography>
        <ul className="user-list">
          { friends.map(friend => (
            <div className="user-list-item">
              <Avatar className='user-list__avatar' src={friend.avatar} />
              <Typography className='user-list__name' variant="h6">{friend.name}</Typography>
            </div>
          )) }
        </ul>
      </div>
    </div>
  );
}

export default Chat;
