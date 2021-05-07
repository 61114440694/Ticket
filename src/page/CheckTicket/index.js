import React from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Grid,
    Paper,
    makeStyles,
    TextField,
    FormControl,
    InputLabel,
    Select,
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
            height: theme.spacing(70)
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
}));


export default function CheckTicket(props) {

    const classes = useStyles();
    const history = useHistory();
    
    const [data, setData] = React.useState({Type : '' , Phone:'' , Date:''} );

      const GoToData = () => {
          console.log(data);
        if(data === "" || data.Phone === "" || data.Phone.length < 10 || !data.Phone.trim() || data.Type === "" || !data.Type.trim() || data.Date === "" || !data.Date.trim()){
            alert("โปรดเลือกข้อมูลให้ครบก่อนกดค้นหา")
        }else{
            props.history.push({
                pathname: '/showdata/people/:data',
                  state : data // your data array of objects
              })
        }
    }

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
                                            <h1>เช็คตั๋ว</h1>
                                        </Grid>

                                        

                                        <Grid xs={12} className={classes.center}>
                                            <Grid>
                                                <h4>วันที่ซื้อ</h4>
                                                    <form className={classes.container} noValidate>
                                                        <TextField
                                                            id="date"
                                                            type="date"
                                                            onChange={e =>{
                                                                setData({...data , Date:e.target.value})
                                                            }}
                                                            className={classes.textField}
                                                            InputLabelProps={{
                                                            shrink: true,
                                                                }}
                                                        />
                                                    </form>
                                            </Grid>


                                            <Grid>
                                              <h4>ประเภทตั๋ว</h4>
                                              <Grid>
                                              <FormControl required className={classes.formControl}>
                                                  <InputLabel style={{paddingLeft:"10px",fontSize:"15px"}} htmlFor="age-native-required">ประเภท</InputLabel>
                                                  <Select className={classes.textField}
                                                    native
                                                    onChange={(e) => {setData({...data, Type: e.target.value})}}
                                                    inputProps={{
                                                      id: 'age-native-required',}}>
                                                    <option aria-label="None" value="" />
                                                    <option value={"A"}>A</option>
                                                    <option value={"B"}>B</option>
                                                    <option value={"C"}>C</option>
                                                    <option value={"D"}>D</option>
                                                  </Select>
                                                </FormControl>                   
                                              </Grid>
                                                
                                              </Grid>


                                            <Grid xs={12} className={classes.center}>
                                                <h4>เบอร์โทรศัพท์มือถือ</h4>
                                                <form className={classes.center} noValidate>
                                                    <TextField id="phone" label="เบอร์โทรศัพท์"  size="small" onChange={e => {setData({...data,Phone:e.target.value})}} inputProps={{ maxLength: 10 }} />
                                                </form>
                                            </Grid>

                                            

                                        </Grid>

                                        <Grid xs={12} className={classes.center} style={{paddingTop:"40px"}}>
                                        <Button  variant="contained" color="primary" onClick={GoToData}>
                                            ค้นหา
                                        </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </div>
                            </Grid>

                            
                            
                        <Grid item xs={12} sm={3} />
                    </Grid>
                    <Grid container style={{paddingBlockEnd:"40px",paddingTop:"20px"}}>
                <Grid xs={2} ms={2}></Grid>
                <Grid xs={8} ms={8}>
                    <Typography variant="subtitle1" className={classes.center} style={{paddingTop:"20px"}}>
                        *Tip : วิธีการใช้งาน <br />
                        กรอกข้อมูลการซื้อเพื่อยืนยันสถานะการซื้อ
                    </Typography>
               </Grid>
                <Grid xs={2} ms={2}></Grid>
                </Grid>

                    {/* End-Body */}

            </Grid>
        </div>
    )
}
