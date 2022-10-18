let fileList: [];

export function resolveFilename(filename: string,id: any,n = 0): any {
    if (fileList.filter((file: { id: any; name: string; }) => file.id !== id && file.name === filename).length !== 0) { //if there is a different file with same name
        const name = filename.split(".md")[0].split("(")[0] //remove .md and (n) suffix
        return resolveFilename(`${name}(${n+1}).md`, id, n+1);
    }
    return filename;
  }