import React from 'react'
import './index.css'
// import useTextInputCustomHook from '../useTextInputComponent'

type componentProps = {
  handleChange: Function,
  textInput: string,
}



const TextInputComponent: React.FC<componentProps> = ({handleChange, textInput}) => {
  // let textContent = textInput || initialContent
  return (
    <div className='text-comp-container'>
      <div className="text-component-top component-top">
        <span>markdown</span>
      </div>
      <div className="text-container">
        <textarea name="textInput" id="textInput" value={textInput} cols={60} rows={27} onChange={(e) => handleChange(e)}></textarea>
      </div>
    </div>
  )
}

export default TextInputComponent

