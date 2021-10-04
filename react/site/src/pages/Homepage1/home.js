import { ContainerHome } from "./styled"

import Partecima  from "../../components/Common/parteCima/componente"
import { Link } from "react-router-dom"
import Rodape  from "../../components/Common/rodape/redape"
import Trio from "../../components/Common/trio/trio"


export default function Homepage() {
    return (
    <ContainerHome>
          <Partecima/>
   
        <div class="conteiner-homepage1">


      

        <div class="oferta-da-semana">
<Trio/>

            <div class="hp1-titulo">OFERTAS DA SEMANA!</div>

        
            <div class="CSSgal">

                <s id="s1"></s> 
                <s id="s2"></s>
                
            
                <div class="slider">
                    <div class="selecao-especial">
                        <div class="slide-titulos">

                            <div class="til1">
                                Seleção especial de livros
                            </div>
                            <div class="til2">
                                com ate 50% de desconto
                            </div>
                            <div class="botao-slide2">
                                <Link to="/desconto"><button>Confira</button></Link>
                            </div>

                        </div>

                        <div class="img-combo">
                            <img src="/assets/images/selecao.png" alt=""/>
                        </div>


                    </div>
                    <div class="selecao-livro">

                        <div class="box-livros">
                            <div class="imgt">
                                <div class="imgl">
                                    <img src="/assets/images/COMÉDIA 1.svg" alt=""/>
                                </div>
                                <div class="tllivro">
                                    A Divina Comédia Inferno - Dante Alighieri
                                </div>

                            </div>
                            <div class="box-precos">
                                <div class="precos">
                                    <div class="preco-de">
                                        <s>R$ 53,00</s>
                                    </div>
                                    <div class="por">
                                        R$ 43,00
                                    </div>
                                    <div class="botao-preco">
                                        <Link to="/descricao"><button>Saiba Mais</button></Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="box-livros">
                            <div class="imgt">
                                <div class="imgl">
                                    <img src="/assets/images/SUSPENSE1 1.svg"  alt=""/>
                                </div>
                                <div class="tllivro">
                                    Caixa de Pássaros - Josh Malerman </div>

                            </div>
                            <div class="box-precos">
                                <div class="precos">
                                    <div class="preco-de">
                                        <s> R$ 40,00</s>
                                    </div>
                                    <div class="por">
                                        R$ 19,80
                                    </div>
                                    <div class="botao-preco2">
                                        <Link to="/descricao"><button>Saiba Mais</button></Link>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                
                </div>
                
                <div class="prevNext">
                <div><Link to="#s1"></Link><Link to="#s2"></Link></div>
                <div><Link to="#s1"></Link><Link to="#s2"></Link></div>
                
                </div>
            
                <div class="bullets">
                <Link to="#s1">1</Link>
                <Link to="#s2">2</Link>
                
                </div>
            
            </div>

            <div class="queridinhas">
                <div class="tlqueridinhasori">
                    <div class="tlqueridinhas1">
                        NOSSAS NOVAS QUERIDINHAS!
                    </div>
                    <div class="tlqueridinhas2">
                        Os livros mais populares do momento!
                    </div>
                </div>

                <div class="livros-queridinhas">
                <Link to="/descricao"> <div class="box-livro">
                        <div class="img-livro-queridinha">
                            <img src="/assets/images/vermelho, branco e sangue azul.svg" alt="" />
                        </div>
                        <div class="box-informacoes-livros">
                            <div class="nome-livro-queridinhas">
                                VERMELHO, BRANCO E SANGUE AZUL

                            </div>
                            <div class="autor-queridinhas">
                                Casey Mcquiston
                            </div>
                            <div class="preco-queridinhas">
                                R$ 49,90
                            </div>

                        </div>
                    </div>
                </Link>
                <Link to="/descricao"> <div class="box-livro">
                    <div class="img-livro-queridinha">
                        <img src="/assets/images/vermelho, branco e sangue azul.svg" alt=""/>
                    </div>
                    <div class="box-informacoes-livros">
                        <div class="nome-livro-queridinhas">
                            VERMELHO, BRANCO E SANGUE AZUL

                        </div>
                        <div class="autor-queridinhas">
                            Casey Mcquiston
                        </div>
                        <div class="preco-queridinhas">
                            R$ 49,90
                        </div>

                    </div>
                </div>
            </Link>
            <Link to="/descricao"> <div class="box-livro">
                <div class="img-livro-queridinha">
                    <img src="/assets/images/vermelho, branco e sangue azul.svg" alt=""/>
                </div>
                <div class="box-informacoes-livros">
                    <div class="nome-livro-queridinhas">
                        VERMELHO, BRANCO E SANGUE AZUL

                    </div>
                    <div class="autor-queridinhas">
                        Casey Mcquiston
                    </div>
                    <div class="preco-queridinhas">
                        R$ 49,90
                    </div>

                </div>
            </div>
        </Link>
                </div>
                </div>
                <div class="livros-queridinhas2">
                    <Link to="/descricao"> <div class="box-livro">
                        <div class="img-livro-queridinha">
                            <img src="/assets/images/vermelho, branco e sangue azul.svg"  alt=""/>
                        </div>
                        <div class="box-informacoes-livros">
                            <div class="nome-livro-queridinhas">
                                VERMELHO, BRANCO E SANGUE AZUL

                            </div>
                            <div class="autor-queridinhas">
                                Casey Mcquiston
                            </div>
                            <div class="preco-queridinhas">
                                R$ 49,90
                            </div>

                        </div>
                    </div>
                </Link>
                <Link to="/descricao"> <div class="box-livro">
                    <div class="img-livro-queridinha">
                        <img src="/assets/images/vermelho, branco e sangue azul.svg" alt=""/>
                    </div>
                    <div class="box-informacoes-livros">
                        <div class="nome-livro-queridinhas">
                            VERMELHO, BRANCO E SANGUE AZUL

                        </div>
                        <div class="autor-queridinhas">
                            Casey Mcquiston
                        </div>
                        <div class="preco-queridinhas">
                            R$ 49,90
                        </div>

                    </div>
                </div>
            </Link>
            <Link to="/descricao"> <div class="box-livro">
                <div class="img-livro-queridinha">
                    <img src="/assets/images/vermelho, branco e sangue azul.svg" alt=""/>
                </div>
                <div class="box-informacoes-livros">
                    <div class="nome-livro-queridinhas">
                        VERMELHO, BRANCO E SANGUE AZUL

                    </div>
                    <div class="autor-queridinhas">
                        Casey Mcquiston
                    </div>
                    <div class="preco-queridinhas">
                        R$ 49,90
                    </div>

                </div>
            </div>
        </Link>
                </div>
            </div>
         
      


        </div>
        <Rodape />

    </ContainerHome>
    )  
}