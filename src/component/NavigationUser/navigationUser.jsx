import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Asset/img/Logo.png';
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <Link style={{ textDecoration: 'none', marginLeft: 700, marginTop: 10 }} to="/app">
                        <li>
                            Keuangan
                        </li>
                    </Link>
                    <Link style={{ textDecoration: 'none', marginTop: 10 }} to="/article">
                        <li>
                            Artikel
                        </li>
                    </Link>
                </ul>
            </div>
            <div>
                <Link to="/">
                    <button>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        Profil
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NavigationUser;