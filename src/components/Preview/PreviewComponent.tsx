import React, { ReactNode } from 'react'
// import reactMarkdown from 'react-markdown'
import ReactMarkdown from 'react-markdown'
import './index.css'
import PreviewIcon from '../../assets/icon-show-preview.svg'

type PreviewComponentProps = {
  textInput: string,
}

type NodeToProps<T> = {
  node: T;
  children: T extends { children: any } ? ReactNode : never;
};
const PreviewComponent: React.FC<PreviewComponentProps> = ({textInput}) => {
  return (
    <div className='preview-comp-container'>
      <div className="preview-component-top component-top">
        <span>preview</span>
        <img src={PreviewIcon} alt="" />
      </div>
      <div className="preview-body">
        <ReactMarkdown>
          {textInput}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default PreviewComponent
