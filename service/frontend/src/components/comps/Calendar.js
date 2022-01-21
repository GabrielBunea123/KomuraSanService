import React,{useState,useEffect} from 'react'
import { TextField } from '@material-ui/core';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from '@mui/material/Stack';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import moment from "moment";

const Calendar = (props) => {

    const [value, setValue] = useState(new Date());
    const [appointmentsDate,setAppointmentsDate] = useState([])

    function GetAppoitments(){
        fetch("/api/get-appointments")
        .then((res)=>res.json())
        .then((data)=>{
            setAppointmentsDate(data.map((item)=>item.date))
            console.log(data)
        })
    }

    function disabledDate(current) {
      return (
        moment(current).day() === 0 ||  moment(current).day() === 6 || appointmentsDate.find(date => date === moment(current).format("YYYY-MM-DD"))
      );
    }

    useEffect(()=>{
        GetAppoitments()
    },[])
    return (
        <div style={{paddingTop:20,paddingBottom:20}}>
            
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DatePicker
                        shouldDisableDate={disabledDate}
                        label="Selecteaza o data pentru programare"
                        value={props.calendarValue}
                        onChange={(newValue) => {
                            setValue(newValue);
                            props.calendarValue=newValue;
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </Stack>
                <div id="emailHelp" class="form-text">Cand o data nu poate fi selectata sau apare cu culoarea rosu, inseamna ca nu este valabila</div>
            </LocalizationProvider>
        </div>
    )
}

export default Calendar
