import React from 'react';
import './App.css';
import Navbar from './components/index.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import Home from './pages';
import Rights from './pages/rights';
import Chat from './pages/chat';
import CTPage from './pages/ct';
import MAPage from './pages/ma';
import NYPage from './pages/ny';
import HomePage from './pages/home';
import YourRightsPage from './pages/your-rights';
import StateInformationPage from './pages/StateInformationPage';
import './styles.scss';


function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        {/*<Route exact path='/' exact element={<Home />} />*/}
        <Route path='/rights' element={<Rights/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/StateInformationPage' element={<StateInformationPage/>} />
        <Route path='/ny' element={<NYPage/>} />
        <Route path='/ma' element={<MAPage/>} />
        <Route path='/ct' element={<CTPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/your-rights' element={<YourRightsPage/>} />
    </Routes>
    </Router>
);
}

export default App;