import React, { useState, useEffect } from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
import {GrCatalog} from 'react-icons/gr'
import './index.css'
import Logo from '../../Images/logo.png'

function Header() {
    /* Váriaveis globais do React */
    const [active, setActive] = useState(false)

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });
    /* Váriaveis globais do React */

    //Seta a nova dimensão no "screenSize" garantindo que o useEffect funcione corretamente
    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    //Irá ser atualizado a todo momento em que o tamanho da tela for alterado
    useEffect(() => {
        
        window.addEventListener('resize', setDimension);
    
        return(() => {
            window.removeEventListener('resize', setDimension);
            if (screenSize.dynamicWidth <= 1150) {
                setActive(false) //Se a tela for menor do que 1150px de largura o header fecha
            }
        })
    }, [screenSize])
    
    //Altera o className do elemento HTML dependendo do clique na seta da página
    function openHeader() {
        if(active){
            setActive(false)
        } else {
            setActive(true)
        }
    }

    return(
        <body className="bodyHeader">
            <div className={active ? "mainContentHeader active" : "mainContentHeader"}>
                <div className="setaHeader">
                    <button className="btnForSeta" onClick={openHeader}>{active ? <AiOutlineArrowUp size={20}/> : <AiOutlineArrowDown size={20}/>}</button>
                </div>       
                <ul>
                    <li>
                        <a>
                            <AiOutlineHome size={20}/>
                            <span>Home</span> 
                        </a> 
                        <span className="tipForHeader">Home</span>
                    </li>
                    <li>
                        <a>
                            <MdOutlineMiscellaneousServices size = {20}/>
                            <span>Produtos e Serviços</span>
                        </a>
                        <span className="tipForHeader">Produtos e Serviços</span>
                    </li>
                    <div className="logoHeader">
                        <a href="/Menu"><img src={Logo} width = '180px'/></a>
                    </div>
                    <li>
                        <a>
                            <GrCatalog size = {20}/>
                            <span>Catálogo</span>
                        </a>
                        <span className="tipForHeader">Catálogo</span>
                    </li>
                    <li>
                        <a href="/Contato">
                            <AiOutlineContacts size = {20} />
                            <span>Contato</span>
                        </a>
                        <span className="tipForHeader">Contato</span>
                    </li>
                </ul>
                <div className={active ? "searchHeader active" : "searchHeader"}>
                    <input className="inputSearchHeader" type='text' placeholder="Pesquisa"></input>
                </div>
            </div>
        </body>
    )
}

export default Header;