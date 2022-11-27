import React from "react";
import { Link } from "react-router-dom"
import imgmain1 from '../../Asset/img/main1.png'

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

function Main2() {
    return (
        <div className="container-main2">
            <div>
                <div>
                    <h1>
                        Apa itu <font color="green">Happy</font>Finance?
                    </h1>
                    <hr />
                </div>
                <p>
                    Happy<font color="green">Finance</font> app merupakan aplikasi berbasis web yang digunakan<br />
                    untuk mengatur/mengelola keuangan serta daftar kebutuhan belanja agar<br />
                    membantu ibu rumah tangga dalam menyelesaikan pekerjaan rumahnya.
                </p>
            </div>
        </div>
    )
}

export { Main1, Main2 };