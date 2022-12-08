import React, {useEffect} from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './user.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

function User({ user }) {
    useEffect(()=>{
        const userData = localStorage.getItem('user')
    })
    const userData = localStorage.getItem('user')
    const userID = JSON.parse(userData)
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
                    <div>
                        <button onClick={()=>{localStorage.removeItem('user')}}>
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

export default connect(reduxState, null)(User);