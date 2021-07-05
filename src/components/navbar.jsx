import React from 'react';

const Navbar = ({totalCounter}) => { 
    console.log("navbar rendered")
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="www.google.com">
                Navbar 
                <span className="badge badge-secondary ml-2">
                    {totalCounter}
                </span>
            </a>
        </nav> 
    );
}

 
export default Navbar;