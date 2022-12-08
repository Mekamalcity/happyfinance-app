import React from "react";
import { connect } from 'react-redux';
import NavigationUser from "../../component/NavigationUser/navigationUser";
import './article-page.css'

function ArticlePage() {
    return (
        <>
        <NavigationUser />
        <div className="article-container">
            
            <div class="card mb-0 mt-10 mx-5">
                <img src="https://cdn1-production-images-kly.akamaized.net/IOYDF3A_TkicAfLOipVo7TNucqE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/531105/original/pembiayaan-ekonomi-131220b.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title fw-bold fs-500">5 Tips Cara Mengatur Keuangan</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4 mx-4 py-5 px-3">
                <div class="col">
                    <div class="card">
                    <img src="https://cdn1-production-images-kly.akamaized.net/IOYDF3A_TkicAfLOipVo7TNucqE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/531105/original/pembiayaan-ekonomi-131220b.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://cdn1-production-images-kly.akamaized.net/IOYDF3A_TkicAfLOipVo7TNucqE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/531105/original/pembiayaan-ekonomi-131220b.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://cdn1-production-images-kly.akamaized.net/IOYDF3A_TkicAfLOipVo7TNucqE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/531105/original/pembiayaan-ekonomi-131220b.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://cdn1-production-images-kly.akamaized.net/IOYDF3A_TkicAfLOipVo7TNucqE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/531105/original/pembiayaan-ekonomi-131220b.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>

                <nav className="mx-auto mt-5" aria-label="Page navigation example">
                    <ul class="pagination justify-content-center mx-auto">
                        <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>            
        </div>
        
        </>
    )
}

const reduxState = (state) => ({
    user: state.user,
    isLogin: state.isLogin
})

export default connect(reduxState, null)(ArticlePage);