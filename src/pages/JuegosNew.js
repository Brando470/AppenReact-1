import { render } from '@testing-library/react'
import React from 'react'
import JuegoForm from '../componentes/JuegosForm'
import Card from '../componentes/Card'


class JuegosNew extends React.Component{
 
    state={
        form:{
            consola: "",
            titulo: "",
            descripcion: "",
            leftColor: "",
            rightColor: ""
        }
    }
    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
      }


      handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state)
      }

  render(){
    return(
       <div className="row">
           <div className="col-sm">
            <Card {...this.state.form}/>
           </div>
           <div className="col-sm">
                <JuegoForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
           </div>
       </div>


      
    )
  }
}


export default JuegosNew