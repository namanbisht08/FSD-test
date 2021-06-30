import React from 'react';
import NavbarM from './components/NavbarM';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
    return(
        <Router>
        <div>
            <NavbarM/>
            <Home/>
            <Footer/>
            </div>
            </Router>
    );
}

export default App;
