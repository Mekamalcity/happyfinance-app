import React from "react";
import { Link } from "react-router-dom"
import imgmain1 from '../../Asset/main1.png'

function Main1() {
    return (
        <div className="main1">
            <div className="container-main1">
                <div>
                    <h1>
                        Happy<font color="green">Finance</font>
                    </h1>
                    <p>
                        HappyFinance app merupakan solusi<br /> mengatur keuangan untuk<br /> membantu pekerjaan rumah Anda
                    </p>
                    <Link to="/login">
                        <button className="buttonLogin">
                            Masuk
                        </button>
                    </Link>
                </div>
                <div>
                    <img src={imgmain1} alt="" />
                </div>
            </div>

        </div>
    )
}

export { Main1 };