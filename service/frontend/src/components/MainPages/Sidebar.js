import React from 'react'
import Home from './Home'

const Sidebar = () => {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg" style={{backgroundColor:"#383e42"}}>
            <div class="container-fluid container">
                <a class="navbar-brand" style={{paddingRight:20}} href="/"><img style={{height:"auto",width:40}} src="/static/images/home/IconService.png"></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" style={{backgroundColor:"#383e42",color:"white"}} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><a class="navbar-brand" style={{paddingRight:20}} href="/"><img style={{height:"auto",width:40}} src="/static/images/home/IconService.png"></img></a></h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                            <li class="nav-item side-item">
                                <a class="nav-link navbar-brand active" aria-current="page" href="/magazin">Magazin</a>
                            </li>
                            <li class="nav-item side-item">
                                <a class="nav-link navbar-brand active" aria-current="page" href="/programari">Programari</a>
                            </li>
                            <li class="nav-item side-item">
                                <a class="nav-link navbar-brand active" aria-current="page" href="/servicii">Servicii</a>
                            </li>
                            {/* <li class="nav-item side-item">
                                <a class="nav-link navbar-brand active" aria-current="page" href="/dotari">Dotari</a>
                            </li> */}
                            <li class="nav-item side-item">
                                <a class="nav-link navbar-brand active" aria-current="page" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item side-item">
                                <a class="nav-link navbar-brand active" aria-current="page" href="/reviews">Reviews</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav justify-content-end flex-grow-1" style={{marginRight:20}}>
                            <li class="nav-item">
                                <a class="nav-link active btn btn-outline-dark btn-floating m-1" aria-current="page" href="#"><i style={{paddingTop:2}} class="fab fa-facebook"></i><div className="ico-names">Facebook</div></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active btn btn-outline-dark btn-floating m-1" aria-current="page" href="#"><i style={{paddingTop:2}} class="fab fa-instagram"></i><div className="ico-names">Instagram</div></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active btn btn-outline-dark btn-floating m-1" aria-current="page" href="#"><i style={{paddingTop:2}} class="fas fa-map-marked-alt"></i><div className="ico-names">Maps</div></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar
