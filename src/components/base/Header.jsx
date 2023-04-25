import React from "react"
import uther from "../img/uther.jpeg"
import "./header.css"

function Header (){
    return (
        <>
            <header>
                <div>
                    <img className="uther" src={uther}/>
                </div>

                <nav>
                    <h2>Card Editor</h2>
                    <h2>Customs</h2>
                    <h2>Search</h2>
                </nav>
            </header>
        </>
    )    
}


export default Header