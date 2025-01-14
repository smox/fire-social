import React from 'react';
import './Menu.css';

import Avatar from '@mui/material/Avatar/Avatar';
import FeedIcon from '@mui/icons-material/Feed';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Typography } from '@mui/material';


const Menu = () => {

  const [ isCollapsed, setIsCollapsed ] = React.useState(false);

  const [ name, setName ] = React.useState('Michael Stefan Brunner');
  const [ shortName, setShortName ] = React.useState('');

  const [ fireDepartment, setFireDepartment ] = React.useState('FF Lengenfeld');

  React.useEffect(() => {
    const splitName = name.split(' ');
    const shortName = splitName[0][0] + splitName[splitName.length-1][0];
    setShortName(shortName);
  }, [name]);


  return (
    <div className={ `menu-wrapper ${isCollapsed ? 'collapsed' : ''}` }>
      <div className="menu">
        <div className="avatar">
          <Avatar alt={ name } src={`/avatar/${shortName.toLocaleLowerCase()}_profilbild.jpg`} sx={{ height: "200px", width: "200px", fontSize: "5rem" }}>{ shortName }</Avatar>
          <Typography className="name" variant="h5" sx={{ textAlign: "center"}}>{ name }</Typography>
          <Typography className="fire-department" variant="h6" sx={{ textAlign: "center"}}>{ fireDepartment }</Typography>
        </div>
        <ul className="menu-list">
          { /** isCollapsed && <li className="menu-list-item"><button onClick={() => setIsCollapsed(!isCollapsed)}>{ isCollapsed ? <MenuOpenIcon /> : <MenuIcon /> }</button></li> **/}
          <li className="menu-list-item"><a href="/"><FeedIcon sx={{ marginRight: "3px"}} /><div className='menu-list-item__text'>Feed</div></a></li>
          <li className="menu-list-item"><a href="/pages/events"><EventIcon sx={{ marginRight: "3px"}} /><div className='menu-list-item__text'>Veranstaltungen</div></a></li>
          <li className="menu-list-item"><a href="/pages/learn"><SchoolIcon sx={{ marginRight: "3px"}} /><div className='menu-list-item__text'>e-learning</div></a></li>
          <li className="menu-list-item"><a href="/pages/games"><SportsEsportsIcon sx={{ marginRight: "3px" }} /><div className='menu-list-item__text'>Spiele</div></a></li>
          <li className="menu-list-item"><a href="/pages/manage"><ManageSearchIcon sx={{ marginRight: "3px" }} /><div className='menu-list-item__text'>Verwaltung</div></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;