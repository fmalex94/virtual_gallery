import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next';
 
import icono from '../assets/613220_icon.jpg'

const Header = () => {

    const {t, i18n} = useTranslation('header');

    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <Link to={'/'} className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={icono} className="bi me-2" width="40" height="35" alt="Icono" />
                    <span className="fs-4">{t("banner")}</span>
                </Link>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-secondary">{t("boton_inicio")}</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">{t("boton_noticias")}</a></li>
                </ul>

                <div>
                    <button type="button" className="btn btn-secundary" onClick={() => i18n.changeLanguage('es')}>ES</button>
                    <button type="button" className="btn btn-secundary" onClick={() => i18n.changeLanguage('en')}>EN</button>
                </div>

                <div className="col-md-3 text-end">
                    <Link to={'/login'} className="btn btn-outline-primary me-2">{t("boton_login")}</Link>
                    
                    {/* <button onClick={} type="button" ></button> */}
                    <button type="button" className="btn btn-primary">{t("boton_sign")}</button>
                </div>
            </header>
        </div >
    );
}

export default Header;