import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Asset/img/Logo.png'

function NavigationUser() {
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
                        Keuangan
                    </li>
                    <li>
                        Artikel
                    </li>
                    <li>
                        User
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

export default NavigationUser;