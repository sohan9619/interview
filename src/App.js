
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"
//firebase
import firebase from 'firebase/app'
import "firebase/auth"

//components

import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './contet/UserContext';
import Footer from './layout/Footer';
import  Header from "./layout/Header"
import firebaseConfig from './config/firebaseConfig'
import Cutive from './question/Cutive'
import Sorte from './question/Sorte';
import Raneven from './question/Raneven';
import Obje from './question/Obje';
// init firebase
firebase.initializeApp(firebaseConfig)





const App = () => {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Question1" component={Raneven} />
          <Route exact path="/Question2" component={Cutive} />
          <Route exact path="/Question3" component={Sorte} />
          <Route exact path="/Question5" component={Obje} />
          <Route exact path="*" component={PageNotFound} />


        </Switch>
        <Footer></Footer>
      </UserContext.Provider>

    </Router>
  );
}

export default App;
