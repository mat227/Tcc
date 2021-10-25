import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})



export default class Api {
    

    async login(email, senha) {
        let a = {email,senha}
        let r = await api.post(`/login`, a);
        return r.data;
    }
    //Função de informaçoes do Cliente
    async infoC(){
        let r = await api.get(`/suaInfo`);
        return r.data;
    }
    async addLivro(livro,cvv,vpara,vde,autor,editora,genero,disponivel,qtd,imagem,brochura,promocao){
        let info = {
            livro : livro,
            cvv : cvv,
            vpara : vpara,
            vde : vde,
            autor : autor,
            editora : editora,
            genero : genero,
            disponivel : disponivel,
            qtd : qtd,
            imagem : imagem,
            brochura : brochura,
            promocao : promocao
        }
        let r = await api.post(`/addlivro`,info)
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

        let r = await api.post(`/pagamento`, cadastroJson );
        return r.data
    }

    async cadastro(nmrua,numerorua,email, senha,telefone, nome, cpf, datanas) {
        let cadastroJson = {
            email: email,
            senha: senha,
            telefone:telefone,
            nome: nome,
            cpf: cpf,
            datanas: datanas
            
        }

        let r = await api.post(`/cadastro`, cadastroJson );
        return r.data
    }

    async cadastrarLivro(livro, descricao, vpara, vde, autor, editora, genero, disponivel,qtd,imagem,brochura,promocao) {
        let cadastroJson = {
            livro: livro,
            descricao: descricao,
            vpara: vpara,
            vde: vde,
            autor: autor,
            editora: editora,
            genero: genero,
            disponivel:disponivel,
            qtd:qtd,
            imagem: imagem,
            brochura:brochura,
            promocao:promocao
        }

        let r = await api.post(`/addlivro`, cadastroJson );
        return r.data
    }

    async listarLivro() {
        let r = await api.get(`/addlivro/`);
        return r.data;
    }
}