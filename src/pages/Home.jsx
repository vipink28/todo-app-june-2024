import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';

function Home(props) {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-lg-6 justify-content-center align-items-center bg-primary h-100 d-flex flex-column'>

                </div>
                <div className='col-lg-6 justify-content-center align-items-center h-100 d-flex flex-column'>

                    <div className='card w-50'>
                        <div className='card-header d-flex rounded-0'>
                            <Link to="/login" className='py-3 px-2 w-50 text-decoration-none'>Login</Link>
                            <Link to="/register" className='py-3 px-2 w-50 text-decoration-none'>Register</Link>
                        </div>

                        <div className='card-body'>
                            <Outlet />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;