import React from 'react';

import PropTypes from 'prop-types';


export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.link1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.link2}</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

// declaring types of recieved property;
//with 'isRequired' you cant leave the value undefined of the props
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    link1: PropTypes.string,
    link2: PropTypes.string
}

// setting the default property value 
Navbar.defaultProps = {
    title: 'Set Your Title',
    link1: 'Set your link',
    link2: 'Set your link'
}
