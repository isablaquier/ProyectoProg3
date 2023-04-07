import React from "react";
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header"
import Generos from "./screens/Generos/Generos"
import Chart2023 from "./screens/Chart2023/Chart2023"
import Home from "./screens/Home/Home"
import Favoritos from "./screens/Favoritos/Favoritos"
import Footer from "./components/Footer/Footer"
import ContenedorGenero from "./components/ContenedorGenero/ContenedorGenero";
import ListadoGenero from "./components/ListadoGenero/ListadoGenero"
import PaginaBuscador from "./screens/PaginaBuscador/PaginaBuscador";
import VerTodasGenero from "./screens/VerTodasGenero/VerTodasGenero";
import VerTodasCanciones from "./screens/VerTodasCanciones/VerTodasCanciones";
import Album from "./screens/Album/Album";
import NotFound from "./components/NotFound/NotFound";


function App() {
  return (
    <React.Fragment>
      <Header />
      <PaginaBuscador/>
      <Switch>
        <Route path='/' exact={true} component= {Home} />
        <Route path='/favoritos' component= {Favoritos} />
        <Route path='/chart-2023'  component= {Chart2023} />
        <Route path='/generos'  component= {Generos} />
        <Route path='/vertodasGenero' component={VerTodasGenero}/>
        <Route path='/vertodasCanciones' component ={VerTodasCanciones}/>
        <Route path='/unalbum/id/:id' component= {Album}/>
        <Route component={NotFound}/>
      </Switch>
      <ContenedorGenero />
      <ListadoGenero />
      <Footer/>
    </React.Fragment>
   
  );
}

export default App;
