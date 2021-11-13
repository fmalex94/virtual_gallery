import React from 'react';

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//ficheros de rutas
import loginRoutes from './routes/login'

//redux
import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (

    <Router>
      <Provider store={store}>
        <Header />

        <Switch>
          {/* todas las rutas del login separadas en un fichero con un arreglo de rutas */}
          {loginRoutes}
          {/* arreglado problema creando un componente Home q contiene los componentes Galeria y Hero */}
          <Route exact path="/" component={Home} key="home"/>
            
        </Switch>

        <Footer />
      </Provider>
    </Router>

  );
}

export default App;
