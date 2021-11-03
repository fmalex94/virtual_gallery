import React from 'react'
import { Link } from 'react-router-dom'
 
import icono from '../assets/613220_icon.jpg'

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <Link to={'/'} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={icono} className="bi me-2" width="40" height="35" alt="Icono" />
                    <span className="fs-4">Galería Virtual</span>
                </Link>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-secondary">Inicio</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">Noticias</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <Link to={'/login'} className="btn btn-outline-primary me-2">Login</Link>
                    
                    {/* <button onClick={} type="button" ></button> */}
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </header>

            

        </div >
    );
}

export default Header;