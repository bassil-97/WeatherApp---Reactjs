import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Button from '@material-ui/core/Button';

const toggler = (props) => {

    let mode = props.mode;
    let btnText = "";

    (mode === 'Dark') ? btnText = 'Dark Mode on' : btnText = 'Light Mode on'; 

    return(
        <div>
            {mode === 'Dark' ? <Button onClick={props.clicked} color="default" variant="contained" startIcon={<Brightness3Icon style={{fill: "black"}} />}>{btnText}</Button> :
            <Button onClick={props.clicked} color="default" variant="contained" startIcon={<WbSunnyIcon style={{fill: "yellow"}}/>}>{btnText}</Button>}
        </div>
        /*<FormGroup>
            <FormControlLabel
                control={<Switch onChange={props.clicked} name="checkedA" />}
                label={props.text}
            />
        </FormGroup> */
    );
}

export default toggler;