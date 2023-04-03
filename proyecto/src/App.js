import React from "react";
import {Route, Switch} from 'react-router-dom';

import Header from "./components/Header/Header"
import Generos from "./screens/Generos/Generos"
import Chart2023 from "./screens/Chart2023/Chart2023"
import Home from "./screens/Home/Home"
import Favoritos from "./screens/Favoritos/Favoritos"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' exact={true} component= {Home} />
        <Route path='/favoritos' component= {Favoritos} />
        <Route path='/chart-2023'  component= {Chart2023} />
        <Route path='/generos'  component= {Generos} />
      </Switch>
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
