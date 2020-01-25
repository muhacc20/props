import React from 'react'
import '../../css/style.css'
export default function Tariff(props) {
    return (
        
            <div className= "basic" >
                <h1>{props.title} </h1>
                <h2>{props.price}</h2>
                <p>{props.min}</p>
                <h4>{props.limit}</h4>
                <h2>{props.number}</h2>
                <p>{props.titles}</p>
                <h3>{props.traffic} </h3>
            </div>
       

    )
}
