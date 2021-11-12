import axios from "axios";

const api = axios.create ({
    baseURL: 'https://tecdevtcc.herokuapp.com/usuario'
})


export default class Api {

//Função de informaçoes do Cliente
async infoC(id){
    let r = await api.get(`/suaInfo/`+ id);
    return r.data;
}
// Post pedido
async efetuarpedido(idCliente, id_livro, quantidade){
    
    let jsonT = {
        livro : id_livro,
        qtd : quantidade
    }
    let  data = {
        idc : idCliente,
        situacao : "Transportadora",
        idp:[
            {
                livro : id_livro,
                qtd : quantidade
            }
        ]

    }
    let r =  await api.post(`/addpedido`, data);
        return r.data;
    
}

async cadastrarCartao(nrcartao, titular, sobrenome, vencimento, parcelas, cvv) {
    let cadastroJson = {
        nrcartao: nrcartao,
        titular: titular,
        sobrenome: sobrenome,
        vencimento: vencimento,
        parcelas: parcelas,
        cvv: cvv
        
    }

    let r = await api.post(`/addpagamento`, cadastroJson );
    return r.data
}

async cartoes () {
    let r = await api.get(`/pagamento`)
    return r.data;
}


}