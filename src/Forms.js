import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





function Forms() {
    const [incident, setIncident] = React.useState('Thruway');

    const handleChange = (event) => {
        setIncident(event.target.value);
      };

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
                    onChange={handleChange}
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
                        <TextField id="outlined-basic" label="Latitude" variant="outlined" autoComplete='off'/>  
                    </span>
                    <span>
                        <TextField id="outlined-basic" label="Longitude" variant="outlined" autoComplete='off'/>  
                    </span>
                </div>


                </FormControl>

    </Box>
    )
}

export default Forms;
