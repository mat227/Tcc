import { Container  } from "./indexStyled.js";
import ParteCima from "../../components/Common/parteCima/componente.js";
import {Buttom} from '../../components/buttons/indexStyled.js'
import { Link } from "react-router-dom";

export default function suaInfo(){
    return(
        <div>
            <ParteCima />
            <Container>
                    <div className='conteudo'>
                            <div class="titulo">
                                <div class="th1"><h1>Suas informações</h1></div>
                                <div class="trilhaM"><label>SUA SACOLA -  SUAS INFORMAÇÕES - PAGAMENTO -  FINALIZAÇÃO</label></div>
                            </div>
                            <div class="auxi">
                                <div class="box1">
                                    <div class="labels">
                                        <label class="test">Nome:</label>
                                        <label class="test">Sobrenome</label>
                                        <label class="test" >Email</label>
                                        <label class="test">Senha</label>
                                        <label class="test" for="">Endereço</label>
                                        <label class="test" for="">Complemento</label>
                                        <label class="test" for="">Bairro</label>
                                    </div>
                                    <div class="contato">
                                        <h2>Telefone</h2>
                                        <label for="" class="tell">__</label>
                                        <label for="" class="tell">___ - ____</label>
                                    </div>
                                </div>
                                <div class="box2">
                                    <h4>Confirme se as informaçoes estão correta</h4>
                                    <div class="lbl">
                                        <label for="">Enderço :</label>
                                        <label for=""> _____________</label>
                                    </div>
                                    <div class="lbl">
                                        <label for="">Complemento :</label>
                                        <label for=""> _____________</label>
                                    </div>
                                    <div class="lbl">
                                        <label for="">Bairro :</label>
                                        <label for=""> _____________</label>
                                    </div>
                                    <div class="lbl">
                                        <label for="">Nome :</label>
                                        <label for=""> _____________</label>
                                    </div>
                                </div>
                            </div> 
                            <div class="btns">
                                    <Buttom><Link to='./suasacola' >Voltar </Link></Buttom>
                                    <Buttom> Proximo Passo </Buttom>
                            </div>
                        </div>
                </Container>
        </div>
    );

}