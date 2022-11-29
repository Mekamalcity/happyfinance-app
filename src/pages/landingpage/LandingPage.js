import React, { Fragment } from "react";
import NavigationLandingPage from "../../component/navigation/navigationLandingPage";
import {Main1,Main2, Main3} from "../../component/LandingPage/mainlandingpage"

import "../../styles/landingpage/landingpage.css"

class LandingPage extends React.Component{
    render(){
        return(
            <Fragment>
                <NavigationLandingPage/>
                <Main1/>
                <Main2/>
                <Main3/>
            </Fragment>
        )
    }
}

export default LandingPage;