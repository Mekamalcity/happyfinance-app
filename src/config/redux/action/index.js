import firebase from "../../firebase/index";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

export const signupUserAPI = (data) => (dispatch) => {
    dispatch({type: "CHANGE_LOADING", value: true})
    return (
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("succes :", userCredential)
                dispatch({type: "CHANGE_LOADING", value: false})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
                dispatch({type: "CHANGE_LOADING", value: false})
            })
    )
}