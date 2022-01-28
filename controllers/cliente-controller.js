const Cliente = require('../models/cliente-model')

exports.listar_cliente = (req,res)=>{
      let cliente = Cliente.find({},(err,cliente)=>{

     if(err){
        console.error(err)
        return res.status(500).send("Erro consulta/lendo cliente")
    }
 
   
    res.render('pages/listagemCliente',{cliente:cliente})
    
    })
}

exports.principal_cliente_get = (req, res) => {
    res.render('pages/principal')
}

exports.cadastrar_cliente_get = (req, res) => {
    res.render('pages/formCliente')
}

exports.cadastrar_cliente_post = (req, res) => {

    let cliente = new Cliente()

    cliente.nome = req.body.nome
    cliente.cpf = req.body.cpf
    cliente.dt_nasc = req.body.dt_nasc
    cliente.telefone = req.body.telefone
    cliente.email = req.body.email
    cliente.cep = req.body.cep
    cliente.endereco = req.body.logradouro
    cliente.bairro = req.body.bairro
    cliente.cidade = req.body.localidade
    cliente.uf = req.body.uf
  

    cliente.save(err => {
        if (err)
        return res.status(500).send("Erro cadastrar cliente")
        return res.redirect('/cliente/cadastrar')
    
    })

}

exports.deletar_cliente = (req, res) => {
    id = req.params.id
    Cliente.deleteOne({_id:id}, (err, result) => {
        if(err) return res.status(500).send("Erro deletar cliente")

    })
    res.redirect('/cliente/listar')
}


exports.editar_cliente_get = (req, res) => {
   Cliente.findById(req.params.id, (err, cliente) => {
        if (err)
         return res.status(500).send("Erro ao consultar/editar cliente")
  
         res.render('pages/formEditarCliente', {cliente:cliente})
    })
  }

   
exports.editar_cliente_post = (req,res) => {

    id = req.body.id

    Cliente.findById(id,(err,cliente) => {
        if (err)
         return res.status(500).send("Erro ao consultar/salvar cliente")
      
        cliente.nome = req.body.nome
        cliente.cpf = req.body.cpf
        cliente.dt_nasc = req.body.dt_nasc
        cliente.telefone = req.body.telefone
        cliente.email = req.body.email
        cliente.cep = req.body.cep
        cliente.endereco = req.body.logradouro
        cliente.bairro = req.body.bairro
        cliente.cidade = req.body.localidade
        cliente.uf = req.body.uf

         cliente.save(err => {
            if(err)
            return res.status(500).send("Erro ao atualizar Cliente")
    
         return res.redirect('/cliente/listar')
        }) 

    })
}



