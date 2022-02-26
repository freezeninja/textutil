import React from 'react';

import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export default function Navbar(props) {
    const {Link1, Link2, Link3, Link4, Link5} = props.NavData
    let navArr = [
        {
            id: 1,
            title: Link1,
            linkTo: '/'
        },
        {
            id: 2,
            title: Link3,
            linkTo: 'QrCode'
        },
        {
            id: 3,
            title: Link4,
            linkTo: 'barcode'
        },
        {
            id: 4,
            title: Link5,
            linkTo: 'color_generate'
        },
        {
            id: 5,
            title: Link2,
            linkTo: 'about'
        }
    ];
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">{props.NavData.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            navArr.map((e)=>{
                                return <li className="nav-item" key={e.id}>
                                <NavLink className="nav-link" aria-current="page" to={e.linkTo}>{e.title}</NavLink>
                            </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

// declaring types of recieved property;
//with 'isRequired' you cant leave the value undefined of the props
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    Link1: PropTypes.string,
    Link2: PropTypes.string,
    Link3: PropTypes.string,
    Link4: PropTypes.string
}

// setting the default property value 
Navbar.defaultProps = {
    title: 'Set Your Title',
    Link1: 'Set your link',
    Link2: 'Set your link',
    Link3: 'Set your link',
    Link4: 'Set your link'
}
