import React,{useEffect, useState} from "react";
import HeaderComponent from "./components/Header/HeaderComponent";
import SidebarComponent from "./components/SideBar/SidebarComponent";
import TextInputComponent from "./components/TextInput/TextInputComponent";
import PreviewComponent from "./components/Preview/PreviewComponent";
import data from './data.json';
import './App.css'
import useTextInputCustomHook from "./components/useTextInputComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const [textInput, setTextInput] = useTextInputCustomHook('', '')
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setTextInput(e.target.value)
  }
  const initailPreview = data[1].content;
  const initText = textInput === ''? initailPreview : textInput;
  
  // useEffect(()=> {
  //   const sideBarToggle = window.document.querySelector('.sidebar-container') as HTMLElement;
  //   sideBarToggle.classList.toggle('active')
    
  // }, [isOpen])
  
  return (
    <div style={{display: 'flex', overflow: 'hidden'}}>
    
      {
        isOpen && <SidebarComponent isOpen={isOpen}/>
      }
    
      <div className="app-container" style={{width: `${isOpen ? '84vw' : '100vw'}`, transform: `${isOpen? 'translate3d(250px, 0, 50px)' : ''}`}}>
        
        <HeaderComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
        
        <div className="app-body">
          <TextInputComponent handleChange={handleChange} textInput={initText}/>
          <PreviewComponent textInput={textInput}/>
        </div>
      </div>
   </div>
   
  );
}

export default App;
