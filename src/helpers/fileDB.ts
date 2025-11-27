import fs from "fs";
import path from "path";

const filePath=path.join(process.cwd(), "./src/data/user.json")
export function readUser(){
    const data=fs.readFileSync(filePath,"utf-8")
    return JSON.parse(data)
}


export function rightUser(user:any){
    fs.writeFileSync(filePath,JSON.stringify(user,null,2))
    
}