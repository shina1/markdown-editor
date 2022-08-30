let id = 0;
export default function getUniqueId():string {
   const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const randomAlph = alphabetArray[Math.floor(Math.random()*alphabetArray.length)]
    return `${id++}${randomAlph.toLowerCase()}${randomAlph}${Date.now().toString(36)}${Math.random().toString(36)}`;
}