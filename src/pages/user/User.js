import React, { useEffect, Fragment } from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './user.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { getDataUser } from "../../config/redux/action";

function User({ user, getDataUser }) {
    useEffect(() => {
        const userManage = JSON.parse(localStorage.getItem('user'))
        getDataUser(userManage.uid)
    }, [getDataUser])
    console.log("user", user)
    const userData = localStorage.getItem('user')
    const userID = JSON.parse(userData)
    function LogOut() {
        localStorage.removeItem('user')
        window.location.reload(false);
    }
    const readManagement = (item) => {
        if (item != null) {
            return (
                <Fragment>
                    <div className="keuangan">
                        <div>
                            <p>
                                Saldo
                            </p>
                            <h3>
                                Rp <font color="green">{user.keuangan.saldo},-</font>
                            </h3>
                        </div>
                        <div>
                            <p>
                                Pemasukan
                            </p>
                            <h3>
                                Rp <font color="blue">{user.keuangan.pemasukan},-</font>
                            </h3>
                        </div>
                        <div>
                            <p>
                                Pengeluaran
                            </p>
                            <h3>
                                Rp <font color="red">{user.keuangan.pengeluaran},-</font>
                            </h3>
                        </div>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <h3>
                    Harap Tunggu Data Sedang di proses...
                </h3>
            )
        }
    }
    return (
        <div>
            <NavigationUser />
            <div className="user-container">
                <div className="user-data">
                    <h2>
                        Selamat Datang
                    </h2>
                    <h2>
                        {userID.email}
                    </h2>
                    {
                        readManagement(user)
                    }
                    <div>
                        <button onClick={LogOut}>
                            Keluar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    user: state.user,
    isLogin: state.isLogin
})
const reduxDispatch = (dispatch) => ({
    getDataUser: (data) => dispatch(getDataUser(data))
})

export default connect(reduxState, reduxDispatch)(User);