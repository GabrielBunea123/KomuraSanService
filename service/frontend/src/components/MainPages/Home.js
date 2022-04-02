import React, { useState, useEffect } from 'react'
import { Grid } from "@material-ui/core"
import Sidebar from "./Sidebar"
import Footer from './Footer'
import MemberCard from "../comps/MemberCard"

const Home = () => {

    return (
        <Grid spacing={1}>
            <Sidebar />
            <div className="home-bg-image-container">

            </div>
            <div className="home-bg-image-text">
                Komura San Service
            </div>
            <div className="container" style={{ marginTop: 50, paddingBottom: 50 }}>
                <h2 style={{ marginTop: 60, paddingBottom: 40, fontWeight: "bold" }}>Prezentare generala</h2>
                <div className="d-flex flex-wrap">
                    <div className="prezentare-generala-text-container">
                        <div>
                            <h4 style={{ paddingBottom: 5, fontWeight: "bold" }}>Cine suntem noi?</h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, lorem ut auctor facilisis, dui ex porta est, at auctor nisi turpis nec urna. Maecenas hendrerit in metus eu maximus. Sed et dapibus magna. Mauris erat libero, posuere a urna sed, vehicula sollicitudin urna. Quisque dolor est, ultricies nec imperdiet at, fermentum vel eros. Integer ac orci tristique, maximus erat id, auctor felis. Vestibulum imperdiet elementum elementum. Donec consequat vitae libero in dignissim.
                        </div>
                    </div>
                    <div className="prezentare-generala-img-container">
                        <img src="/static/images/home/service.jpg"></img>
                    </div>
                </div>
                <h2 style={{ marginTop: 60, paddingBottom: 20, fontWeight: "bold" }}>Serviciile noastre</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    <a style={{color:"black"}} href="/servicii-details/1">
                        <div className="roundedCard p-2">
                            <h1><i class="fas fa-wrench"></i></h1>
                            <p className="roundedCard-text">Mecanica</p>
                        </div>
                    </a>
                    <a style={{color:"black"}} href="/servicii-details/2">
                        <div className="roundedCard p-2">
                            <h1><i class="fas fa-chart-bar"></i></h1>
                            <p className="roundedCard-text">Diagnoza si test osciloscopic</p>
                        </div>
                    </a>
                    <a style={{color:"black"}} href="/servicii-details/3">
                        <div className="roundedCard p-2">
                            <h1><i class="fas fa-bolt"></i></h1>
                            <p className="roundedCard-text">Electrica</p>
                        </div>
                    </a>
                    <a style={{color:"black"}} href="/servicii-details/4">
                        <div className="roundedCard p-2">
                            {/* <h1><<i class="fas fa-dharmachakra"></i>></h1> */}
                            <img style={{ marginTop: 10, width: "50%", height: "50%" }} src="/static/images/servicii/braking car.png"></img>
                            <p className="roundedCard-text">Test frane</p>
                        </div>
                    </a>
                    <a style={{color:"black"}} href="/servicii-details/5">
                        <div className="roundedCard p-2">
                            <h1><i class="fas fa-compass"></i></h1>
                            <p className="roundedCard-text">Reglaj directie</p>
                        </div>
                    </a>
                    <a style={{color:"black"}} href="/servicii-details/6">
                        <div className="roundedCard p-2">
                            <img style={{ marginTop: 15, width: "50%", height: "50%" }} src="/static/images/servicii/injector.png"></img>
                            <p className="roundedCard-text">Testare injectoare</p>
                        </div>
                    </a>
                    <a style={{color:"black"}} href="/servicii-details/7">
                        <div className="roundedCard p-2">
                            <h1><i class="fab fa-instalod"></i></h1>
                            <p className="roundedCard-text">Igienizare instalatie auto</p>
                        </div>
                    </a>
                    <a style={{color:"black"}} href="/servicii-details/8">
                        <div className="roundedCard p-2">
                            <h1><i class="far fa-snowflake"></i></h1>
                            <p className="roundedCard-text">Verificare si incarcare clima</p>
                        </div>
                    </a>
                </div>
                <h2 style={{ marginTop: 60, paddingBottom: 20, fontWeight: "bold" }}>Echipa noastra</h2>
                <div className="d-flex justify-content-evenly flex-wrap">
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
            </div>
            <Footer />
        </Grid>
    )
}

export default Home
