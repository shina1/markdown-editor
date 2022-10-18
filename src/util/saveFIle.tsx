import { resolveFilename } from "./resolveFIleName";

type saveFileParams = {
    [x: string]: any;
    name: any;
    id: string;
    currFile : any;
    fileList: []
    setFileList:  React.Dispatch<React.SetStateAction<any[]>> 
}

export function saveFile(currFile: saveFileParams, fileList: saveFileParams, setFileList: (arg0: any) => void, setCurrFile: (arg0: { id: string; name: any; content: any; }) => void, setSnackbar: (arg0: { open: boolean; msg: string; }) => void, content:string) {
    if (currFile.id === '-1') return; //uninitialized file

    const resolvedFile = {
      id: currFile.id,
      name: resolveFilename(currFile.name, currFile.id),
      content: content
    }
    localStorage.setItem(resolvedFile.id, JSON.stringify({name: resolvedFile.name, content: resolvedFile.content}));

    const updatedList = fileList.map((file: { id: string; name: any; }, i: any) => {
        if (file.id === resolvedFile.id && file.name !== resolvedFile.name) {
          return {...file, name: resolvedFile.name}
        } else {return file;}
      })

    setFileList(updatedList);
    setCurrFile(resolvedFile);
    localStorage.setItem("files", JSON.stringify(updatedList));
    setSnackbar({open: true, msg: 'File saved!'});
    
    console.log('saving file: ' + resolvedFile.name + " | id: " + resolvedFile.id);
  }