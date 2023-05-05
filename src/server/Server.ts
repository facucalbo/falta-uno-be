// import * as dotenv from 'dotenv'
import express, { urlencoded } from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Router } from './Router'

export class Server {
    private router: Router
    private app: express.Application
    private httpServer: any

    constructor(
        private port: number | string = 3000,
        private host: string = 'localhost'
    ) {
        this.app = express()
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(urlencoded({extended: true}))
        
        this.router = new Router(this.app)
        this.httpServer = createServer(this.app)
    }


    public async listen() {
        await this.httpServer.listen(this.port, this.host)
        console.log(`Server up on ${this.host} listen at port ${this.port}`)
    }
}