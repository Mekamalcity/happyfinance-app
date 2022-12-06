import React from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";

function NotFound() {
    return (
        <div>
            <NavigationUser/>
            <h2>
                NotFound 404
            </h2>
            <div>
            </div>
        </div>
    )
}

const reduxState = (state) => ({
    user: state.user,
    isLogin: state.isLogin
})

export default connect(reduxState, null)(NotFound);