import React from 'react'//importar a React
import './styles/Card.css'





class Card extends React.Component{ //definimos clase de Js

    render(){
        const {consola,titulo,descripcion,leftColor,rightColor} = this.props;
        return(
            <div className="card mx-auto juegos-Card"
            style={{
                background: `linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center"> 
                        <div className="col-6">
                            <h1 className="">{consola}</h1> 
                        </div>
                        <div className="col-6 juegos-Card-Info">
                            <h2>{titulo}</h2>
                            <p>{descripcion}</p>
                        </div> 
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Card//como se genera una clase tenemos que exportarla