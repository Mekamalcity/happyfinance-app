import React from "react";
import '../../styles/signup/signup.css';
import firebase from "../../config/firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../../component/Atoms/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

const auth = getAuth();

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        Loading: false
    }

    handleChangeText = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleDaftar = () => {
        // const { email, password } = this.state
        this.setState({
            Loading: true
        })
        setTimeout(() => {
            this.setState({
                Loading: false
            })
        }, 5000);
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         // ...
        //         console.log("succes :", userCredential)
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // ..
        //         console.log(errorCode, errorMessage)
        //     });
    }

    render() {
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
                            <Button onClick={this.handleDaftar} title="Daftar" loading={this.state.Loading} />
                        </form>
                    </div>
                </div>
                <div className="container-signup2">
                    <div className="menuju-login">
                        <p>
                            Senang Bertemu Denganmu
                        </p>
                        <h2>Wellcome</h2>
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
}

export default SignUp;