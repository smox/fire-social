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

  const [ name, setName ] = React.useState('Michael Stefan Brunner');
  const [ shortName, setShortName ] = React.useState('');

  const [ fireDepartment, setFireDepartment ] = React.useState('FF Lengenfeld');

  React.useEffect(() => {
    const splitName = name.split(' ');
    const shortName = splitName[0][0] + splitName[splitName.length-1][0];
    setShortName(shortName);
  }, [name]);


  return (
    <div className="menu-wrapper">
      <div className="menu">
        <div className="avatar">
          <Avatar alt={ name } src={`/avatar/${shortName.toLocaleLowerCase()}_profilbild.jpg`} sx={{ height: "200px", width: "200px", fontSize: "5rem" }}>{ shortName }</Avatar>
          <Typography className="name" variant="h5" sx={{ textAlign: "center"}}>{ name }</Typography>
          <Typography className="fire-department" variant="h6" sx={{ textAlign: "center"}}>{ fireDepartment }</Typography>
        </div>
        <ul className="menu-list">
          <li className="menu-list__item"><a href="/"><FeedIcon sx={{ marginRight: "3px"}} />Feed</a></li>
          <li className="menu-list__item"><a href="/pages/events"><EventIcon sx={{ marginRight: "3px"}} />Veranstaltungen</a></li>
          <li className="menu-list__item"><a href="/pages/learn"><SchoolIcon sx={{ marginRight: "3px"}} />e-learning</a></li>
          <li className="menu-list__item"><a href="/pages/games"><SportsEsportsIcon sx={{ marginRight: "3px"}} />Spiele</a></li>
          <li className="menu-list__item"><a href="/pages/manage"><ManageSearchIcon sx={{ marginRight: "3px"}} />Verwaltung</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;