import React from "react";

function Main5() {
    return (
        <div>
            <div className="container-main5">
                <div className="our-team">
                    <h1 class="">
                        Our <font color="green">Team</font>
                    </h1>

                        <div class="ourteam-container">
                            <div class="row text-center">
                                <div class="col-xl-6 col-sm-6 mb-5">
                                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://divedigital.id/wp-content/uploads/2021/10/1-min.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                        <h5 class="mb-0">Farid Akmal</h5><span class="small text-uppercase text-muted">---</span>
                                        <ul class="social mb-0 list-inline mt-3">
                                            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            
                                <div class="col-xl-6 col-sm-6 mb-5">
                                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://media-exp1.licdn.com/dms/image/C5603AQHiwq8c8xpTag/profile-displayphoto-shrink_800_800/0/1629779189281?e=1675900800&v=beta&t=uj6eMtpJcfABOxuFg17seRLrlvKn2dg3P7IBrMyuve8" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                                        <h5 class="mb-0">Saka Dzun Nun Al Mishri</h5><span class="small text-uppercase text-muted">Universitas Negeri Semarang</span>
                                        <ul class="social mb-0 list-inline mt-3">
                                            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
                                            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
                                            <li class="list-inline-item"><a href="https://linkedin.com/sakadzun" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                </div>
            </div>
        </div>

    )
}

function Main6() {
    return (
        <footer class="bd-footer py-4 py-md-5 mt-5 bg-light">
            <div class="footer-container mx-5 py-4 py-md-5 px-4 px-md-3">
                <div class="row">
                <div class="col-lg-3 mb-3">
                    <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="#" aria-label="HappyFinance">
                    <img src='' width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" alt="" />
                    </a>
                    <ul class="list-unstyled small text-muted">
                    <li class="mb-2">Designed and built by the Team Capstone Project C22-246</li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                    <h5>Navigation</h5>
                    <ul class="list-unstyled">
                    <li class="mb-2"><a href="#">Home</a></li>
                    <li class="mb-2"><a href="#">About us</a></li>
                    <li class="mb-2"><a href="#">Profile</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Team</h5>
                    <ul class="list-unstyled">
                    <li class="mb-2"><a href="#">Akmal</a></li>
                    <li class="mb-2"><a href="https://www.linkedin.com/in/sakadzun">Saka</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2 mb-3">
                    <h5>Address</h5>
                    <ul class="list-unstyled small text-muted">
                    <li class="mb-2">Jl. Batik Kumeli No.50, Sukaluyu,Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40123</li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>  
    )
}

// function Main7() {
//     return (
//         <div>
//             <div className="footer">
//                 copyright@project_capstone_C22-246
//             </div>
//         </div>
//     )
// }

export { Main5, Main6 };