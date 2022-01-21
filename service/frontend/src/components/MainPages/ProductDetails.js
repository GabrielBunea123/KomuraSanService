import React,{StrictMode, useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import { Grid,Button } from "@material-ui/core"
import RecommendedProducts from '../comps/RecommendedProducts'
import Sidebar from "./Sidebar"
import Footer from './Footer'

const ProductDetails = (props) => {

    const product_id = useParams()//it returns a dictionary

    const [product,setProduct] = useState([])
    const [showDescription,setShowDescription] = useState(true)
    const [store,setStore] = useState([])
    const [filteredStore,setFilteredStore] = useState([])

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    
    

    function getStore(){
        fetch("/api/get-store")
        .then((res)=>res.json())
        .then((data)=>{
            setStore(data)
            setFilteredStore(data)
        })
    }

    function getProduct(){
        fetch("/api/get-product"+'?id='+product_id.id)
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    }


    useEffect(()=>{
        getProduct()
        getStore()
    },[])

    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:20}}> 
                <h2 style={{marginTop:60,paddingBottom:40,fontWeight:"bold"}}>{product.name}</h2>

                <div className="d-flex flex-wrap justify-content-center flex-sm-row flex-column">
                    <div className="product-details-image-container p-2">
                        <img src={`/static/images/magazin/img${product_id.id}.jpg`}></img>
                    </div>
                    <div className="p-2">
                        <div class="card card-product-details">
                            <div class="card-body">
                                <h5 style={{paddingTop:10}} class="card-title">{product.price} RON</h5>
                                <div style={{paddingBottom:30,paddingTop:20}} class="card-text product-details-card-text">Produsele nu se pot cumpara online. Acestea se pot doar rezerva in service. Dupa ce ati rezervat o piesa veti fi contactat de noi pentru mai multe informatii.</div>
                                <Button href={`/rezerva/${product_id.id}`} style={{backgroundColor:"#A72920",color:"white"}}>Rezerva in service</Button>
                            </div>
                        </div>
                        <div style={{paddingTop:30,paddingLeft:10}}>
                            {product.stock>0?
                            <small style={{color:"green"}}>Produsul este pe stoc <i class="fas fa-check"></i></small>
                            :<small style={{color:"red"}}>Produsul nu este pe stoc <i class="fas fa-times-circle"></i></small>
                            }
                        </div>
                    </div>
                </div>
                <div class="d-grid gap-2" style={{paddingTop:50}}>
                    <hr></hr>
                    <button style={{outline:"none",boxShadow:"none"}} onClick={()=>setShowDescription(!showDescription)} class="btn" type="button">
                        <div className="d-flex">
                            <div className="p-2 flex-grow-1">
                                <h3 style={{textAlign:"left"}}>Descriere</h3>
                            </div>
                            <div className="p-2">
                                <h3 style={{textAlign:"right"}}>{showDescription==false?<i style={{textAlign:"right"}} class="fas fa-chevron-right"></i>:<i class="fas fa-chevron-down"></i>}</h3>
                            </div>
                        </div>
                    </button>
                    <div style={{display:showDescription==true?"block":"none"}} className="description-container">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis massa eu libero fermentum sagittis eget eu ligula. Praesent rhoncus ligula et metus elementum molestie. Nunc scelerisque, tellus id sodales hendrerit, elit dui rutrum ex, eget sagittis mauris nisl ac metus. Pellentesque scelerisque sit amet tortor non finibus. Donec fermentum turpis ac turpis ullamcorper, vitae congue lorem bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum cursus magna dictum malesuada dapibus. In magna lorem, vulputate sed posuere eget, lobortis fringilla turpis. Aenean egestas hendrerit dapibus. Vivamus pellentesque, sem ut lobortis commodo, quam nibh ultrices lacus, id sollicitudin mi metus sed elit. Vivamus congue volutpat nisl at porttitor.

                        Etiam pulvinar fermentum egestas. Vivamus gravida pellentesque enim eget maximus. Duis nec elit pellentesque, bibendum libero id, sodales ligula. Suspendisse erat nulla, varius sed aliquet at, vestibulum faucibus quam. Ut volutpat est eget scelerisque rutrum. Aenean ullamcorper enim vitae vulputate luctus. Cras orci ipsum, dapibus eu vehicula id, fermentum at lorem. Praesent tempus, massa at interdum ultricies, urna libero dapibus lectus, sed dignissim nunc metus eget ipsum. Quisque sapien urna, viverra non justo non, interdum ultrices odio. Sed mattis fermentum sem, in auctor tellus aliquet at. Nam tincidunt ipsum vel nunc feugiat commodo. Mauris suscipit pellentesque urna a rutrum. Nulla tempor sollicitudin tellus nec gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                        Sed ullamcorper erat vitae cursus tristique. Donec molestie mollis nulla, nec feugiat justo placerat ut. Vestibulum nec blandit orci. Proin consectetur felis vitae nibh interdum hendrerit. Aenean eu est leo. Pellentesque molestie tincidunt pulvinar. Nam condimentum in sem tristique congue. Nullam sit amet velit ut ex rutrum gravida. Quisque vel lacinia metus, sit amet pharetra nibh.
                    </div>
                    <hr></hr>
                </div>
                <h3 style={{marginTop:60,paddingBottom:40,fontWeight:"bold"}}>Alte produse recomandate</h3>
                <div class="d-flex justify-content-evenly flex-wrap">
                    {filteredStore.length>0? filteredStore.slice(0,4).map((item)=>(
                        <RecommendedProducts id={item.id} image={`/static/images/magazin/img${item.id}.jpg`} name={item.name} description={item.description}/>
                    )):null}
                </div>
            </div>
            <Footer/>
        </Grid>
    )
}

export default ProductDetails
