import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';




function Forms(props) {

    
    const [nameOfEvent, setNameOfEvent] = useState('');
    const selectNameOfEventHandler = (event) => {
        console.log(event.target.value);
        setNameOfEvent(event.target.value);
    }

    const [incident, setIncident] = useState('');
    const setIncidentHandler = (event) => {
        console.log(event.target.value);
        setIncident(event.target.value);
    }

    const [latitude, setLatitude] = useState({latitudeValue: '', top: ''});
    const setLatitudeHandler = (event) => {
        console.log(event.target.value);
        setLatitude({...latitude, latitudeValue: event.target.value});
    }
    const setTopHandler = (event) => {
        console.log(event.target.value);
        setLatitude({...latitude, top: event.target.value});
    }

    const [longitude, setLongitude] = useState({longitudeValue: '', width: ''});
    const setLongitudeHandler = (event) => {
        console.log(event.target.value);
        setLongitude({...longitude, longitudeValue: event.target.value});
    }
    const setWidthHandler = (event) => {
        console.log(event.target.value);
        setLongitude({...longitude, width: event.target.value});
    }

    const [start, setStart] = useState({startHour: '', startMin: ''});
    const setStartHourHandler = (event) => {
        console.log(event.target.value);
        setStart({...start, startHour: event.target.value});
    }
    const setStartMinHandler = (event) => {
        console.log(event.target.value);
        setStart({...start, startMin: event.target.value});
    }

    const [end, setEnd] = useState({endHour: '', endMin: ''});
    const setEndHourHandler = (event) => {
        console.log(event.target.value);
        setEnd({...end, endHour: event.target.value});
    }
    const setEndMinHandler = (event) => {
        console.log(event.target.value);
        setEnd({...end, endMin: event.target.value});
    }

    const [timeInterval, setTimeInterval] = useState('');
    const setTimeIntervalHandler = (event) => {
        console.log(event.target.value);
        setTimeInterval(event.target.value);
    }

    



    return(
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}>
                <FormControl fullWidth>
                    <FormControl fullWidth style={{marginTop: '25px'}}>
                    <InputLabel id="name-of-event-label">Event</InputLabel>
                    <Select
                        labelId="name-of-event-select-label"
                        id="name-of-event-select"
                        value={nameOfEvent}
                        label="Event"
                        onChange={selectNameOfEventHandler}
                        >
                        <MenuItem value={'ONE'}>Vehicle Movements</MenuItem>
                        <MenuItem value={'TWO'}>Driving events</MenuItem>
                    </Select>
                    </FormControl>

                    <div style={{margin:'20px'}}>
                        <Divider />
                    </div>

                    <FormControl fullWidth>
                    <InputLabel id="incident-label">Incident</InputLabel>
                    <Select
                        labelId="incident-select-label"
                        id="incident-simple-select"
                        value={incident}
                        label="INCIDENT"
                        onChange={setIncidentHandler}
                        >
                        <MenuItem value={'ONE'}>INCIDENT #ONE</MenuItem>
                        <MenuItem value={'TWO'}>INCIDENT #TWO</MenuItem>
                        <MenuItem value={'THREE'}>INCIDENT #THREE</MenuItem>
                    </Select>
                    
                
                    <div style={{margin:'10px'}}>
                        <Divider />
                    </div>
                    {/* LATITUDE */}
                    <FormControl fullWidth>
                    <div style={{display: 'inline-flex'}}>
                        <span>
                            <TextField id="outlined-basic" label="Latitude" variant="outlined" autoComplete='off'
                            value={latitude.latitudeValue}
                            onChange={setLatitudeHandler} />  
                        </span>
                        <span>
                            <TextField id="outlined-basic" label="Height" variant="outlined" autoComplete='off'
                            value={latitude.top}
                            onChange={setTopHandler} />  
                        </span>
                    </div>
                    </FormControl>


                    {/* LONGITUDE */}
                    <FormControl fullWidth>
                    <div style={{display: 'inline-flex', marginTop: '10px'}}>
                        <span>
                            <TextField id="outlined-basic" label="Longitude" variant="outlined" autoComplete='off'
                            value={longitude.longitudeValue}
                            onChange={setLongitudeHandler} />  
                        </span>
                        <span>
                            <TextField id="outlined-basic" label="Width" variant="outlined" autoComplete='off'
                            value={longitude.width}
                            onChange={setWidthHandler} />  
                        </span>
                    </div>
                    </FormControl>

                    <div style={{margin:'10px'}}>
                        <Divider />
                    </div>

                    {/* START */}
                    <FormControl fullWidth>
                    <div style={{display: 'inline-flex'}}>
                        <span>
                            <TextField id="outlined-basic" label="Start Hour" variant="outlined" autoComplete='off'
                            value={start.startHour}
                            onChange={setStartHourHandler} />  
                        </span>
                        <span>
                            <TextField id="outlined-basic" label="Start Min" variant="outlined" autoComplete='off'
                            value={start.startMin}
                            onChange={setStartMinHandler} />  
                        </span>
                    </div>
                    </FormControl>

                    {/* END */}
                    <FormControl fullWidth>
                    <div style={{display: 'inline-flex', marginTop: '10px'}}>
                        <span>
                            <TextField id="outlined-basic" label="End Hour" variant="outlined" autoComplete='off'
                            value={end.endHour}
                            onChange={setEndHourHandler} />  
                        </span>
                        <span>
                            <TextField id="outlined-basic" label="End Min" variant="outlined" autoComplete='off'
                            value={end.endMin}
                            onChange={setEndMinHandler} />  
                        </span>
                    </div>
                    </FormControl>

                    <div style={{margin:'10px'}}>
                        <Divider />
                    </div>
                    <FormControl fullWidth>
                    <div style={{display: 'inline-flex', marginTop: '10px'}}>
                        <span>
                            <TextField id="outlined-basic" label="Time Interval" variant="outlined" autoComplete='off'
                            value={timeInterval}
                            onChange={setTimeIntervalHandler} />  
                        </span>
                    </div>
                    </FormControl>



                    </FormControl>
                

                    <Button variant="contained" size="medium" onClick = {selectNameOfEventHandler} style={{margin: '20px'}}
                    disabled={latitude === undefined} >
                        Submit
                    </Button>

                </FormControl>

    </Box>
    )
}

export default Forms;
/**
 * Latitude 
 * Longitude
 * up
 * right
 * //calculate the 4 coordinates
 * start hour & min
 * end hour & min
 * time interval
 * 
 * 
 */