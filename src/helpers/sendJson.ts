import { ServerResponse } from "http";


function sendJson(res:ServerResponse,ststusCode:number,data:any){
res.writeHead(ststusCode,{"content-type":"application/json"})
res.end(JSON.stringify(data))
}

export default sendJson;