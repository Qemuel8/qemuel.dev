import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <div className='navbar'>
                <Link to="/">
                    <button className='nav-button'>
                        Home
                    </button>
                </Link>
                <Link to="/projects">
                    <button className='nav-button'>
                        Projects
                    </button>
                </Link>
            </div>

            </>

    

        );
    }
}
 
export default Navbar;
