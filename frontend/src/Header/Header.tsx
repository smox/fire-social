import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';


const Header = () => {
  return (
    <div className="header">
        <div className="title-wrapper">
          <img src="/logo/logo.webp" alt="" className="logo" />
          <h1 className="title">fire-social</h1>
        </div>
        <div className="searchbar-wrapper">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="notification-wrapper">
          <div className="notifications">
            <PersonIcon fontSize='large' className='notification-icon'/>
            <ChatIcon fontSize='large' className='notification-icon'/>
            <NotificationsIcon fontSize='large' className='notification-icon'/>
            <Avatar className='notification-avatar' alt="Michael Brunner" src="/avatar/mb_profilfoto.webp" />
          </div>
        </div>
    </div>
  );
}


export default Header;