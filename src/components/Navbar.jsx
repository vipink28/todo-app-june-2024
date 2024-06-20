import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/task-list">Task List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create-task">Create Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Action</Link></li>
                                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;