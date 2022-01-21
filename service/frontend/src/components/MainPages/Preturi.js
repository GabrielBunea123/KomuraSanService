import React from 'react'
import Sidebar from "./Sidebar"
import {Grid} from '@material-ui/core'
import Footer from './Footer'

const Preturi = () => {
    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:50}}>
                
            </div>
            <Footer/>
        </Grid>
    )
}

export default Preturi