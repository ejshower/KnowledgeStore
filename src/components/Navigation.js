import React from 'react';
//import {useState, useEffect} from 'react';
//import {Link} from './react-router-dom';
import './Navigation.css';

function Navigation(){
    return (
        <ul>
            <li><a class="active" href="/Home">Home</a></li>
            <li><a href="/Board">Board</a></li>
            <li><a href="/About">About</a></li>
        </ul>

    )
}

export default Navigation