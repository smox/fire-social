import { Avatar, Typography } from '@mui/material';
import './Chat.css';


const Chat = () => {

  const friends = [{
      name: "Marius Hofer",
      avatar: '/avatar/mh_profilbid.jpg'
    }, {
      name: "Stefan Kowalski",
      avatar: '/avatar/sk_profilbild.jpg'
    }, {
      name: "Lena Meier",
      avatar: '/avatar/lm_profilbild.jpg'
    }, {
      name: "Maximilian Schwarzmüller",
      avatar: '/avatar/ms_profilbild.jpg'
    }, {
      name: "Sandra Müller",
      avatar: '/avatar/sm_profilbild.jpg'
    }, {
      name: "Max Mustermann",
      avatar: '/avatar/mm_profilbild.jpg'
    }, {
      name: "Marius Hofer",
      avatar: '/avatar/mh_profilbid.jpg'
    }, {
      name: "Stefan Kowalski",
      avatar: '/avatar/sk_profilbild.jpg'
    }, {
      name: "Lena Meier",
      avatar: '/avatar/lm_profilbild.jpg'
    }, {
      name: "Maximilian Schwarzmüller",
      avatar: '/avatar/ms_profilbild.jpg'
    }, {
      name: "Sandra Müller",
      avatar: '/avatar/sm_profilbild.jpg'
    }, {
      name: "Max Mustermann",
      avatar: '/avatar/mm_profilbild.jpg'
    }, {
      name: "Marius Hofer",
      avatar: '/avatar/mh_profilbid.jpg'
    }, {
      name: "Stefan Kowalski",
      avatar: '/avatar/sk_profilbild.jpg'
    }, {
      name: "Lena Meier",
      avatar: '/avatar/lm_profilbild.jpg'
    }, {
      name: "Maximilian Schwarzmüller",
      avatar: '/avatar/ms_profilbild.jpg'
    }, {
      name: "Sandra Müller",
      avatar: '/avatar/sm_profilbild.jpg'
    }
  ];


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
