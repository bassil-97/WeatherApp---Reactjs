import React from "react";
import {useHistory} from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';


function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return(
    <Fab aria-label="add" variant="extended" onClick= {handleClick}>
        <HomeIcon className="mr-2"/>
        Return to Home Page
    </Fab>
  );
}

export default HomeButton;