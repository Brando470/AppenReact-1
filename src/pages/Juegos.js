import React from 'react'
import AddButton from '../componentes/AddButton'
import JuegosList from '../componentes/JuegosList'
import Welcome from '../componentes/Welcome'
import AddButtom from '../componentes/AddButton'

class Juegos extends React.Component {
    state={
            data:[{
                "id": 1,
                "consola":"X-box One",
                "titulo": "Gears of War",
                "descripcion": "Videojuego de disparos en tercera persona, del género survival horror y acción-aventura.",
                "leftColor": "#44C50C",
                "rightColor": "#327216"
            },{
                "id": 2,
                "consola":"Play 5",
                "titulo": "spider-man",
                "descripcion": "Videojuego de acción y aventura basado en el popular superhéroe hómonimo de la editorial Marvel Comics.​",
                 "leftColor": "#70BDF1",
                "rightColor": "#407DDF"
            },{
                "id": 3,
                "consola":"Nintendo DS",
                "titulo": "Mario kart",
                "descripcion": "Videojuego de carreras desarrollado por Nintendo EAD y publicado por Nintendo para Nintendo DS.",
                "leftColor": "#FAD961",
                "rightColor": "#F76B1C"
            },
            {
                "id": 4,
                "consola":"Switch",
                "titulo":"The Legend of Zelda",
                "descripcion":"Vdeojuego de acción-aventura de 2017 de la serie The Legend of Zelda, desarrollado por la filial Nintendo EPD",
                "leftColor":"#20D4F0",
                "rightColor":"#F02620"
            },
          ]
        }
    
    render(){
        return(
            <div>
                <Welcome 
                  username="brandon"
                 /> 
           
               <JuegosList 
                juegos={this.state.data}
               />

               <AddButton />
            </div>
             
        )
    }
}



export default Juegos