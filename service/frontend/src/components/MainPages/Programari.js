import React,{useState,useEffect,useRef} from 'react'
import Sidebar from "./Sidebar"
import { Grid,Button,Collapse,TextField } from '@material-ui/core'
import Calendar from '../comps/Calendar'
import mapboxgl from '!mapbox-gl';
import Footer from './Footer';
import {DatePicker,Alert} from '@mui/lab';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import moment from "moment";

mapboxgl.accessToken = 'pk.eyJ1IjoiYnVuZWEiLCJhIjoiY2t5MzQ4cnp4MHJxejJ2cXR3Y2J0N2tzMyJ9.gDGo6H621998FDCFfXYUoQ';

const Programari = () => {

    const [calendarValue,setCalendarValue] = useState(new Date());

    const [email,setEmail] = useState("");
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [problem,setProblem]  = useState("")
    const [appointmentsDate,setAppointmentsDate] = useState([])

    const [successMsg,setSuccessMsg] = useState('')
    const [errorMsg,setErrorMsg]=useState('')

    function GetAppoitments(){
        fetch("/api/get-appointments")
        .then((res)=>res.json())
        .then((data)=>{
            setAppointmentsDate(data.map((item)=>item.date))
        })
    }

    function disabledDate(current) {
      return (
        moment(current).day() === 0 ||  moment(current).day() === 6 || appointmentsDate.find(date => date === moment(current).format("YYYY-MM-DD"))
      );
    }

    function createAppointment(){
        const requestOptions = {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                name:name,
                email:email,
                phone_number:phone,
                scop:problem,
                date:calendarValue.toJSON().slice(0,10)
            })
        }
        fetch("/api/appointment",requestOptions)
        .then((res)=>{
            if(res.ok){
                setSuccessMsg("Programarea ta a fost procesata. Multumim !")
            }
            else{
                setErrorMsg("S-a ivit o eroare. Reincercati !")
            }
        })
        .then((data)=>console.log(data))
    }

    function emailChange(event){
        setEmail(event.target.value)
    }
    function nameChange(event){
        setName(event.target.value)
    }
    function phoneChange(event){
        setPhone(event.target.value)
    }
    function problemChange(event){
        setProblem(event.target.value)
    }

    useEffect(()=>{
        GetAppoitments()
    },[])

    return (
        <Grid spacing={1}>
            <Sidebar/>
            <div className="container" style={{marginTop:50}}>
                <Grid item xs = {12} align="center">
                    <Collapse in={errorMsg !="" || successMsg!=""}>
                        {successMsg !="" ?(<Alert severity="success">{successMsg}</Alert>):(<Alert severity="error">{errorMsg}</Alert>)}
                    </Collapse>

                </Grid>
                <div class="card">
                    <div class="card-body">
                        <h3>Seteaza o programare la service</h3>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input onChange={emailChange} placeholder="exemplu@yahoo.com" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                <div id="emailHelp" class="form-text">Adresa dumneavoastra de email va ramane confidentiala</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nume</label>
                                <input onChange={nameChange} placeHolder="Nume complet" type="name" class="form-control"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Telefon</label>
                                <input onChange={phoneChange} placeHolder="Numar de telefon" type="tel" class="form-control"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Problema</label>
                                <textarea onChange={problemChange} placeHolder="Explica-ne pe scurt problema ta" class="form-control"></textarea>
                            </div>
                            {/* calendar */}
                            <div style={{paddingTop:20,paddingBottom:20}}>
            
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        <DatePicker
                                            shouldDisableDate={disabledDate}
                                            label="Selecteaza o data pentru programare"
                                            value={calendarValue}
                                            onChange={(newValue) => {
                                                setCalendarValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                    <div id="emailHelp" class="form-text">Cand o data nu poate fi selectata sau apare cu culoarea rosu, inseamna ca nu este valabila</div>
                                </LocalizationProvider>
                            </div>
                            {/* calendar */}

                            <div style={{paddingBottom:20}}><i class="fas fa-exclamation-circle"></i> O sa va contactam dupa ce va programati online pentru confirmare si mai multe detalii</div>
                            <Button onClick={createAppointment} variant="outlined" style={{backgroundColor:"#A72920",color:"white"}}>Programeaza</Button>
                        </form>
                    </div>
                </div>
                <h4 style={{marginTop:60,padding:10,fontWeight:"bold"}}>Adresa service</h4>
                {/* MAP */}
                <a href="https://www.google.com/maps/place/Komura+San+Service/@47.044342,23.9186265,15z/data=!4m5!3m4!1s0x0:0xf1f3bed6ed3d20e1!8m2!3d47.044342!4d23.9186265">
                    <img className="map-image" style={{width:"100%"}} src="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/geojson(%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B23.9186265%2C47.044342%5D%7D)/23.9186265,47.044342,13/1000x600?access_token=pk.eyJ1IjoiYnVuZWEiLCJhIjoiY2t4cWhwMmVnMDg3ejJwbzB5MHF4NDZ5MyJ9.kPzqT-YbgEfWP5aLQlZRcA"></img>
                </a>

            </div>
            <Footer/>
        </Grid>
    )
}

export default Programari
