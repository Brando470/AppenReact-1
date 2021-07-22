import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Juegos from '../pages/Juegos';
import JuegosNew from '../pages/JuegosNew';
import NotFound from '../pages/NotFound.js'


const App = () => (

    <BrowserRouter>
    <Switch>
        <Route exact path ="/juegos" component={Juegos} /> 
        <Route exact path ="/juegos/new" component={JuegosNew} />  
        <Route  component={NotFound} />  
    </Switch>
     
</BrowserRouter>

)



export default App