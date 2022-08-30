import React,{useState} from "react";
import HeaderComponent from "./components/Header/HeaderComponent";
import SidebarComponent from "./components/SideBar/SidebarComponent";
import TextInputComponent from "./components/TextInput/TextInputComponent";
import PreviewComponent from "./components/Preview/PreviewComponent";
import data from './data.json';
import './App.css'
import useTextInputCustomHook from "./components/useTextInputComponent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [textInput, setTextInput] = useTextInputCustomHook('textInput', '###This is the text area')
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setTextInput(e.target.value)
  }
  const initailPreview = data[1].content;
  const initText = textInput === ''? initailPreview : textInput;
  console.log('these are the datas',initText);
  
  return (
    <div className="app-container">
      <HeaderComponent isOpen={isOpen} setIsOpen={setIsOpen}/>
      <SidebarComponent isOpen={isOpen}/>
      <div className="app-body">
        <TextInputComponent handleChange={handleChange} textInput={initText}/>
        <PreviewComponent textInput={textInput}/>
      </div>
    </div>
  );
}

export default App;
