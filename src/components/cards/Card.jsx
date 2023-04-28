import "./cards.css"
import React from "react"
import saskia from "../img/c16-41-saskia-the-unyielding.jpg"



function Card (){
    return (
        <div className="card-cont">
        <img className="card" src={saskia} />
        </div>
    )
}




export default Card