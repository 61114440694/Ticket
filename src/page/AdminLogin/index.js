import React from 'react';
import { 
    Grid ,
    AppBar,
    Toolbar,
    Button, 
    makeStyles,
    Paper,
    TextField, 
    
} from '@material-ui/core'
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(75),
            height: theme.spacing(50)
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
      
      button: {
          height:40,
      },

      table: {
        minWidth: 650,
        
      },

}));


export default function AdminLogin(){
    const history = useHistory();
    const classes = useStyles();
    const [login , setLogin] = React.useState({userid:'' , password:''})

    const Login = () => {
        if(login.userid === '' || login.password === ''){
            alert("ข้อมูลไม่ถูกต้องโปรดลองใหม่อีกครั้ง")
        }
        if(login.userid === 'admin' || login.password === '159753'){
            history.push('/showdata/admin')
        }
        else{
            alert("ข้อมูลไม่ถูกต้องโปรดลองใหม่อีกครั้ง")
        }
    }

    return(
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


                <Grid >
                <div>
                        <Grid container style={{paddingTop:"30px"}}>
                <Grid item xs={12} sm={4} />


                       <Grid item xs={12}sm={4}>
                       <div className={classes.root}>
                           <Paper style={{padding:"10px",paddingTop:"20px"}} elevation={24}>
                              <Grid className={classes.center}>
                              <Grid xs={12} className={classes.header} >
                                            <h1>เข้าสู่ระบบ</h1>
                                        </Grid>

                              <Grid style={{paddingTop:"20px"}}>
                              <TextField label="ชื่อผู้ใช้งาน" onChange={e => {setLogin({...login , userid:e.target.value})}} />
                              </Grid>

                              <Grid style={{paddingTop:"30px"}}>
                              <TextField label="รหัสผ่าน" type="password" onChange={e => {setLogin({...login , password:e.target.value})}} />
                              </Grid>

                              <Grid style={{paddingTop:"40px"}}>
                                  <Button variant="contained" color="primary" onClick={Login}>ตกลง</Button>
                              </Grid>

                              </Grid>
                           </Paper>
                           {/* <Todo /> */}
                       </div>
                       </Grid> 
                   <Grid item xs={12} sm={4} />
               </Grid>
                    </div>
                </Grid>
                
            </Grid>
        </div>
    )}