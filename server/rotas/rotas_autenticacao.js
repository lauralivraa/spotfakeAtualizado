import Express from "express";
import { login, nova_senha, registro } from "../controlador/controlador_autenticacao.js";

const rotas_autenticacao = Express.Router()

rotas_autenticacao.post('/registro', registro)
rotas_autenticacao.post('/login', login)
rotas_autenticacao.put('/:email/nova_senha', nova_senha)

export { rotas_autenticacao }