import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Asset/img/Logo.png'

function NavigationLandingPage() {
    return (
        <div className="navigation">
            <Link to="/">
                <div>
                    <img src={logo} alt="" />
                </div>
            </Link>
            <div>
                <ul className="navlandingpage" style={{ marginLeft: 600, marginTop: 10 }}>
                   
                    <li>
                        <a href="#fitur" style={{ textDecoration: 'none',color: '#f09930' }}>Fitur</a>
                    </li>
                    <li>
                        <a href="#tentang" style={{ textDecoration: 'none',color: '#f09930' }}> Tentang Kami </a>
                    </li>
                    <li>
                        <a href="#kontak" style={{ textDecoration: 'none',color: '#f09930' }}>Kontak </a>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/signup">
                    <button>
                        Daftar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NavigationLandingPage;