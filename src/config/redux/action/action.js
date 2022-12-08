import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";
import app, { database } from "../../firebase/firebase";
const auth = getAuth(app);

export const signupUserAPI = (data) => (dispatch) => {
    return new Promise((result, reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true })
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const datauser = {
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    emailVerified: userCredential.user.emailVerified,
                    refreshToken: userCredential.user.refreshToken,
                    pengeluaran: 0,
                    pemasukan: 0,
                    saldo: 0,
                    userId: userCredential.user.uid
                }
                console.log("succes :", userCredential)
                dispatch({ type: "CHANGE_LOADING", value: false })
                result(datauser)
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
                alert(errorMessage)
                dispatch({ type: "CHANGE_LOADING", value: false })
                reject(false)
            })
    })
}

export const loginUserAPI = (data) => (dispatch) => {
    return new Promise((result, reject) => {
        dispatch({ type: "CHANGE_LOADING", value: true })
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const datauser = {
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    emailVerified: userCredential.user.emailVerified,
                    refreshToken: userCredential.user.refreshToken,
                    pengeluaran: 0,
                    pemasukan: 0,
                    saldo: 0,
                    userId: userCredential.user.uid
                }
                // console.log("succes :", userCredential)
                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_LOGIN", value: true })
                dispatch({ type: "CHANGE_USER", value: datauser })
                result(datauser)
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
                alert(errorMessage)
                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_LOGIN", value: false })
                reject(false)
            })
    })
}

export const addDataToAPI = (data) => (dispatch) => {
    push(ref(database, 'management/' + data.userId), {
        jumlah: data.jumlah,
        tanggal: data.tanggal,
        kategori: data.kategori,
        keterangan: data.keterangan
    });
}
export const userData = (data) => (dispatch) => {
    set(ref(database, 'users/' + data.userId), {
        email: data.email,
        userId: data.uid,
        emailVerified: data.emailVerified,
        refreshToken: data.refreshToken,
        pengeluaran: 0,
        pemasukan: 0,
        saldo: 0,
    });
    console.log(data)
}


