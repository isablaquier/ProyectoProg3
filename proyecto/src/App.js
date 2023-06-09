import React from "react";
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header"
import Home from "./screens/Home/Home"
import Favoritos from "./screens/Favoritos/Favoritos"
import Footer from "./components/Footer/Footer"
import PaginaBuscador from "./screens/PaginaBuscador/PaginaBuscador";
import VerTodasCanciones from "./screens/VerTodasCanciones/VerTodasCanciones";
import Album from "./screens/Album/Album";
import NotFound from "./components/NotFound/NotFound";
import Cancion from "./screens/Cancion/Cancion";
import VerTodosAlbumes from "./screens/VerTodosAlbumes/VerTodosAlbumes";




function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact={true} component= {Home} />
        <Route path='/favoritos' component= {Favoritos} />
        <Route path='/vertodasCanciones' component ={VerTodasCanciones}/>
        <Route path='/vertodosAlbumes' component = {VerTodosAlbumes}/>
        
        <Route path='/unalbum/id/:id' exact={true} component= {Album}/>
        <Route path='/cancion/id/:id' exact={true} component={Cancion} />
        <Route component={NotFound}/>
        
      </Switch>
      <Footer/>
    </React.Fragment>
   
  );
}

export default App;
