import React from "react";
import '../../styles/signup/signup.css'
import firebase from "../../config/firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

class SignUp extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleDaftar = () => {
        console.log("data befor send :", this.state.email, this.state.password)
        const {email, password} = this.state
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log("succes :", userCredential)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
            });
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

                    </div>
                    <form>
                        <input placeholder="Email" id="email" type="text" onChange={this.handleChangeText} />
                        <input placeholder="Password" id="password" type="password" onChange={this.handleChangeText} />
                        <button onClick={this.handleDaftar}>
                            Daftar
                        </button>
                    </form>
                </div>
                <div className="container-signup2">

                </div>
            </div>
        )
    }
}

export default SignUp;