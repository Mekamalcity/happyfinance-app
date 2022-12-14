import React, { useState } from "react";
import '../../styles/signup/signup.css';
import Button from "../../component/Atoms/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signupUserAPI, userData } from "../../config/redux/action";
import { useNavigate } from "react-router-dom";

function SignUp({ Loading, user, signupAPI, isLogin, userData }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    async function handleDaftar() {
        let data = await signupAPI({ email, password }).catch(err => err);
        console.log(data)
        if (data !== null) {
            setEmail('')
            setPassword('')
            userData(data)
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        } else {
            console.log('login fail')
        }
    }
    return (
        <div className="container">
            <Link to={"/"}>
                <div className="kembali">
                    <h3>
                        <FontAwesomeIcon className="kembali-icon" icon={faLeftLong}>Kembali</FontAwesomeIcon>Kembali
                    </h3>
                </div>
            </Link>
            <div className="container-signup1">
                <div>
                    <h2>
                        Signup Account
                    </h2>
                </div>
                <div className="container-form">
                    <div className="form">
                        <div>
                            <i><FontAwesomeIcon className="email-icon" icon={faEnvelope}></FontAwesomeIcon></i>
                            <input className="input-signup" placeholder="Email" id="email" type="text" onChange={handleEmail} value={email} required />
                        </div>
                        <div>
                            <i><FontAwesomeIcon className="lock-icon" icon={faLock}></FontAwesomeIcon></i>
                            <input className="input-signup" placeholder="Password" id="password" type="password" onChange={handlePassword} value={password} required />
                        </div>
                        <Button onClick={handleDaftar} title="Daftar" loading={Loading} />
                    </div>
                </div>
            </div>
            <div className="container-signup2">
                <div className="menuju-login">
                    <p>
                        Senang Bertemu Denganmu
                    </p>
                    <h2>Welcome</h2>
                    <hr />
                    <p>
                        Sudah Memiliki Akun? <br />
                        Silahkan LogIn Di bawah
                    </p>
                    <Link to={"/login"}>
                        <button>
                            Masuk
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    Loading: state.Loading
})

const reduxDispatch = (dispatch) => ({
    signupAPI: (data) => dispatch(signupUserAPI(data)),
    userData: (data) => dispatch(userData(data))
})

export default connect(reduxState, reduxDispatch)(SignUp);