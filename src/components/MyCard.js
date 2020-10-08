import React, { useState, Fragment } from  "react";
import { Card, CardContent, Typography,Button,Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import { getMatchDetails } from "../api/Api";

const MyCard=({match})=>{


const [detail, setDetail] = useState({});

const [open,setopen] = useState(false);

    const handleClick = (id)=>{
         getMatchDetails(id).then(data=>{console.log("MATCH DATA",data)
         setDetail(data);
         handleOpen();
        })
        .catch(error=>console.log(error));
    };

    const getMatchCart=()=>{
        return (
            <Card style={{marginTop:20 }}>
                <CardContent>
                   <Grid container justify="center" alignItems="center" spacing="4">
                       <Grid item >
                             <Typography variant="h5">{match.['team-1']}</Typography>
                       </Grid>
                       <Grid item>
                          <img style={{width:85 }} src={require("../img/vs.png")} alt=""/>



                       </Grid>
                       <Grid item>
                            <Typography variant="h5">{match.['team-2']}</Typography>
                       </Grid>

                   </Grid>

                </CardContent>
                <cardActions>
                <Button onClick={()=>{
                    handleClick(match.unique_id);
                }} item variant="contained" color="primary">Show details </Button> &nbsp;
                <Button item variant="contained" color="secondary">Start Time {new Date(match.dateTimeGMT).toLocaleString()}</Button>
                </cardActions>
            </Card>
        );
    };
     
 const handleClose=() =>{
    setopen(false);
 };

const handleOpen=() =>{
     setopen(true);
 };
  const getDialoge=()=>(
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Match Details..."}</DialogTitle>
        <DialogContent>
           <DialogContentText id="alert-dialog-description">
           <Typography>{detail.stat}</Typography>
           <Typography>
               Match
               <span style={{fontStyle:"italic",fontWeight:"bold"}}> 
                   { detail.matchStarted ? "Started" : "Still not started"} {" "}
               </span>
               </Typography>


               <Typography>
               Score
               <span style={{fontStyle:"italic",fontWeight:"bold"}}> 
                 {detail.score}
               </span>
               </Typography>
           </DialogContentText>
        </DialogContent>

        <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                close
            </Button>
        </DialogActions>
      </Dialog>
  );

    return (
       <Fragment>
        {getMatchCart()}
        {getDialoge()}
       </Fragment>
    );

};

export default MyCard;
