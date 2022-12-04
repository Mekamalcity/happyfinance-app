import React from "react";
import { Link } from "react-router-dom"
import imgmain1 from '../../Asset/img/main1.png'
import { faChartColumn, faPersonCircleCheck, faListSquares, faDesktop, faBasketShopping, faNewspaper } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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

function Main3() {
    return (
        <div className="container-main3">
            <div className="all-item-main3">
                <div className="title-main3">
                    <h1>
                        Kenapa Memilih Happy Finance?
                    </h1>
                    <hr />
                </div>
                <div className="why-happyfinance">
                    <div className="why-item-2">
                        <FontAwesomeIcon className="fontAwesomeIcon" icon={faChartColumn}></FontAwesomeIcon>
                        <h3>
                            Mengatur Keuangan
                        </h3>
                        <p>
                            Dengan menggunakan HappyFinance App Anda dapat mngatur keuangan jadi lebih mudah dan tertata
                        </p>
                    </div>
                    <div className="why-item-1">
                        <FontAwesomeIcon className="fontAwesomeIcon" icon={faPersonCircleCheck}></FontAwesomeIcon>
                        <h3>
                            Mudah Digunakan
                        </h3>
                        <p>
                            HappyFinance App sangat mudah digunakan untuk keperluan mengatur keuangan
                        </p>
                    </div>
                </div>
                <div className="why-happyfinance">
                    <div className="why-item-1">
                        <FontAwesomeIcon className="fontAwesomeIcon" icon={faListSquares}></FontAwesomeIcon>
                        <h3>
                            Membuat Daftar Belanja
                        </h3>
                        <p>
                            Dengan menggunakan HappyFinance App Anda jadi dapat membuat daftar belanjaan agar lebih mudah mengatur keuangan
                        </p>
                    </div>
                    <div className="why-item-2">
                        <FontAwesomeIcon className="fontAwesomeIcon" icon={faDesktop}></FontAwesomeIcon>
                        <h3>
                            Dapat diakses kapanpun
                        </h3>
                        <p>
                            HappyFinance App sangat mudah diakses kapanpun baik di smartphone maupun desktop
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Main4() {
    return (
        <div className="container-main4">
            <div className="container-fitur">
                <h1>
                    Fitur <font color="green">Happy</font>Finance
                </h1>
                <hr />
                <div className="fitur-happyfinance">
                    <div className="fitur-item">
                        <FontAwesomeIcon className="fontAwesomeIcon-fitur" icon={faBasketShopping}></FontAwesomeIcon>
                        <h3>
                            Daftar Belanja
                        </h3>
                        <p>
                            Dengan menggunakan HappyFinance App Anda dapat mngatur keuangan jadi lebih mudah dan tertata
                        </p>
                    </div>
                    <div className="fitur-item">
                        <FontAwesomeIcon className="fontAwesomeIcon-fitur" icon={faChartColumn}></FontAwesomeIcon>
                        <h3>
                            Menajemen Keuangan
                        </h3>
                        <p>
                            Dengan menggunakan HappyFinance App Anda dapat mngatur keuangan jadi lebih mudah dan tertata
                        </p>
                    </div>
                    <div className="fitur-item">
                        <FontAwesomeIcon className="fontAwesomeIcon-fitur" icon={faNewspaper}></FontAwesomeIcon>
                        <h3>
                        Artikel
                        </h3>
                        <p>
                            Dengan menggunakan HappyFinance App Anda dapat mngatur keuangan jadi lebih mudah dan tertata
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Main1, Main2, Main3, Main4 };