import React, { useState } from 'react'

import DeleteIcon from '../../assets/icon-delete.svg';
import SaveChangesIcon from '../../assets/icon-save.svg';
import './index.css'

type HeaderComponentType = {
  setIsOpen: Function,
  isOpen: Boolean
}

const HeaderComponent : React.FC<HeaderComponentType> = ({isOpen, setIsOpen}) => {
  
  return (
    <div className='header-container'>
      <div className="hambuger-bar">
          <div className="inside-bar" onClick={()=> setIsOpen(!isOpen)}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
      </div>
      <div className="logo-cont">
        <span className="logo">MARKDOWN</span>
      </div>
      <div className="document-name-cont"></div>
      <div className="bottons-cont">
        <img src={DeleteIcon} alt="delete icon" />
        <button className='btn nav-btn'>
          <img src={SaveChangesIcon} alt="save changes icon" />
          <span>Save Changes</span>
        </button>
      </div>
    </div>
  )
}

export default HeaderComponent
