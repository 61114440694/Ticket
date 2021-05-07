import React from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Grid,
    Paper,
    makeStyles,
    Typography,

} from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(100),
            height: theme.spacing(45)
        }
    },

    header:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    center:{
        padding: theme.spacing(0),
        textAlign: 'center',
    },

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    ButtonMain: {
        textAlign: 'center',
        width:250,
        height:180,
        fontSize:"25px",

    }
}));


export default function Home() {

    const classes = useStyles();
    const history = useHistory();

    return (
        <div>
            <Grid> 
                
                {/* Head-Tabbar */}
                <Grid>
                    <AppBar position="static">
                        <Toolbar>
                            <Button edge="start" color="inherit" onClick={()=> history.push("/home")}><b>หน้าหลัก</b></Button>
                            <Button color="inherit" onClick={()=> history.push("/buy-ticket")}><b>จองตั๋ว</b></Button>
                            <Button color="inherit" onClick={()=> history.push("/showdata/people")}><b>เช็คตั๋ว</b></Button>
                            <Button color="inherit" onClick={()=> history.push("/AdminLogin")}><b>ผู้ดูเเลระบบ</b></Button>
                        </Toolbar>
                    </AppBar>
                </Grid>

                {/* End-Tabbar */}



                {/* Head-Body */}
             
                    <Grid container style={{paddingTop:"30px"}}>
                        <Grid item xs={12} sm={3} />
                           

                            <Grid item xs={12}sm={6}>
                            <div className={classes.root}>
                                <Paper style={{padding:"10px"}} elevation={24}>
                                    <Grid container spacing={4}>
                                        
                                        <Grid xs={12} className={classes.header} >
                                            <h1>หน้าหลัก</h1>
                                        </Grid>

                                        <Grid xs={6} sm={6} className={classes.center}>
                                            <Button variant="contained" color="primary" className={classes.ButtonMain} onClick={()=> {history.push("/buy-ticket")}}><b>จองตั๋ว</b></Button>
                                        </Grid>

                                        <Grid xs={6} sm={6} className={classes.center}>
                                            <Button variant="contained" color="primary" className={classes.ButtonMain} onClick={()=> {history.push("/check-ticket")}}><b>เช็คตั๋ว</b></Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>

                            
                            </Grid>
                            <Grid item xs={12} sm={3} />
                    </Grid>
                    <Grid container >
                     <Grid xs={2} ms={2}></Grid>
                     <Grid xs={8} ms={8}>
                         <Typography variant="subtitle1" className={classes.center} style={{paddingTop:"20px"}}>
                             *Tip : วิธีการใช้งาน <br />
                             เลือกกดปุ่มเพื่อทำรายการที่ต้องการ
                             
                         </Typography>
                    </Grid>
                     <Grid xs={2} ms={2}></Grid>
                     
                    </Grid>


                    {/* End-Body */}
                    </Grid>
        </div>
    )
}
