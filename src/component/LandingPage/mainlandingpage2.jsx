import React from 'react';
import me from '../../Asset/img/me.jpg';
import instagram from '../../Asset/img/instagram.png';
import mail from '../../Asset/img/mail.png';
import whatsapp from '../../Asset/img/whatsapp.png';
import { Fade } from 'react-awesome-reveal';


function Main5() {
    return (
        <div>
            <div className="container-main5" id="about">
                <div className="our-team">
                    <Fade direction="up">
                        <div>
                            <h1>
                                About <font color="green">Us</font>
                            </h1>
                            <hr />
                        </div>
                    </Fade>
                    <div>
                        <div className="item-ourteam">
                            <div className="img-me">
                                <img src={me} />
                            </div>
                            <h2>
                                Farigh Mukhlashin Akmalullah
                            </h2>
                            <p>
                                Saya adalah seorang peserta msib dicoding dari kampus merdeka<br /> dan juga mahasiswa STMIK El-Rahma Yogyakarta
                            </p>
                            <p>
                                Silahkan terhubung dengan saya di linkedin
                            </p>
                            <a href="https://www.linkedin.com/in/farigh-mukhlashin-akmalullah-201514221/">
                                <button>
                                    LinkedIn >
                                </button>
                            </a>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Main6() {
    return (
        <div id="kontak" className="kontak">
            <Fade direction="up">
                <h1>
                    Contact <font color="green">Us</font>
                </h1>
            </Fade>
            <hr />
            <div className='item-kontak'>
                <div>
                    <div className='logo-kontak'>
                        <img src={instagram} alt="logo-kontak" />
                    </div>
                    <p>@farighmakmal</p>
                </div>
                <div>
                    <div className='logo-kontak'>
                        <img src={mail} alt="logo-kontak" />
                    </div>
                    <p>farighmakmalullah@gmail.com</p>
                </div>
                <div>
                    <div className='logo-kontak'>
                        <img src={whatsapp} alt="logo-kontak" />
                    </div>
                    <p>+62-858-7584-6691</p>
                </div>
            </div>
        </div>
    )
}

function Main7() {
    return (
        <div>
            <div className="footer">
                copyright@project_capstone_C22-246
            </div>
        </div>
    )
}

export { Main5, Main6, Main7 };