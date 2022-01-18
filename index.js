
//Chamando o Express 
const express = require('express')
//Comando que adiciona o mongoose 
const mongoose = require('mongoose')
 //Definindo a PORTA em que nosso servidor HTTP vai funcionar
const port = 3000

const cliente_router = require('./routers/cliente-routers')
const app = express()


//Função de conexão com o MongoDB Atlas, banco Farmacia
mongoose.connect('mongodb+srv://KeniaRamos:katita10@cluster0.ei4ns.mongodb.net/Farmacia?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("estamos conectados ao banco de dados"))
 
app.set('view engine', 'ejs')

app.set('views', __dirname + '/views')

//permite  que os dados recebidos sejam enviados ao banco de dados
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

// pegar a rotas  passadas dento do arquivo
app.use('/cliente',cliente_router)

//alguns arquivos(css, js, ) ficaram armazenados na pasta public
app.use(express.static(__dirname + '/public'));

//faz a conecção
app.listen(port, () => {
    console.log("Servidor rodando na porta 3000")
})


