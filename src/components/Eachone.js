import React from 'react'
import "../App.css"
function Eachone(props) {

    return (
        <div >
            <div className="geeks mycard mx-2 " >
                <img src={props.flag} className="card-img-top" alt=" is not loaded" style={{ height: "170px", width: "100%", objectFit: "cover" }} />
                <div className="card-body">
                    <h6 className="card-title" >{props.name}</h6>
                </div>
                <ul className="list-group">
                    <li className="listone">Capital: {props.capital}</li>
                    <li className="listone">Region: {props.region}</li>
                    <li className="listone">Subregion: {props.subregion}</li>
                    <li className="listone">population: {props.population}</li>
                    <li className="listone">Lang:
                        {props.language.map((cart_products, index) => {
                            return (<span style={{ marginLeft: "5px" }} key={index}>{cart_products.name}</span>)
                        })}
                    </li>
                    <li className="listlast" >Borders: {

                        props.border.map((i, index) => {
                            return (<span style={{ marginLeft: "2px" }} key={index}>{i},</span>)
                        })
                    }</li>
                </ul>
            </div>
        </div>
    )
}

export default Eachone
