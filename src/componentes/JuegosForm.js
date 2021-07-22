import React from 'react'


class JuegosForm extends React.Component{
  state={}

  

 

  render(){
      const{onChange, onSubmit, form} = this.props
    return(
        <div className="container">
            <form  onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Tipo de Consala" 
                        name="consola" 
                        onChange={onChange}
                        value={form.consola}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre del Juego" 
                        name="titulo"
                        onChange={onChange}
                        value={form.titulo}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Descripcion del Juego" 
                        name="descripcion"
                        onChange={onChange}
                        value={form.descripcion}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Colo de targeta (Hex-izquierda)" 
                    name="leftColor"
                    onChange={onChange}
                    value={form.leftColor}
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Color de targeta (Hex-derecha)" 
                        name="rightColor"
                        onChange={onChange}
                        value={form.rightColor}
                    />    
                    </div>
                </div>
      
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    >
                    Submit
                </button>
        </form>
        </div>
    )
  }
}


export default JuegosForm