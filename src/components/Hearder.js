import React from 'react';
import {FaGamepad} from 'react-icons/fa';

const Header = () => {
    return(
        <div className="mb-5 p-3 bg-primary">

        <h1 className="text-center text-white">
        <FaGamepad className="icons"/>
        <span> </span>
        <b>Tic Tac Toe</b>
        <span> </span>
        <FaGamepad className="icons"/>
        </h1>
        </div>
    );
}

export default Header;