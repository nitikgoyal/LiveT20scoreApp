import React,{ useEffect, useState, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyCard from './components/MyCard';
import {getMatches} from'./api/Api';
import { Typography, Grid } from "@material-ui/core";

function App() {


  const [matches,setMatches]=useState([]);

  useEffect(()=>{
    getMatches()
     .then((data)=>
     {setMatches( data.matches)
      console.log(data.matches);
    })
     .catch(error => alert("Couldn't load data"));
  }, []);

  return (
    <div className="App">
    
     <Navbar />

    <Typography variant="h4" style={{marginTop:"35"}}>welcome to live match</Typography>
 
       <Grid container>
         <Grid sm="2"></Grid>

         <Grid sm="8">
           {matches.map((match)=>(
            <Fragment key={match.unique_id}>
              {
                (match.type==="Twenty20"?(
                  <MyCard key={match.unique_id} match={match} />
                ):("")
                )}
            </Fragment>
           ))}
         </Grid>
       </Grid>
     
    </div>
  );
}

export default App;
