import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
const auth = getAuth(app);

export const signupUserAPI = (data) => (dispatch) => {
    dispatch({ type: "CHANGE_LOADING", value: true })
    return (
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("succes :", userCredential)
                dispatch({ type: "CHANGE_LOADING", value: false })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
                dispatch({ type: "CHANGE_LOADING", value: false })
            })
    )
}

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((result, reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true })
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const datauser = {
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    emailVerified: userCredential.user.emailVerified
                }
                console.log("succes :", userCredential)
                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_LOGIN", value: true })
                dispatch({ type: "CHANGE_USER", value: user })
                result(true)
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_LOGIN", value: false })
                reject(false)
            })
    })

}


