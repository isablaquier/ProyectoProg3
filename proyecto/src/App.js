import React from "react";
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header"
import Chart2023 from "./screens/Chart2023/Chart2023"
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
      <PaginaBuscador/>
      <Switch>
        <Route path='/' exact={true} component= {Home} />
        <Route path='/favoritos' component= {Favoritos} />
        <Route path='/chart-2023'  component= {Chart2023} />
        <Route path='/vertodasCanciones' component ={VerTodasCanciones}/>
        <Route path='/vertodosÁlbumes' component = {VerTodosAlbumes}/>
        <Route path='/unalbum/id/:id' component= {Album}/>
        <Route component={NotFound}/>
        <Route path='/cancion/id/:id' component={Cancion} />
      </Switch>
      <Footer/>
    </React.Fragment>
   
  );
}

export default App;
