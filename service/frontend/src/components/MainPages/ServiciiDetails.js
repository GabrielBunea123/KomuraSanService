import React,{useEffect,useState} from 'react'
import Sidebar from "./Sidebar"
import { Grid } from '@material-ui/core'
import Footer from './Footer'
import {useParams} from "react-router-dom"

const ServiciiDetails = () => {

    const service_id=useParams()
    const [service,setService] = useState([])
 
    function getService(){
        const requestOptions={
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                service_id:service_id.id,
            })
        }
        fetch("/api/get-specific-service",requestOptions)
        .then((res)=>res.json())
        .then((data)=>setService(data))
    }
    
    useEffect(()=>{
        getService()
    },[])

    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:50}}>
                <h3 style={{marginTop:60,marginBottom:30,padding:10,fontWeight:"bold"}}>Prezentare {service.name}</h3>
                <Grid item xs={12} align="center">
                    <video className="service-details-video" controls>
                        <source src="/static/videos/Untitled.mp4" type="video/mp4"/>
                    </video>
                </Grid>
                <h3 style={{marginTop:30,marginBottom:30,padding:10,fontWeight:"bold"}}>Despre {service.name}</h3>
                <div className="service-details-description">{service.description}</div>
            </div>
            <Footer/>
        </Grid>
    )
}

export default ServiciiDetails
