import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Asset/img/Logo.png';
import { HashLink } from "react-router-hash-link";

function NavigationLandingPage() {
    return (
        <div className="navigation">
            <HashLink to="#home" smooth>
                <div>
                    <img src={logo} alt="" />
                </div>
            </HashLink>
            <div>
                <ul className="navlandingpage">
                    <HashLink to="#home" smooth>
                        <li>
                            Home
                        </li>
                    </HashLink>
                    <HashLink to="#fitur" smooth>
                        <li>
                            Fitur
                        </li>
                    </HashLink>
                    <HashLink to="#about" smooth>
                        <li>
                            Tentang Kami
                        </li>
                    </HashLink>
                    <HashLink to="#kontak" smooth>
                        <li>
                            Kontak
                        </li>
                    </HashLink>
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