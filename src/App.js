import React, { useState, useEffect } from "react";
import './App.css';

import {Switch, Route} from 'react-router-dom';

import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/GlobalStyles/globalStyles';
import {lightTheme, darkTheme} from './components/Theme/Theme';
import Appbar from './components/Appbar/Appbar';

import Starter from './components/Starter/Starter';
import SearchForm from './components/SearchForm/searchForm';

function App() {

  const [theme, setTheme] = useState('light');
  const [btnText, setBtnText] = useState('Switch to Dark');
  const [mode, setMode] = useState("light");
  const themeToggler = () => {

    theme === 'light' ? setTheme('dark') : setTheme('light');
    btnText === 'Switch to Dark' ? setBtnText('Switch to Light') : setBtnText('Switch to Dark');
    if(btnText === 'Switch to Dark') {
      setMode("Dark");
    } else {
      setMode("Light");
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div className="App">
        <Appbar themeToggler={themeToggler} btnName={btnText} mode={mode}/>
        <Switch>
          <Route path="/" exact component={Starter} />
          <Route path="/searchForm" component={SearchForm} />
        </Switch>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
