import { Card } from '@mui/material'
import React,{useEffect,useState} from 'react'
import CardServicii from './CardServicii'

const ServiciiContainer = () => {

    const [services,setServices] = useState([])

    function GetServices(){
        fetch('/api/get-services')
        .then((res)=>res.json())
        .then((data)=>setServices(data))
    }

    useEffect(()=>{
        GetServices()
    },[])

    return (
        <div>
            <div class="d-flex justify-content-center flex-wrap">
                {services.length>0?services.map((item)=>(
                    <CardServicii image={`/static/images/servicii/${item.name}.png`} name={item.name} description={item.description} id={item.id}/>
                )):null}
            </div>
        </div>
    )
}

export default ServiciiContainer
