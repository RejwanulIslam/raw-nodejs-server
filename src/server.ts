import http, { IncomingMessage, Server, ServerResponse } from "http"
import config from "./config";



const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('server is running.......')
    // root route
    if (req.url == '/' && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(
            JSON.stringify({
                message: "Hallo from node js with typescript",
                path: req.url
            })
        )
    }

    // helth route
    if (req.url == '/api' && req.method == "GET") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({
            message: "Helth status ok",
            path: req.url
        }));

    }

    // 
    if (req.url == "/api/user" && req.method === "POST") {
        // const user = {
        //     id: 828282,
        //     name: "Nishat"
        // }
        // res.writeHead(200, { "content-type": "application/json" });
        // res.end(JSON.stringify(user));

        let body = '';
        // listen for data chunk

        req.on("data", chunk => {
            body = body + chunk.toString()
        })
        req.on("end", () => {
            try {
                const parseBody = JSON.parse(body)
                console.log(parseBody)
                res.end(JSON.stringify(parseBody))
            } catch (error:any) {
                console.log(error?.message)
            }
        })
    }
})





server.listen(config.port, () => {
    console.log(`server is running port ${config.port}`)
})