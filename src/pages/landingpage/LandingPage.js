import React, { Fragment } from "react";
import NavigationLandingPage from "../../component/navigation/navigationLandingPage";
import {Main1,Main2, Main3, Main4} from "../../component/LandingPage/mainlandingpage";

import "../../styles/landingpage/landingpage.css"
import "../../styles/landingpage/landingpage2.css"

class LandingPage extends React.Component{
    render(){
        return(
            <Fragment>
                <NavigationLandingPage/>
                <Main1/>
                <Main2/>
                <Main3/>
                <Main4/>
            </Fragment>
        )
    }
}

export default LandingPage;