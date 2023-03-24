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

    
    const [incident, setIncident] = useState('ONE');

    const setIncidentHandler = (incidentValue) => {
        setIncident(incidentValue.target.value);
        console.log("setIncidentHandler = ", incidentValue.target.value);
    }

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const latitudeHandler = (event) => {
        console.log("REACHED - Latitude", event.target.value);
        const newLatitude = event.target.value;
        setLatitude(newLatitude);
    };

    const longitudeHandler = (event) => {
        setLongitude(event.target.value);
    };

    const onSubmitHandler = () => {
        alert('Submit clicked');
    }


    return(
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">INCIDENT</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
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
                <div style={{display: 'inline-flex'}}>
                    <span>
                        <TextField id="outlined-basic" label="Latitude" variant="outlined" autoComplete='off'
                        value={latitude}
                        onChange={latitudeHandler} />  
                    </span>
                    <span>
                        <TextField id="outlined-basic" label="Longitude" variant="outlined" autoComplete='off'
                        value={longitude}
                        onChange={longitudeHandler} />  
                    </span>
                </div>

                <Button variant="contained" size="medium" onClick = {onSubmitHandler} style={{margin: '20px'}}
                   disabled={latitude === undefined} >
                    Submit
                </Button>

                </FormControl>

    </Box>
    )
}

export default Forms;
