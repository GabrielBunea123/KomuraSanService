import React,{useEffect,useState} from 'react'
import {Grid} from "@material-ui/core"
import CardMagazin from './CardMagazin'
const MagazinContainer = () => {

    const [store,setStore] = useState([])

    function getStore(){
        fetch("/api/get-store")
        .then((res)=>res.json())
        .then((data)=>setStore(data))
    }
    useEffect(()=>{
        getStore()
    },[])
    return (
        <div class="d-flex justify-content-evenly flex-wrap">
            {store.length>0?store.map((item)=>(
                <CardMagazin id={item.id} name={item.name} description={item.description} rating={item.star_rating} image={item.id<=8?`/static/images/magazin/img${item.id}.jpg`:"/static/images/img5.jpg"}/>
            )):null}
            
        </div>
    )
}

export default MagazinContainer
