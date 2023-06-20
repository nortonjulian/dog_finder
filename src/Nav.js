import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ dogs }) => {
    return (
        <nav>
            <ul>
                {dogs.map((dog, index) => (
                    <li key={index}>
                        <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav
