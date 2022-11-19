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


function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        {/*<Route exact path='/' exact element={<Home />} />*/}
        <Route path='/rights' element={<Rights/>} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/StateInformationPage' element={<StateInformationPage/>} />
    </Routes>
    </Router>
);
}

export default App;