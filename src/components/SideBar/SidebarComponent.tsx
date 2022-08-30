import React, { useEffect } from 'react'
import './index.css';

import lightModeIcon from '../../assets/icon-light-mode.svg';
import darkModeIcon from '../../assets/icon-dark-mode.svg';
import data from '../../data.json';
import fileIcon from  '../../assets/icon-document.svg'

type SidebarComponentType = {
  isOpen: Boolean
}

const SidebarComponent: React.FC<SidebarComponentType> = ({isOpen}) => {

  useEffect(()=> {
    const sideBarToggle = window.document.querySelector('.sidebar-container') as HTMLElement;
    sideBarToggle.classList.toggle('active')
    
  }, [isOpen])
  return (
    <div className='sidebar-container'>
      <div className="sidebar-top">
        <span>my document</span>
        <button className='btn sidebar-btn'>
          + new document
        </button>
      </div>
      <div className="siderbar-body">
      </div>
      <div className="sidebar-foot">
        <img src={lightModeIcon} alt="light mode icon" />
        <div className="swapleftRigth">
          <div className="swapCircle"></div>
        </div>
        <img src={darkModeIcon} alt="dark mode icon" />
      </div>
    </div>
  )
}

export default SidebarComponent
