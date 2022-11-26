import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Asset/Logo.png'

function NavigationLandingPage() {
    return (
        <div className="navigation">
            <Link to="/">
                <div>
                    <img src={logo} alt="" />
                </div>
            </Link>
            <div>
                <ul className="navlandingpage">
                    <li>
                        Home
                    </li>
                    <li>
                        Fitur
                    </li>
                    <li>
                        Tentang Kami
                    </li>
                    <li>
                        Kontak
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