import React from 'react'
import '../Styles/Header.css';
import searchIcon from '../Data/icons/search-icon.png';
import bellIcon from '../Data/icons/bell-solid.svg'
import avatarIcon from '../Data/icons/avatarBoy.png'
import addIcon from '../Data/icons/plus-solid.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="title">
        <p>Health<en>care.</en></p>
        
      </div>
      <div className="search-bar">
        <img className='search-icon' src={searchIcon} alt="" />
        <input type="text" placeholder='Search' />
        <img className='bell' src={bellIcon} alt="" />
      </div>
      <div className="profile">
        <div className="avatar">
          <img src={avatarIcon} alt="" />
        </div>
        <div className="add-icon">
          <img src={addIcon} alt="" />         
        </div>
      </div>
      
    </div>
  )
}

export default Header