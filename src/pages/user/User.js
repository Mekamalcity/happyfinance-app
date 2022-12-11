import React from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './user.css';

function User({ user }) {
    return (
        <div>
            <NavigationUser />
            <div className="user-container">
                <div className="user-data">
                    <h2>
                        Selamat Datang
                    </h2>
                    <h2>
                        {user.email}
                    </h2>
                    <div>
                        <button>
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