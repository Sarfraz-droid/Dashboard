import React,{useState,useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./global.scss"

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Grid from "./components/Grid"
import axios from "axios"

function App() {
  const [Data, setData] = useState([]);

  useEffect( async () => {
    const info = await axios.get('https://reqres.in/api/users?page=2')
    setData(info.data.data)
  },[]);

  useEffect(() => {
    console.log(Data)
  },[Data, setData]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard Data={Data} />
          </Route>
          <Route exact path="/grid">
            <Grid Data={Data} setData={setData}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
