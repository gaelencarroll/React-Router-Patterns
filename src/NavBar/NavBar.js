import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

function NavBar({dogs}){
    const navLinks = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
    ))
    return(
        <nav>
            <NavLink to='/dogs' exact>Home</NavLink>
            {navLinks}
        </nav>
    )
}

export default NavBar;