
const express = require('express')

const router = express.Router()
 
const clienteController = require('../controllers/cliente-controller')

// OBS: para chamar a pagina principal no navegador,usar o caminho:  http://localhost:3000/cliente/principal
router.get('/principal', clienteController.principal_cliente_get)

router.get('/listar', clienteController.listar_cliente)

router.get('/cadastrar',clienteController.cadastrar_cliente_get)
router.post('/cadastrar',clienteController.cadastrar_cliente_post)

router.get('/deletar/:id',clienteController.deletar_cliente)

router.get('/editar/:id',clienteController.editar_cliente_get)
router.post('/editar',clienteController.editar_cliente_post)

module.exports = router


