import React from 'react'
import {
    Grid , 
    Toolbar , 
    Button , 
    AppBar , 
    makeStyles ,
    Paper ,
    FormControl , 
    Select ,
    Table ,
    TableContainer, 
    TableHead , 
    TableCell , 
    TableRow ,
    TableBody,
} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import firebase from '../../firebase'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(150),
            height: theme.spacing(40)
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
        textAlign:"center"

      },
      
      button: {
          height:40,
      },

      table: {
        minWidth: 650,
        
      },

}));







export default function AdminData(){
    const history = useHistory();
    const classes = useStyles();
    const [type , setType] = React.useState({todotype:""});
    const [objdata , setObjData] = React.useState({})

    const TypeValue = (e) => {
        const mo = e.target.value ; 
        console.log(mo);
            const todoRef = firebase.database().ref(mo);
        todoRef.on('value' , (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for(let id in todos){
               todoList.push(todos[id]); 
            }
            setObjData(todoList)
        })
            setType({...type , todotype:mo})    
    }


    return(
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
                    {type.todotype === "" ? (
                        
               <Grid container style={{paddingTop:"30px"}}>
                        <Grid item xs={12} sm={2} />
                            <Grid item xs={12}sm={8}>
                                <Grid style={{textAlign:"center" , paddingBlockEnd:"20px"}}>
                                    <FormControl variant="outlined" required className={classes.formControl}>
                                            <Select className={classes.textField}
                                            native
                                            name="type"
                                            onChange={TypeValue}
                                           inputProps={{
                                             id: 'age-native-required',}}>
                                           <option aria-label="None" value="" />
                                           <option value="A">A</option>
                                           <option value="B">B</option>
                                           <option value="C">C</option>
                                           <option value="D">D</option>
                                        </Select>
                                    </FormControl>

                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={2} />
                    </Grid>
                    ) :type.todotype === "A"?(
                    <Grid container style={{paddingTop:"30px"}}>
                    <Grid item xs={12} sm={1} />
                        <Grid item xs={12}sm={10}>
                            <Grid style={{textAlign:"center" , paddingBlockEnd:"20px"}} >
                                <FormControl variant="outlined"  required className={classes.formControl}>
                                        <Select className={classes.textField}
                                        native
                                        name="type"
                                        onChange={TypeValue}
                                       inputProps={{
                                         id: 'age-native-required',}}>
                                       <option aria-label="None" value="" />
                                       <option value="A">A</option>
                                       <option value="B">B</option>
                                       <option value="C">C</option>
                                       <option value="D">D</option>
                                    </Select> 
                                </FormControl>

                                
                            </Grid>
                        <div className={classes.root}>
                            <Grid style={{textAlign:"center"}}>                            
                            <TableContainer component={Paper} elevation={24}>
                            <Table style={{textAlign:"center"}}>
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">บัตรประชาชน</TableCell>
                                    <TableCell align="center">ชื่อ-สกุล</TableCell>
                                    <TableCell align="center">อีเมล</TableCell>
                                    <TableCell align="center">เบอร์โทร.</TableCell>
                                    <TableCell align="center">วันที่ซื้อ</TableCell>
                                    <TableCell align="center">จำนวนที่ซื้อ</TableCell>
                                    
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {objdata.map((data , index) => {
                                    return(
                                        <TableRow>
                                        <TableCell align="center">{data.Passport}</TableCell>
                                        <TableCell align="center">{data.FullName}</TableCell>
                                        <TableCell align="center">{data.Email}</TableCell>
                                        <TableCell align="center">{data.phoneNumber}</TableCell>
                                        <TableCell align="center">{data.Date}</TableCell>
                                        <TableCell align="center">{data.LengthTicket}</TableCell>
                                    </TableRow>
                                    );
                                    
                                    })
                                }
                                </TableBody>
                            </Table>
                            </TableContainer>
                            
                            </Grid>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={1} />
                </Grid>
                ):type.todotype === "B"?(
                    <Grid container style={{paddingTop:"30px"}}>
                    <Grid item xs={12} sm={1} />
                        <Grid item xs={12}sm={10}>
                            <Grid style={{textAlign:"center" , paddingBlockEnd:"20px"}} >
                                <FormControl variant="outlined"  required className={classes.formControl}>
                                        <Select className={classes.textField}
                                        native
                                        name="type"
                                        onChange={TypeValue}
                                       inputProps={{
                                         id: 'age-native-required',}}>
                                       <option aria-label="None" value="" />
                                       <option value="A">A</option>
                                       <option value="B">B</option>
                                       <option value="C">C</option>
                                       <option value="D">D</option>
                                    </Select>
                                </FormControl>

                                
                            </Grid>
                        <div className={classes.root}>
                            <Grid style={{textAlign:"center"}}>                            
                            <TableContainer component={Paper} elevation={24}>
                            <Table style={{textAlign:"center"}}>
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">บัตรประชาชน</TableCell>
                                    <TableCell align="center">ชื่อ-สกุล</TableCell>
                                    <TableCell align="center">อีเมล</TableCell>
                                    <TableCell align="center">เบอร์โทร.</TableCell>
                                    <TableCell align="center">วันที่ซื้อ</TableCell>
                                    <TableCell align="center">จำนวนที่ซื้อ</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {objdata.map((data , index) => {
                                    return(
                                        <TableRow>
                                        <TableCell align="center">{data.Passport}</TableCell>
                                        <TableCell align="center">{data.FullName}</TableCell>
                                        <TableCell align="center">{data.Email}</TableCell>
                                        <TableCell align="center">{data.phoneNumber}</TableCell>
                                        <TableCell align="center">{data.Date}</TableCell>
                                        <TableCell align="center">{data.LengthTicket}</TableCell>

                                    </TableRow>
                                    );
                                    
                                    })
                                }
                                </TableBody>
                            </Table>
                            </TableContainer>
                            
                            </Grid>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={1} />
                </Grid>
                ):type.todotype === "C"?(
                    <Grid container style={{paddingTop:"30px"}}>
                    <Grid item xs={12} sm={1} />
                        <Grid item xs={12}sm={10}>
                            <Grid style={{textAlign:"center" , paddingBlockEnd:"20px"}} >
                                <FormControl variant="outlined"  required className={classes.formControl}>
                                        <Select className={classes.textField}
                                        native
                                        name="type"
                                        onChange={TypeValue}
                                       inputProps={{
                                         id: 'age-native-required',}}>
                                       <option aria-label="None" value="" />
                                       <option value="A">A</option>
                                       <option value="B">B</option>
                                       <option value="C">C</option>
                                       <option value="D">D</option>
                                    </Select>
                                </FormControl>

                                
                            </Grid>
                        <div className={classes.root}>
                            <Grid style={{textAlign:"center"}}>                            
                            <TableContainer component={Paper} elevation={24}>
                            <Table style={{textAlign:"center"}}>
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">บัตรประชาชน</TableCell>
                                    <TableCell align="center">ชื่อ-สกุล</TableCell>
                                    <TableCell align="center">อีเมล</TableCell>
                                    <TableCell align="center">เบอร์โทร.</TableCell>
                                    <TableCell align="center">วันที่ซื้อ</TableCell>
                                    <TableCell align="center">จำนวนที่ซื้อ</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {objdata.map((data , index) => {
                                    return(
                                        <TableRow>
                                        <TableCell align="center">{data.Passport}</TableCell>
                                        <TableCell align="center">{data.FullName}</TableCell>
                                        <TableCell align="center">{data.Email}</TableCell>
                                        <TableCell align="center">{data.phoneNumber}</TableCell>
                                        <TableCell align="center">{data.Date}</TableCell>
                                        <TableCell align="center">{data.LengthTicket}</TableCell>

                                    </TableRow>
                                    );
                                    
                                    })
                                }
                                </TableBody>
                            </Table>
                            </TableContainer>
                            
                            </Grid>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={1} />
                </Grid>
                ):type.todotype === "D"?(
                    <Grid container style={{paddingTop:"30px"}}>
                    <Grid item xs={12} sm={1} />
                        <Grid item xs={12}sm={10}>
                            <Grid style={{textAlign:"center" , paddingBlockEnd:"20px"}} >
                                <FormControl variant="outlined"  required className={classes.formControl}>
                                        <Select className={classes.textField}
                                        native
                                        name="type"
                                        onChange={TypeValue}
                                       inputProps={{
                                         id: 'age-native-required',}}>
                                       <option aria-label="None" value="" />
                                       <option value="A">A</option>
                                       <option value="B">B</option>
                                       <option value="C">C</option>
                                       <option value="D">D</option>
                                    </Select>
                                </FormControl>
                                
                            </Grid>
                        <div className={classes.root}>
                            <Grid style={{textAlign:"center"}}>                            
                            <TableContainer component={Paper} elevation={24}>
                            <Table style={{textAlign:"center"}}>
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center">บัตรประชาชน</TableCell>
                                    <TableCell align="center">ชื่อ-สกุล</TableCell>
                                    <TableCell align="center">อีเมล</TableCell>
                                    <TableCell align="center">เบอร์โทร.</TableCell>
                                    <TableCell align="center">วันที่ซื้อ</TableCell>
                                    <TableCell align="center">จำนวนที่ซื้อ</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {objdata.map((data , index) => {
                                    return(
                                    <TableRow>
                                        <TableCell align="center">{data.Passport}</TableCell>
                                        <TableCell align="center">{data.FullName}</TableCell>
                                        <TableCell align="center">{data.Email}</TableCell>
                                        <TableCell align="center">{data.phoneNumber}</TableCell>
                                        <TableCell align="center">{data.Date}</TableCell>
                                        <TableCell align="center">{data.LengthTicket}</TableCell>
                                    </TableRow>
                                    );
                                    
                                    })
                                }
                                </TableBody>
                            </Table>
                            </TableContainer>
                            
                            </Grid>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={1} />
                </Grid>
                ):(false)
                }
                {/* End-Body */}
        </Grid>
    );
}