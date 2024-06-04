import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import router from './router/router.router'
import cors from 'cors'

dotenv.config()
const server = express();

server.use(cors())
server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true }))

// ROTAS
server.use('/backend', router)
server.use((req: Request, res: Response) => {
    res.status(404).send('Página não encontrada')
})

server.listen(process.env.PORT, () => {
    console.log('Servidor está no ar!')
})

