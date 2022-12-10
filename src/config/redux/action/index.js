import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, push, ref, set, onValue, remove } from "firebase/database";
import app, { database } from "../../firebase";
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
                    keuangan: {
                        pengeluaran: 0,
                        pemasukan: 0,
                        saldo: 0,
                    },
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
                    keuangan: {
                        pengeluaran: 0,
                        pemasukan: 0,
                        saldo: 0,
                    },
                    userId: userCredential.user.uid
                }
                // console.log("succes :", userCredential)
                dispatch({ type: "CHANGE_LOADING", value: false })
                dispatch({ type: "CHANGE_LOGIN", value: true })
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
        keuangan: data.keuangan
    });
    console.log(data)
}

export const getDataToAPI = (userID) => (dispatch) => {
    const urlManagement = ref(database, 'management/' + userID);
    return new Promise((resolve, reject) => {
        onValue(urlManagement, (snapshot) => {
            const data = []
            if (snapshot.val() === null) {
                return null
            } else {
                Object.keys(snapshot.val()).map(key => {
                    data.push({
                        id: key,
                        data: snapshot.val()[key]
                    })
                });
            }
            // eslint-disable-next-line array-callback-return
            dispatch({ type: 'SET_MANAGEMENT', value: data })
            resolve(snapshot.val())
        });
    })
}

export const getDataUser = (userID) => (dispatch) => {
    const urlManagement = ref(database, 'users/' + userID);
    return new Promise((resolve, reject) => {
        onValue(urlManagement, (snapshot) => {
            const data = snapshot.val()
            resolve(snapshot.val())
            dispatch({ type: 'CHANGE_USER', value: data })
        });
    })
}

export const updateDataAPI = ({ data, user, manageUpdate }) => (dispatch) => {
    // const urlManagement = ref(database, `management/${data.userId}/${data.manageID}`);
    console.log(manageUpdate)
    const pemasukan = Number(user.keuangan.pemasukan)
    const pengeluaran = Number(user.keuangan.pengeluaran)
    const saldo = Number(user.keuangan.saldo)
    const manageUpdateJum = Number(manageUpdate.jumlah)
    return new Promise((resolve, reject) => {
        set(ref(database, `management/${data.userId}/${data.manageID}`), {
            jumlah: data.jumlah,
            tanggal: data.tanggal,
            kategori: data.kategori,
            keterangan: data.keterangan
        })
        if (manageUpdate.kategori === "pemasukan") {
            if (data.kategori === "pemasukan") {
                return new Promise((resolve, reject) => {
                    set(ref(database, `users/${data.userId}/keuangan`), {
                        pemasukan: pemasukan - manageUpdateJum + data.jumlah,
                        pengeluaran: pengeluaran,
                        saldo: saldo - manageUpdateJum + data.jumlah
                    })
                        .then(() => {
                            resolve(true)
                        })
                        .catch((error) => {
                            reject(false)
                        });
                })
            } else if (data.kategori === "pengeluaran") {
                return new Promise((resolve, reject) => {
                    set(ref(database, `users/${data.userId}/keuangan`), {
                        pemasukan: pemasukan - manageUpdateJum,
                        pengeluaran: pengeluaran + data.jumlah,
                        saldo: saldo - manageUpdateJum - data.jumlah
                    })
                        .then(() => {
                            resolve(true)
                        })
                        .catch((error) => {
                            reject(false)
                        });
                })

                    .then(() => {
                        resolve(true)
                    })
                    .catch((error) => {
                        reject(false)
                    });
            }
        } else if (manageUpdate.kategori === "pengeluaran") {
            if (data.kategori === "pemasukan") {
                return new Promise((resolve, reject) => {
                    set(ref(database, `users/${data.userId}/keuangan`), {
                        pemasukan: pemasukan + data.jumlah,
                        pengeluaran: pengeluaran - manageUpdateJum,
                        saldo: saldo + manageUpdateJum + data.jumlah
                    })
                        .then(() => {
                            resolve(true)
                        })
                        .catch((error) => {
                            reject(false)
                        });
                })
            } else if (data.kategori === "pengeluaran") {
                return new Promise((resolve, reject) => {
                    set(ref(database, `users/${data.userId}/keuangan`), {
                        pemasukan: pemasukan,
                        pengeluaran: pengeluaran - manageUpdateJum + data.jumlah,
                        saldo: saldo + manageUpdateJum - data.jumlah
                    })
                        .then(() => {
                            resolve(true)
                        })
                        .catch((error) => {
                            reject(false)
                        });
                })

                    .then(() => {
                        resolve(true)
                    })
                    .catch((error) => {
                        reject(false)
                    });
            }
        }
    })
}


export const manipulateData = ({ data, user }) => (dispatch) => {
    console.log(data);
    const pemasukan = Number(user.keuangan.pemasukan)
    const pengeluaran = Number(user.keuangan.pengeluaran)
    const saldo = Number(user.keuangan.saldo)
    if (data.kategori === "pemasukan") {
        return new Promise((resolve, reject) => {
            set(ref(database, `users/${data.userId}/keuangan`), {
                pemasukan: pemasukan + data.jumlah,
                pengeluaran: pengeluaran,
                saldo: saldo + data.jumlah
            })
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(false)
                });
        })
    } else if (data.kategori === "pengeluaran") {
        return new Promise((resolve, reject) => {
            set(ref(database, `users/${data.userId}/keuangan`), {
                pemasukan: pemasukan,
                pengeluaran: pengeluaran + data.jumlah,
                saldo: saldo - data.jumlah
            })
                .then(() => {
                    resolve(true)
                })
                .catch((error) => {
                    reject(false)
                });
        })
    }
}
export const deleteDataApi = (data) => (dispatch) => {
    console.log(data)
    if (data.kategori === "pemasukan") {
        set(ref(database, `users/${data.userId}/keuangan`), {
            pemasukan: data.pemasukan - data.jumlah,
            pengeluaran: data.pengeluaran,
            saldo: data.saldo - data.jumlah
        })
    } else if (data.kategori === "pengeluaran") {
        set(ref(database, `users/${data.userId}/keuangan`), {
            pemasukan: data.pemasukan,
            pengeluaran: data.pengeluaran - data.jumlah,
            saldo: data.saldo + data.jumlah
        })
    }

    set(ref(database, `management/${data.userId}/${data.manageID}`), null);
}

export const resetDataManager = (data) => (dispatch) => {
    set(ref(database, `users/${data.userId}/keuangan`), {
        pemasukan: 0,
        pengeluaran: 0,
        saldo: 0
    })
    set(ref(database, `management/${data.userId}`), null)
}  