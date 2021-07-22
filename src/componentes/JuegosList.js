import React from 'react'
import Card from './Card'

const JuegosList = ({juegos}) =>(
            <div>
                {juegos.map((Juegos) => (
                    
                        <Card 
                            key={Juegos.id}
                            consola={Juegos.consola}
                            titulo={Juegos.titulo}
                            descripcion={Juegos.descripcion}
                            leftColor={Juegos.leftColor}
                            rightColor={Juegos.rightColor}
                        />
                ))} 
            </div>
)

export default JuegosList