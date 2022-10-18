import formatDate from "./formatDate";
import { resolveFilename } from "./resolveFIleName";
import data from '../data.json'
import getUniqueId from "./UIDGen";


export default function CreateNewFile( fileList: any, setFileList: (arg0: any[]) => void, loadFile: (arg0: string) => void){
    const fileId = getUniqueId();
    const newFile = {
      id: fileId,
      name: resolveFilename(data[0].name, fileId),
      dateCreated: formatDate(new Date())
    }
    const updatedList = [...fileList, newFile]
    setFileList(updatedList)
    localStorage.setItem("files", JSON.stringify(updatedList));
    localStorage.setItem(newFile.id,JSON.stringify({name: newFile.name, content: ""}))
    loadFile(newFile.id)
    
}


    //generate uuid
   
  