import React from 'react'
import {Grid} from "@material-ui/core"

const Footer = () => {
    return (
        <div className="footer-container">
            <div class="spacer">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-evenly">
                        <div className="mr-auto p-2 align-content-center">
                            <h1 className="footer-title">Komura San Service</h1>
                        </div>
                        <div className="p-2 d-flex flex-wrap justify-content-center">
                            <div className="p-2">
                                <ul className="navbar-nav" style={{paddingTop:25}}>
                                    <li className="footer-nav-item"><a className="footer-nav-item" href="/">Home</a></li>
                                    <li className="footer-nav-item"><a className="footer-nav-item" href="/magazin">Magazin</a></li>
                                    <li className="footer-nav-item"><a className="footer-nav-item" href="/programari">Programari</a></li>
                                </ul>
                            </div>
                            <div className="p-2">
                                <ul className="navbar-nav" style={{paddingTop:25}}>
                                    <li className="footer-nav-item"><a className="footer-nav-item" href="/servicii">Servicii</a></li>
                                    <li className="footer-nav-item"><a className="footer-nav-item" href="/contact">Contact</a></li>
                                    <li className="footer-nav-item"><a className="footer-nav-item" href="/reviews">Reviews</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-2">
                            <div style={{paddingTop:25}} class="d-flex justify-content-center">
                                <a class="btn btn-outline-dark btn-floating m-1" href="#" role="button">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn btn-outline-dark btn-floating m-1" href="#" role="button">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="btn btn-outline-dark btn-floating m-1" href="#" role="button">
                                    <i class="fas fa-map-marked-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Grid style={{paddingTop:20}} item xs={12} align="center">
                        
                    </Grid>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
