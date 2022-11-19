import React from 'react';
import './App.css';
import Navbar from './components/index.js';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import Home from './pages';
import Rights from './pages/rights';
import Chat from './pages/chat';



function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        {/*<Route exact path='/' exact element={<Home />} />*/}
        <Route path='/rights' element={<Rights/>} />
        <Route path='/chat' element={<Chat/>} />
    </Routes>
    </Router>
);
}

export default App;