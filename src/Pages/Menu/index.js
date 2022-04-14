import React from "react";
import {motion} from 'framer-motion'
import './index.css'
import Header from '../../Components/Header/index'
import Product from "../../Components/Pro&Ser";
import {MdOutlineDesignServices} from 'react-icons/md'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {BsFillLightbulbFill} from 'react-icons/bs'
import {RiSuitcaseFill} from 'react-icons/ri'
import {MdGroups} from 'react-icons/md'
import {MdOutlineCopyright} from 'react-icons/md'

function Menu() {

    const products = [
        {'name': 'BOTOEIRAS PARA ELEVADORES', 'url': 'https://epco.eng.br/wp-content/uploads/2020/10/acessorios-para-elevadores-botoeira-indicador.jpg'},
        {'name': 'CORTE A LASER – MATERIAL ORGÂNICO', 'url': 'https://epco.eng.br/wp-content/uploads/2020/10/corte-a-laser-1.jpg'},
        {'name': 'CORTE A LASER E DOBRA DE CHAPAS', 'url': 'https://epco.eng.br/wp-content/uploads/2020/10/corte-a-laser-e-dobradica.jpg'},
        {'name': 'DESENVOLVIMENTO DE PROJETO', 'url': 'https://epco.eng.br/wp-content/uploads/2020/10/desenvolvimento-de-projeto.jpg'},
        {'name': 'ETIQUETAS EM RESINA PU', 'url': 'https://epco.eng.br/wp-content/uploads/2020/10/adesivo-de-resina.jpg'},
        {'name': 'IMPRESSÃO 3D', 'url': 'https://epco.eng.br/wp-content/uploads/2020/10/impressao-3d-principal.jpg'}
    ]

    return(
        <div>
            <Header />
            <body>
                <div className="imageElevator">
                    <motion.div 
                    className="textExplicationImageElevator"
                    animate={{ x: 50 }}
                    transition={{ type: "spring", stiffness: 100, default: { duration: 1 }}}
                    >
                        <MdOutlineDesignServices size = {40} color='white'/>
                        <p>Oferecemos os serviços de corte a laser e dobra de materiais ferrosos e orgânicos, prototipagem 3D, etiquetas resinadas e contamos com uma equipe altamente especializada na produção de botoeiras para elevador.</p>
                    </motion.div>
                    {/* <div className="backgroundOpacity"></div> */}
                    <motion.div 
                    className="textAtendimentoImageElevator"
                    animate={{ x: -50 }}
                    transition={{ type: "spring", stiffness: 100, default: { duration: 1 }}}
                    >
                        <h1>Atendimento</h1>
                        <p>epco@epco.eng.br </p>
                        <p>(15) 3026-0052 | (15) 97403-2627</p>
                        <p>R: Professor Luiz de Campos, 115 - Sorocaba/SP</p>
                    </motion.div>
                </div>
                <div className="productAndServices">
                    {products.map((product) => (
                        <Product 
                        name = {product.name}
                        url = {product.url}
                        />
                    ))}
                </div>
                <div className="sobreEPCO">
                    <motion.div 
                    className="textSobreEPCO"
                    animate={{ x: 60 }}
                    transition={{ type: "spring", stiffness: 100, default: { duration: 1 }}}
                    >
                        <h1><AiOutlineCheckSquare/>Sobre a EPCO</h1>
                        <p>A EPCO – Engenharia de Produtos e Componentes, foi fundada em 2014, com o objetivo de apresentar aos clientes, soluções completas no desenvolvimento de produtos e fabricação.</p>
                        <p>Em nossa linha teste, oferecemos os serviços de corte a laser e dobra de materiais ferrosos e orgânicos, prototipagem 3D, etiquetas resinadas e contamos com uma equipe altamente especializada na produção de botoeiras para elevador.</p>
                    </motion.div>
                    <motion.div 
                    className="fotoSobreEPCO"
                    animate={{ x: -60 }}
                    transition={{ type: "spring", stiffness: 100, default: { duration: 1 }}}
                    >
                        <img className="imgSobreEPCO" alt = 'imgForSobre' src = 'https://epco.eng.br/wp-content/uploads/2020/10/corte-a-laser-e-dobradica.jpg' style = {{'width': '400px'}}></img>
                    </motion.div>
                </div>
                <motion.div 
                className="principiosEPCO"
                animate={{ y: -80 }}
                transition={{ type: "spring", stiffness: 100, default: { duration: 1 }}}
                >
                    <div className="solucoesEPCO">
                        <div className="iconSolucoes">
                            <BsFillLightbulbFill size={40} color = '#32425c'/>
                        </div>
                        
                        <div>
                            <h1>Soluções</h1>
                            <p>Trabalhamos com ética e evolução contínua, para oferecer ótimas oportunidades de negócios aos nossos clientes. EPCO – Qualidade e Eficiência que você pode confiar!</p>
                        </div>
                    </div>
                    <div className="solucoesEPCO">
                        <div className="iconSolucoes">
                            <RiSuitcaseFill size={40} color = '#32425c'/>
                        </div>
                        
                        <div>
                            <h1>Compromisso</h1>
                            <p>Investimos em inovação e tecnologia para garantir soluções eficientes e proporcionar agilidade, confidencialidade e comodidade no atendimento aos clientes mais exigentes do mercado.</p>
                        </div>
                    </div>
                    <div className="solucoesEPCO">
                        <div className="iconSolucoes">
                            <MdGroups size={40} color = '#32425c'/>
                        </div>
                        
                        <div>
                            <h1>Equipe</h1>
                            <p>Nossa equipe de profissionais qualificados e especializados está preparada para desenvolver seu projeto e transformar ideias em produtos inovadores.</p>
                        </div>
                    </div>
                </motion.div>
                <div className="copyEPCO">
                    <MdOutlineCopyright  size={30} color = '#32425c'/>
                    <p>DIREITOS RESERVADOS EPCO(Engenharia de Produtos e Componentes)</p>
                </div>
            </body>
        </div>
    )
}

export default Menu;