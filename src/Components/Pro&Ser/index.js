import React from "react";
import {motion} from 'framer-motion'
import './index.css'

function Product(props) {
    return(
        <body className="bodyProduct">
            <div>
                <a href={"/Menu"}>
                    <motion.img 
                    alt = 'imgProduto1' 
                    src = {props.url} 
                    style = {{'height': '250px', 'borderRadius': '15px'}}
                    whileHover = {{'scale': 1.1}}
                    ></motion.img>
                </a>
                <p>{props.name}</p>
            </div>
        </body>
    )
}

export default Product;