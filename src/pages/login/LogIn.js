import React from "react";
import {connect} from 'react-redux'

class LogIn extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    LogIn Page {this.props.popup}
                </h2>
                <div>

                <form>
                    <input/>
                    <input/>
                    <button>
                        LogIn
                    </button>
                </form>
                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popup: state.popup
})

export default connect(reduxState, null)(LogIn);