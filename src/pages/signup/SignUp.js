import React from "react";
import '../../styles/signup/signup.css';
import Button from "../../component/Atoms/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signupUserAPI } from "../../config/redux/action";

class SignUp extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleDaftar = () => {
        const { email, password } = this.state
        this.props.signupAPI({email, password})
        this.setState({
            email:"",
            password:""
        })
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
                        <div className="form">
                            <div>
                                <i><FontAwesomeIcon className="email-icon" icon={faEnvelope}></FontAwesomeIcon></i>
                                <input className="input-signup" placeholder="Email" id="email" type="text" onChange={this.handleChangeText} value={this.state.email} required/>
                            </div>
                            <div>
                                <i><FontAwesomeIcon className="lock-icon" icon={faLock}></FontAwesomeIcon></i>
                                <input className="input-signup" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} value={this.state.password} required/>
                            </div>
                            <Button onClick={this.handleDaftar} title="Daftar" loading={this.props.Loading} />
                        </div>
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

const reduxState = (state) => ({
    Loading: state.Loading
})

const reduxDispatch = (dispatch) => ({
    signupAPI: (data) => dispatch(signupUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(SignUp);