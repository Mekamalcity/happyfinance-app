import React from "react";
import { connect } from 'react-redux'
import '../../styles/signup/signup.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import Button from "../../component/Atoms/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

class LogIn extends React.Component {
    render() {
        return (
            <div className="container-login">
                <Link to={"/"}>
                    <div className="kembali-login">
                        <h3>
                            <FontAwesomeIcon className="kembali-icon" icon={faLeftLong}>Kembali</FontAwesomeIcon>Kembali
                        </h3>
                    </div>
                </Link>
                <div className="container-signup2">
                    <div className="menuju-login">
                        <p>
                            Senang Bertemu Denganmu Lagi
                        </p>
                        <h2>Wellcome Back</h2>
                        <hr />
                        <p>
                            Belum Memiliki Akun? <br />
                            Silahkan Daftar Di bawah
                        </p>
                        <Link to={"/signup"}>
                            <button>
                                Daftar
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="container-signup1">
                    <div>
                        <h2>
                            LogIn Account
                        </h2>
                    </div>
                    <div className="container-form">
                        <form>
                            <div>
                                <i><FontAwesomeIcon className="email-icon" icon={faEnvelope}></FontAwesomeIcon></i>
                                <input className="input-signup" placeholder="Email" id="email" type="text" onChange={this.handleChangeText} />
                            </div>
                            <div>
                                <i><FontAwesomeIcon className="lock-icon" icon={faLock}></FontAwesomeIcon></i>
                                <input className="input-signup" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} />
                            </div>
                            {/* <button onClick={this.handleDaftar}>
                        Daftar
                    </button> */}
                            <button>
                                Masuk
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

{/* <form>
                    <input/>
                    <input/>
                    <button>
                        LogIn
                    </button>
                </form> */}

const reduxState = (state) => ({
    popup: state.popup
})

export default connect(reduxState, null)(LogIn);