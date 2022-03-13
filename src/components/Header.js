import React from 'react';
import './css/header.css';
import { FaFacebook, FaSearch } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Avatar, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory()
  let user =  JSON.parse(localStorage.getItem("user"));


  let logout = ()=>{
    localStorage.removeItem("user")
    history.push("/login")
  }
  return (
    <div className="header">
      {/* Header left */}
      <div className="header__left">
        <FaFacebook className="header__logo" /> 
        <div className="header__input">
          <FaSearch className="header__search__icon" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/* Header Middle */}
      <div className="header__center">
        <div className="header__option header__option--active">
          <AiFillHome fontSize="large" />
        </div>
      </div>
      {/* Header right */}
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL.toString()}/>
          <h4>{user.displayName}</h4>
        </div>
      <Button className="logout__btn" type="submit" onClick={logout}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
