import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import '../../styles/signup/signup.css'
import Button from "../../component/Atoms/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { loginUserAPI } from "../../config/redux/action";
import { useNavigate } from "react-router-dom";


function LogIn({ Loading, user, loginAPI, isLogin, userData}) {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [log, setLog] = useState(1)

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    async function HandleMasuk() {
        let data = await loginAPI({ email, password }).catch(err => err);
        console.log(data)
        if (data !== false) {
            setEmail('')
            setPassword('')
            localStorage.setItem('user', JSON.stringify(data))
            console.log("uid", data.uid)
            
            navigate("/")
            window.location.reload(false);
        } else {
            console.log('login fail')
        }
    }
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
                    <h2>Welcome Back</h2>
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
                    <div className="form">
                        <div>
                            <i><FontAwesomeIcon className="email-icon" icon={faEnvelope}></FontAwesomeIcon></i>
                            <input className="input-signup" placeholder="Email" id="email" type="text" onChange={handleEmail} />
                        </div>
                        <div>
                            <i><FontAwesomeIcon className="lock-icon" icon={faLock}></FontAwesomeIcon></i>
                            <input className="input-signup" placeholder="Password" id="password" type="password" onChange={handlePassword} />
                        </div>
                        <Button onClick={HandleMasuk} title="Masuk" loading={Loading} />
                    </div>
                </div>
            </div>
        </div>
    )
}


const reduxState = (state) => ({
    Loading: state.Loading,
    user: state.user,
    isLogin: state.isLogin,
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(LogIn);