import React, { Fragment } from "react";
import NavigationLandingPage from "../../component/navigation/navigationLandingPage";
import { Main1, Main2, Main3 } from "../../component/LandingPage/mainlandingpage";
import { Main5, Main6 } from "../../component/LandingPage/mainlandingpage2";

import "../../styles/landingpage/landingpage.css"
import "../../styles/landingpage/landingpage2.css"

function LandingPage() {
    return (
        <Fragment>
            <NavigationLandingPage />
            <Main1 />
            <Main2 />
            <Main3 />
            <Main5 />
            <Main6 />
        </Fragment>
    )
}

export default LandingPage;