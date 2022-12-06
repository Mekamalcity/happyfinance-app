import React, { Fragment } from "react";
import NavigationLandingPage from "../../component/navigation/navigationLandingPage";
// import NavigationUser from "../../component/NavigationUser/navigationUser";
import { Main1, Main2, Main3, Main4 } from "../../component/LandingPage/mainlandingpage";
import { Main5, Main6, Main7 } from "../../component/LandingPage/mainlandingpage2";

import "../../styles/landingpage/landingpage.css"
import "../../styles/landingpage/landingpage2.css"

function LandingPage() {
    return (
        <Fragment>
            <NavigationLandingPage />
            {/* <NavigationUser /> */}
            <Main1 />
            <Main2 />
            <Main3 />
            <Main4 />
            <Main5 />
            <Main6 />
            <Main7 />
        </Fragment>
    )
}

export default LandingPage;