import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link,Redirect} from "react-router-dom";
import Home from './Home'
import Contact from './Contact';
import Dotari from './Dotari';
import Magazin from './Magazin';
import Preturi from './Preturi';
import Programari from './Programari'
import Reviews from './Reviews';
import Servicii from './Servicii';
import ProductDetails from './ProductDetails';
import ServiciiDetails from "./ServiciiDetails"
import Rezerva from './Rezerva';
import RezervareSucces from './RezervareSucces';
import Sidebar from './Sidebar'

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="contact" element={<Contact/>}></Route>
                <Route path="dotari" element={<Dotari/>}></Route>
                <Route path="magazin" element={<Magazin/>}></Route>
                <Route path="preturi" element={<Preturi/>}></Route>
                <Route path="programari" element={<Programari/>}></Route>
                <Route path="reviews" element={<Reviews/>}></Route>
                <Route path="servicii" element={<Servicii/>}></Route>
                <Route path="product-details/:id" element={<ProductDetails/>}></Route>
                <Route path="rezerva/:id" element={<Rezerva/>}></Route>
                <Route path="rezervare-succes" element={<RezervareSucces/>}></Route>
                <Route path="servicii-details/:id" element={<ServiciiDetails/>}></Route>

            </Routes>
        </Router>
    )
}

export default Pages
