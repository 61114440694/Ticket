import React from 'react';
import { 
    Grid ,
    AppBar,
    Toolbar,
    Button, 
    makeStyles,
    Paper,
    TextField,
    FormControl,
    InputLabel,
    Select  ,
} from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import firebase from '../../firebase'
// import Todo from './todo'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(150),
            height: theme.spacing(55)
        }
    },

    roots: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(80),
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
      
      button: {
          height:40,
      },

      table: {
        minWidth: 650,
        
      },

}));


export default function ShowDataPeople(){
    const history = useHistory();
    const classes = useStyles();
    const [code ,setCode] = React.useState("");
    const [todoList , setTodoList] = React.useState();
    const [doDetail , setDodetail] = React.useState(true);
    const [objecter , setOjecter] = React.useState('');
    const [tyoe , setTyoe] = React.useState();

    const checkcode = () => {
        if(code === "" || !code.trim()){
            alert("โปรดกรอกรหัส");
        }
        else{
        const todoRef = firebase.database().ref(tyoe);
        todoRef.on('value' , (snapshot)=> {
            const todos = snapshot.val()
            const todoList = []
            
            for(let id in todos){
                if(code === id){
                    setOjecter(true)
                    todoList.push(todos[id])
                    
                }
                if(!code === id){
                    setOjecter(false)
                }   
            }
            if(objecter === true){
                setTodoList(todoList);
                setDodetail(false)
            }
            if(objecter === false){
                alert("ไม่มีข้อมูลในระบบ")
            }
        })
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


                {doDetail === true? (
                    <Grid >
                    <div>
                        <Grid container style={{paddingTop:"100px"}}>
                    <Grid item xs={12} sm={4} />
    
    
                           <Grid item xs={12}sm={4}>
                           <div className={classes.roots}>
                               <Paper style={{padding:"10px",paddingTop:"20px"}} elevation={24}>
                                    <Grid className={classes.header}  align="center" style={{paddingTop:"1px"}}>
                                    <h1>รหัสยืนยันตัวตน</h1>
                                    </Grid>
                                    <Grid align="center">
                                              <FormControl required className={classes.formControl}>
                                                  <InputLabel style={{paddingLeft:"10px",fontSize:"15px"}} htmlFor="age-native-required">ประเภท</InputLabel>
                                                  <Select className={classes.textField}
                                                    native
                                                    onChange={(e) => {setTyoe(e.target.value)}}
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
                                  <Grid align="center" style={{paddingTop:"20px"}}>
                                      <TextField
                                      label="รหัสยืนยันตัวตน"
                                      onChange={(e)=> {setCode("-"+e.target.value);}} 
                                      inputProps={{style: { textAlign: "center"  }}}/>
                                  </Grid>
                                  <Grid align="center" style={{paddingTop : "40px" }}>
                                      <Button variant="contained" color="primary" onClick={checkcode}>Ok</Button>
                                  </Grid>
                                  
                               </Paper>
                               {/* <Todo /> */}
                           </div>
                           </Grid> 
                       <Grid item xs={12} sm={4} />
                   </Grid>
                        </div>
                    </Grid>
                ): doDetail === false ?(
                    <Grid >
                <div>
                        <Grid container style={{paddingTop:"30px"}}>
                <Grid item xs={12} sm={2} />


                       <Grid item xs={12}sm={8}>
                       <div className={classes.root}>
                           <Paper style={{padding:"10px",paddingTop:"20px"}} elevation={24}>
                                <Grid align="center">
                                <h1 style={{fontSize:"48px"}}>ข้อมูลตั๋ว</h1>
                                {todoList.map((data , index)=>{
                                    return(
                                        <Grid>
                                            <p style={{fontSize:"24px"}}>ชื่อ : {data.FullName}<br/>
                                            บัตรประชาชน : {data.Passport}<br/>
                                            อีเมล : {data.Email}<br/>เบอร์โทร : {data.phoneNumber}<br/>
                                            วันที่ซื้อ : {data.Date}<br/>
                                            จำนวนบัตร : {data.LengthTicket} ใบ <br/>
                                            ประเภทตั๋ว : {data.TypeTicket}<br/>
                                            </p><br/>
                                        </Grid>
                                    )
                                })}
                               
                                </Grid>
                            
                           </Paper>
                           {/* <Todo /> */}
                       </div>
                       </Grid> 
                   <Grid item xs={12} sm={2} />
               </Grid>
               <Grid align="center" style={{paddingTop:"30px"}}>
                   <Button variant="contained" color="primary" onClick={()=>{history.push('/home')}}>กลับหน้าหลัก</Button>
               </Grid>
                    </div>
                </Grid>
                ):(100)}
                
            </Grid>
        </div>
    )}