import React from "react";
import '../../styles/signup/signup.css'
import firebase from "../../config/firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../../component/Atoms/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

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
                <div className="container-signup1">
                    <div>
                        <h2>
                            Signup Account
                        </h2>
                    </div>
                    <div>
                        <form>
                            <i><FontAwesomeIcon className="email-icon" icon={faEnvelope}></FontAwesomeIcon></i>
                            <input className="input-signup" placeholder="8#xf0e0; Email" id="email" type="text" onChange={this.handleChangeText} />
                            <input className="input-signup" placeholder="Password" id="password" type="password" onChange={this.handleChangeText} />
                            {/* <button onClick={this.handleDaftar}>
                            Daftar
                        </button> */}
                            <Button onClick={this.handleDaftar} title="Signup" loading={this.state.Loading} />
                        </form>
                    </div>
                </div>
                <div className="container-signup2">

                </div>
            </div>
        )
    }
}

export default SignUp;