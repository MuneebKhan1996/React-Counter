import React, { Component } from 'react';

const Navbar = () => { 
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                Navbar 
                <span className="badge badge-secondary ml-2">
                    {this.props.totalCounter}
                </span>
            </a>
        </nav> 
    );
}

 
export default Navbar;