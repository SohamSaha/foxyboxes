import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home';
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
