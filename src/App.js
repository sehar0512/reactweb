import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Alert from './Alert';

function App() {
  return (
    <>
    <Alert />
    <Header />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/blog" component={Blog}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
