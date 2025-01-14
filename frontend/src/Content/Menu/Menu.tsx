import React from 'react';
import './Menu.css';

import Avatar from '@mui/material/Avatar/Avatar';
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
          <li className="menu-list__item">Feed</li>
          <li className="menu-list__item">Veranstaltungen</li>
          <li className="menu-list__item">e-learning</li>
          <li className="menu-list__item">Spiele</li>
          <li className="menu-list__item">Verwaltung</li>
          <li className="menu-list__item">Test</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;