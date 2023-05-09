import * as dotenv from 'dotenv'
import { Server } from './server/Server'
dotenv.config()

const server = new Server(
                        process.env.PORT,
                        process.env.HOST,
                        process.env.DB
                        )

server.listen()