import React from "react";
import { connect } from 'react-redux'

class User extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    User Page {this.props.user.email}
                </h2>
                <div>
                    <button>
                        Keluar
                    </button>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    user: state.user,
    isLogin: state.isLogin
})

export default connect(reduxState, null)(User);