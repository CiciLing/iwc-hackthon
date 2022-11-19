import React from 'react';
import './App.css';
import Navbar from './components/index.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import Home from './pages';
import Rights from './pages/rights';
import Chat from './pages/chat';
import StateInformationPage from './pages/StateInformationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CTPage from './pages/ct';
import MAPage from './pages/ma';
import NYPage from './pages/ny';


function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        {/*<Route exact path='/' exact element={<Home />} />*/}
        <Route path='/rights' element={<Rights/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/StateInformationPage' element={<StateInformationPage/>} />
        <Route path='/ct' element={<CTPage/>} />
        <Route path='/ma' element={<MAPage/>} />
        <Route path='/ny' element={<NYPage/>} />
    </Routes>
    </Router>
);
}

export default App;