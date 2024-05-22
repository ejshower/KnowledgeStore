import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Home from '../pages/Home';
import About from '../pages/About';
import Board from '../pages/Board';
import BoardDetail from '../pages/BoardDetail';

function Routing(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Board' element={<Board/>}/>
                <Route path='/Board/:id' element={<BoardDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing