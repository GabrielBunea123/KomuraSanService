import React,{useEffect} from 'react'
import Sidebar from "./Sidebar"
import { Grid } from '@material-ui/core'
import Footer from './Footer'
import ServiciiContainer from '../comps/ServiciiContainer'
const Servicii = () => {


    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:50}}>
                <h3 style={{marginTop:60,padding:10,fontWeight:"bold"}}>Servicii Komura SAN Service</h3>
                <ServiciiContainer/>
            </div>
            <Footer/>
        </Grid>
    )
}

export default Servicii