import React from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './management-page.css'

function ManagementPage() {
    return (
        <div>
            <NavigationUser />
            <div className="user-container">
                <h2>
                    Management Page
                </h2>
                <div>
                </div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    user: state.user,
    isLogin: state.isLogin
})

export default connect(reduxState, null)(ManagementPage);