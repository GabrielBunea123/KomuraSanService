import React,{useEffect,useRef,useState} from 'react'
import Sidebar from "./Sidebar"
import { Grid,Button } from '@material-ui/core'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import mapboxgl from '!mapbox-gl';
import Footer from './Footer'

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVuZWEiLCJhIjoiY2t5MzQ4cnp4MHJxejJ2cXR3Y2J0N2tzMyJ9.gDGo6H621998FDCFfXYUoQ';

const Contact = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lat, setLat] = useState(47.04422827800338);
    const [lng, setLng] = useState(23.918839538031786);
    const [zoom, setZoom] = useState(14);

    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handleMessageChange(event){
        setMessage(event.target.value)
    }

    function sendEmail(){
        const requestOptions={
            method:"POST",
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify({

                email:email,
                message:message
            })
        }
        fetch("/api/send-contact-email",requestOptions)
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    }

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.current.on('load', () => {
            // Add an image to use as a custom marker
            map.current.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                (error, image) => {
                    if (error) throw error;
                    map.current.addImage('custom-marker', image);
                    // Add a GeoJSON source with 2 points
                    map.current.addSource('points', {
                        'type': 'geojson',
                            'data': {
                            'type': 'FeatureCollection',
                            'features': [
                                {
                                // feature for Mapbox DC
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [
                                        23.918839538031786,47.04422827800338
                                    ]
                                },
                                'properties': {
                                    'title': 'Komura San Service'
                                }
                                },
                            ]
                        }
                    });
                    
                    // Add a symbol layer
                    map.current.addLayer({
                        'id': 'points',
                        'type': 'symbol',
                        'source': 'points',
                        'layout': {
                        'icon-image': 'custom-marker',
                        // get the title name from the source's "title" property
                        'text-field': ['get', 'title'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, 1.25],
                        'text-anchor': 'top'
                        }
                    });
                }
            );
            });
    });

    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:50}}>
                <div className="d-flex flex-column flex-lg-row justify-content-lg-between panel">
                    <div className="d-flex mr-auto p-2">
                        <a href="tel:0735 237 123" style={{textDecoration:'none'}}>
                            <div className="contact-container d-flex justify-content-evenly">
                                <h1 className="p-2"><i class="fas fa-mobile-alt"></i></h1>
                                <h3 className="p-2" style={{paddingTop:0}}>
                                    Telefon
                                    <br></br>
                                    <h6>0712345678</h6>
                                </h3>
                                
                            </div>
                        </a>
                    </div>
                    <div className="d-flex mr-auto p-2">
                        <a style={{textDecoration:'none'}}>
                            <div className="contact-container d-flex justify-content-evenly">
                                <h1 className="p-2"><i class="fas fa-at"></i></h1>
                                <h3 className="p-2" style={{paddingTop:0}}>
                                    Email
                                    <br></br>
                                    <h6>email@yahoo.com</h6>
                                </h3>
                            </div>
                        </a>
                    </div>
                    <div className="d-flex mr-auto p-2">
                        <a style={{textDecoration:'none'}}>
                            <div className="contact-container d-flex justify-content-evenly">
                                <h1 className="p-2"><i class="far fa-map"></i></h1>
                                <h3 className="p-2" style={{paddingTop:0}}>
                                    Adresa
                                    <br></br>
                                    <h6>Strada x numar 12</h6>
                                </h3>
                            </div>
                        </a>
                    </div>
                </div>
                <h4 style={{marginTop:60,padding:10,fontWeight:"bold"}}>Deschideti harta pentru mai multe indicatii</h4>
                <a href="https://www.google.com/maps/place/%C8%98oseaua+Dejului,+Gherla/@47.04422827800338, 23.918839538031786,521m/data=!3m1!1e3!4m5!3m4!1s0x4749bdda9a36a4b1:0x791f0ce3d9537eeb!8m2!3d47.0417691!4d23.9151133">
                    <div ref={mapContainer} className="map-container" />
                </a>

                <h4 style={{marginTop:60,padding:10,fontWeight:"bold"}}>Trimite email direct de pe site</h4>
                <form style={{padding:10}}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Adresa de email</label>
                        <input onChange={handleEmailChange} placeholder="exemplu@yahoo.com" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">Adresa dumneavoastra de email va ramane confidentiala</div>
                    </div>
                    <div class="mb-3">
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Mesaj</label>
                            <textarea onChange={handleMessageChange} placeholder="Cum te putem ajuta?" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <Button onClick={sendEmail} variant="outlined" style={{backgroundColor:"#A72920",color:"white"}}>Trimite</Button>
                </form>

            </div>
            <Footer/>
        </Grid>
    )
}

export default Contact
