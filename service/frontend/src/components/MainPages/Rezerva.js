import React,{useState,useEffect} from 'react';
import {Grid,Button} from "@material-ui/core"
import Sidebar from './Sidebar';
import Footer  from './Footer'
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
const Rezerva = () => {

    const product_id = useParams()
    const navigate = useNavigate()

    const [product,setProduct] = useState([])

    const [showDescription,setShowDescription]=useState(false)

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")

    function getProduct(){
        fetch("/api/get-product"+'?id='+product_id.id)
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data)
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:name,
                email:email,
                phone:phone,
                product_name:product.name,
                description:product.description,
                price:product.price
            })
        }
        fetch("/api/reserve-product",requestOptions)
        .then((res)=>{
            if(res.ok){
                navigate("/rezervare-succes", { replace: true });
            }
            else{
                navigate("/")
            }
        })
        .then((data)=>null)
    }


    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handlePhoneChange(event){
        setPhone(event.target.value)
    }

    useEffect(()=>{
        getProduct()
    },[])


    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:50}}>
                <h2 style={{marginTop:60,paddingBottom:40,fontWeight:"bold"}}>{product.name}</h2>
                <div style={{paddingBottom:50}} class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <img style={{width:"100%",height:100}} src={`/static/images/magazin/img${product_id.id}.jpg`} alt="..."></img>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        x1 buc
                    </div>
                </div>
                <div class="d-grid gap-2" style={{paddingTop:10}}>
                    <hr></hr>
                    <button style={{outline:"none",boxShadow:"none"}} onClick={()=>setShowDescription(!showDescription)} class="btn" type="button">
                        <div className="d-flex">
                            <div className="p-2 flex-grow-1">
                                <h3 style={{textAlign:"left"}}>Descriere produs</h3>
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
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label class="form-label">Nume complet</label>
                        <input required onChange={handleNameChange} type="name" class="form-control"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input required onChange={handleEmailChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">Adresa dumneavoastra de email va ramane strict confidentiala</div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Numar de telefon</label>
                        <input required onChange={handlePhoneChange} type="tel" class="form-control"></input>
                    </div>

                    <Button type="submit" style={{backgroundColor:"#A72920",color:"white"}}>Rezerva</Button>
                </form>
            </div>
            <Footer/>
        </Grid>
    )
};

export default Rezerva;
