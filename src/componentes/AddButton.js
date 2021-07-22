import React from 'react'
import './styles/AddButton.css'
import buttomImg from '../img/btn-add.png'
import { Link } from 'react-router-dom'

const AddButtom = () =>(
    <Link to="juegos/new">
        <img src={buttomImg} className="juegos-add"></img>
    </Link>
)


export default AddButtom