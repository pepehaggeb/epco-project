import React from "react";
import './index.css'
import Header from "../../Components/Header";
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephoneFill} from 'react-icons/bs'
import {FaRegAddressCard} from 'react-icons/fa'

function Contato() {
    return(
        <>
            <body>
                <Header />
                <div className="backgroundImageContato">
                    <h1>Contato</h1>
                </div>
                <div className="contatoBody">
                    <div className="contatoForm">
                        <h1>Solicite um orçamento</h1>
                        <div className="formForContato">
                            <input type = 'text' className="inputTextFormContato"  placeholder="Nome"></input>
                            <input type = 'text' className="inputTextFormContato"  placeholder="E-Mail"></input>
                            <input type = 'text' className="inputTextFormContato"  placeholder="Telefone"></input>
                            <input type = 'text' className="inputTextFormContato"  placeholder="Empresa"></input>
                            <input type = 'text' className="inputTextFormContato" placeholder="Cidade"></input>
                            <input type = 'text' className="inputTextFormContato" placeholder="Produto"></input>
                            <textarea placeholder="Deixe sua mensagem" className="textAreaFormContato"></textarea>
                            <button className="btnFormContato">Enviar</button>
                        </div>
                    </div>
                    <div className="contatoTel">
                        <div className="telefoneEmailContato">
                            <h1>Contatos</h1>
                            <div className="emailContato">
                                <div className="iconEmailContato" style = {{'height': '30px'}}>
                                    <HiOutlineMail size = {30} color = '#32425c'/>
                                </div>
                                <p>epco@epco.eng.br</p>
                            </div>
                            <div className="telefoneContato">
                                <div className="iconTelefoneContato" style = {{'height': '30px'}}>
                                    <BsTelephoneFill size = {30} color = '#32425c'/>
                                </div>
                                <p>Sorocaba: (15) 3026-0052</p>
                            </div>
                        </div>
                        <div className="enderecoContato">
                            <div className="titleEnderecoContato">
                                <h1>Endereço</h1>
                            </div>
                            <div className="contentEnderecoContato">
                                <div>
                                    <FaRegAddressCard size = {30} color = '#32425c'/>
                                </div>
                                <p>R: Professor Luiz de Campos, 115 Sorocaba/SP</p>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Contato;