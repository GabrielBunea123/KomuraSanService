import React from 'react'
import Sidebar from "./Sidebar"
import { Grid } from '@material-ui/core'
import MagazinContainer from '../comps/MagazinContainer'
import Footer from './Footer'
const Magazin = () => {
    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:20}}> 
                <MagazinContainer/>
            </div>
            <Footer/>
        </Grid>
    )
}

export default Magazin
