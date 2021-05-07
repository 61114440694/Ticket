import React from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Grid,
    Paper,
    makeStyles,
    FormControl,
    InputLabel,
    Select,
    Typography,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Slide,
    
} from '@material-ui/core';
import { useHistory} from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


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
      
      button: {
          height:40,
      },

}));




export default function BuyTicket(props) {

    const classes = useStyles();
    const history = useHistory();
    const [num , setNum] = React.useState(true);
    const [ticket , setTicket] = React.useState('');
    const [priceA , setPriceA] = React.useState('5000');
    const [priceB , setPriceB] = React.useState('2500');
    const [priceC , setPriceC] = React.useState('1000');
    const [priceD , setPriceD] = React.useState('500');
    const [state, setState] = React.useState({value: '',name:''});
    const [open, setOpen] = React.useState(false);
    const [typedatabase , setTypedatabase] = React.useState();
    const [date , setDate] = React.useState();
    const [data , setData] = React.useState({
        lengthTicket:'',
        price:'',
        passport:'',
        nameandlastname:'',
        email:'',
        phonenumber:'',
        date:'',
        typedatabase:'',
        code:'',
    });


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({
          ...state,
          [name]: event.target.value,
          [value]: event.target.value,
        }
        
        );
       return state; 
    };
    

    const BuyTypeTicket = () => {
        const type = Number(state.type);
        console.log(type);

        if(type === 1){
            setNum(1);
            setTicket(1)
            setTypedatabase('A')
            let r = Math.random().toString(36).substring(3);
            setData({...data , code:r})
            
        }
        if(type === 2){
            setNum(2);
            setTicket(2)
            setTypedatabase('B')
            let r = Math.random().toString(36).substring(3);
            setData({...data , code:r})
        }
        if(type === 3){
            setNum(3);
            setTicket(2)
            setTypedatabase('C')
            let r = Math.random().toString(36).substring(3);
            setData({...data , code:r})
        }
        if(type === 4){
            setNum(4);
            setTicket(3)
            setTypedatabase('D')
            let r = Math.random().toString(36).substring(3);
            setData({...data , code:r})
        }
    }
    

    const buttonplus = () => {
        const x = Number(ticket);
        const type = num;
        console.log(x);
        console.log(type);
        if(type === 1){
            if(x !== 10){
                const c = x+1;
                const price = 5000*c
                setTicket(c)
                setPriceA(price)
            }
            else{
                const x = 10;
                setTicket(x)
            }
        }
        if(type === 2){
            if(x !== 20){
                const c = x+1;
                const price = 2500*c
                setTicket(c)
                setPriceB(price)
            }
            else{
                const x = 20;
                setTicket(x)
            }
        }
        if(type === 3){
            if(x !== 30){
                const c = x+1;
                const price = 1000*c
                setTicket(c)
                setPriceC(price)
            }
            else{
                const x = 30;
                setTicket(x)
            }
        }
        if(type === 4){
            if(x !== 40){
                const c = x+1;
                const price = 500*c
                setTicket(c)
                setPriceD(price)
            }
            else{
                const x = 40;
                setTicket(x)
            }
        }

    }


    const buttonNagative = () =>{
        const x = Number(ticket);
        const type = num;
        console.log(x);
        console.log(type);
        if(type === 1){
            if(x !== 1){
                const c = x-1;
                const price = priceA-5000;
                setTicket(c)
                setPriceA(price);
            }
            else{
                const x = 1;
                setTicket(x)
            }
        }
        if(type === 2){
            if(x !== 2){
                const c = x-1;
                const price = priceB-2500;
                setTicket(c)
                setPriceB(price);
            }
            else{
                const x = 2;
                setTicket(x)
            }
        }
        if(type === 3){
            if(x !== 2){
                const c = x-1;
                const price = priceC-1000;
                setTicket(c)
                setPriceC(price);
            }
            else{
                const x = 2;
                setTicket(x)
            }
        }
        if(type === 4){
            if(x !== 3){
                const c = x-1;
                const price = priceD-500;
                setTicket(c)
                setPriceD(price);
            }
            else{
                const x = 3;
                setTicket(x)
            }
        }
    }

    

  const handleClickOpenA = () => {
    setOpen(true);
    let date = new Date();
    setDate(date.toLocaleString())
    console.log(date);
    setData({...data,lengthTicket:ticket , price:priceA})
  };

  const handleClickOpenB = () => {
    setOpen(true);
    let date = new Date();
    setDate(date.toLocaleString())
    console.log(date);
    setData({...data,lengthTicket:ticket , price:priceB})
  };

  const handleClickOpenC = () => {
    setOpen(true);
    let date = new Date();
    setDate(date.toLocaleString())
    console.log(date);
    setData({...data,lengthTicket:ticket , price:priceC})
  };

  const handleClickOpenD = () => {
    setOpen(true);
    let date = new Date();
    setDate(date.toLocaleString())
    console.log(date);
    setData({...data,lengthTicket:ticket , price:priceD})
  };

  const handleClose = () => {
    setOpen(false);
  };



  const TypeA = () =>{
      console.log(data);
      
    if (data.passport === "" || data.passport.length < 13 || !data.passport.trim()) {
        alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
        return;
    }

    if (data.nameandlastname === "" || !data.nameandlastname.trim()) {
        alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
        return;
    }
    if (data.email === "" || !data.email.trim()|| data.email.length <= 13) {
        alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
        return;
    }

    if (data.phonenumber === "" || data.phonenumber.length < 10 || !data.phonenumber.trim()) {
        alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
        return;
    }
    else{
        props.history.push({
            pathname: '/ts/:data',
              state : data // your data array of objects
          })
    }
}

  const TypeB = () =>{
    console.log(data);
    
  if (data.passport === "" || data.passport.length < 13 || !data.passport.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }

  if (data.nameandlastname === "" || !data.nameandlastname.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }
  if (data.email === "" || !data.email.trim()|| data.email.length <= 13) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }

  if (data.phonenumber === "" || data.phonenumber.length < 10 || !data.phonenumber.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }
  else{
      props.history.push({
          pathname: '/ts/:data',
            state : data // your data array of objects
        })
  }
}

  const TypeC = () =>{
    console.log(data);
    
  if (data.passport === "" || data.passport.length < 13 || !data.passport.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }

  if (data.nameandlastname === "" || !data.nameandlastname.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }
  if (data.email === "" || !data.email.trim()|| data.email.length <= 13) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }

  if (data.phonenumber === "" || data.phonenumber.length < 10 || !data.phonenumber.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }
  else{
      props.history.push({
          pathname: '/ts/:data',
            state : data // your data array of objects
        })
  }
}

  const TypeD = () =>{
    console.log(data);
    
  if (data.passport === "" || data.passport.length < 13 || !data.passport.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }

  if (data.nameandlastname === "" || !data.nameandlastname.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }
  if (data.email === "" || !data.email.trim()|| data.email.length <= 13) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }

  if (data.phonenumber === "" || data.phonenumber.length < 10 || !data.phonenumber.trim()) {
      alert('ข้อมูลไม่ถูกต้องหรือกรอกข้อมูลไม่ครบ');
      return;
  }
  else{
      props.history.push({
          pathname: '/ts/:data',
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

                    {num === true ?(
                        <div>
                        <Grid container style={{paddingTop:"30px"}}>
                <Grid item xs={12} sm={3} />
                       

                       <Grid item xs={12}sm={6}>
                       <div className={classes.root}>
                           <Paper style={{padding:"10px",paddingTop:"20px"}} elevation={24}>
                               <Grid container>
                                   <Grid xs={12} className={classes.header} >
                                       <h1>จองตั๋ว</h1>
                                   </Grid>

                                   <Grid xs={12} className={classes.center}>
                                       <h4>ประเภทตั๋ว</h4>
                                       <FormControl required className={classes.formControl}>
                                         <InputLabel style={{paddingLeft:"10px",fontSize:"15px"}} htmlFor="age-native-required">ประเภท</InputLabel>
                                         <Select className={classes.textField}
                                           native
                                           value={state.age}
                                           name="type"
                                           onChange={handleChange}
                                           inputProps={{
                                             id: 'age-native-required',}}>
                                           <option aria-label="None" value="" />
                                           <option value={1}>A</option>
                                           <option value={2}>B</option>
                                           <option value={3}>C</option>
                                           <option value={4}>D</option>
                                         </Select>
                                       </FormControl>
                                   </Grid>

                                   <Grid xs={12} className={classes.center} style={{paddingTop:"40px"}}>
                                   <Button  variant="contained" color="primary" type="submit" onClick={BuyTypeTicket}>
                                       ค้นหา
                                   </Button>
                                   </Grid>
                               </Grid>
                           </Paper>
                       </div>
                       
                       </Grid>

                       
                       
                   <Grid item xs={12} sm={3} />
               </Grid>
               <Grid container>
                <Grid xs={2} ms={2}></Grid>
                <Grid xs={8} ms={8}>
                    <Typography variant="subtitle1" className={classes.center} style={{paddingTop:"20px"}}>
                        *Tip : วิธีการใช้งาน <br />
                        1.เลือกประเภทของตั๋วที่ต้องการ <br />
                        2.กรอกข้อมูลการซื้อและยืนยันตัวตน
                    </Typography>
               </Grid>
                <Grid xs={2} ms={2}></Grid>
                </Grid>
                    </div>
                    ):
                    
                    // ถ้า num มีค่าเป็น 1

                    num === 1?(
                        <div>
                            <Grid container style={{paddingTop:"30px"}}>
                                <Grid item xs={12} sm={3} />
                                <Grid item xs={12} sm={6}>
                                <div class={classes.center}>
                                        <Paper elevation={24} className={classes.root}>
                                            <Grid>
                                                <Grid>
                                                <h1 className={classes.header}>ตั๋ว A</h1>
                                                    <p>จำนวนตั๋ว</p>
                                                    <div>
                                                        <from>
                                                        <div class="container">
                                                            
                                                            <Grid >
                                                                <Grid item xs={2} ms={2}>
                                                                    
                                                                </Grid>
                                                                
                                                                <Grid item xs={12} ms={8} > 
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={buttonplus}><b>+</b></Button>
                                                                    <TextField 
                                                                     style={{paddingLeft:"10px" , paddingRight:"10px" ,paddingBlockEnd:"10px" }} 
                                                                     id="outlined-size-small" 
                                                                     variant="outlined"
                                                                     inputProps={{style: { textAlign: "center" }}} 
                                                                     size="small"
                                                                     readOnly 
                                                                      value={ticket} />
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={buttonNagative}><b>-</b></Button>
                                                                </Grid>

                                                            
                                                                <Grid item xs={2} ms={2}>
                                                                
                                                                </Grid>
                                                            </Grid>
                                                            
                                                
                                                            
                                                            <div >
                                                                 <Grid>
                                                                    <p name="price" >ราคา : {priceA} บาท</p>
                                                                 </Grid>
                                                            <Button variant="contained" color="primary" onClick={handleClickOpenA}>Ok</Button>
                                                            <Dialog
                                                                    open={open}
                                                                    TransitionComponent={Transition}
                                                                    keepMounted
                                                                    onClose={handleClose}
                                                                    aria-labelledby="alert-dialog-slide-title"
                                                                    aria-describedby="alert-dialog-slide-description"
                                                                >
                                                                    <DialogTitle>{"โปรดใส่ข้อมูลเพื่อระบุตัวตน"}</DialogTitle>

                                                                    <DialogContent >
                                                                        <from>
                                                                        <Grid container item xs={12} ms={12} className={classes.center} >
                                                                        <Grid item xs={6} >                                     
                                                                            <TextField id="Passport" label="เลขบัตรประชาชน" variant="outlined" size="small" onChange={(e) => {setData({...data,passport:e.target.value })}} inputProps={{ maxLength: 13 }}  />
                                    
                                                                        </Grid>          
                                                                        <Grid item xs={6} >
                                                                            <TextField id="NameLastname" label="ชื่อ-สกุล" variant="outlined" size="small" onChange={(e) => {setData({...data ,nameandlastname:e.target.value , date:date , typedatabase:typedatabase ,})}} />
                                                                        </Grid>
                                                                                            
                                                                        <Grid item xs={6} style={{paddingTop:"20px" }} >
                                                                            <TextField id="Email" label="อีเมล" variant="outlined" size="small" onChange={(e) => {setData({...data , email: e.target.value})}}  />
                                                                        </Grid>
                                                                                            
                                                                        <Grid item xs={6} style={{paddingTop:"20px" }}>
                                                                            <TextField id="PhoneNumber" label="เบอร์โทรศัพท์มือถือ" variant="outlined" size="small" onChange={(e) => {setData({...data,phonenumber:e.target.value})}} inputProps={{ maxLength: 10 }}   />
                                                                        </Grid>
                                                                                            
                                                                        </Grid>
                                                                    </from>
                                                                    
                                                                        

                                                                    <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                                                                    <p><b>หมายเหตุ</b> : โปรดตรวจสอบข้อมูลและจำนวนเงินที่ต้องชำระก่อนกดยืนยัน</p>
                                                                        <p><b>จำนวนเงินที่ต้องชำระ : {priceA} บาท</b></p>
                                                                        
                                                                    </DialogContentText>
                                                                    </DialogContent>
                                                                    <DialogActions>
                                                                     <Button onClick={handleClose} color="primary" type="submit">
                                                                      ยกเลิก
                                                                    </Button>
                                                                     <Button onClick={TypeA}  color="primary" type="submit">
            
                                                                      ยืนยัน
                                                                        </Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                            </div>
                                                        </div>
                                                        </from>
                                                        <div>
                                                    
                                                    </div>
                                                    </div>
                                                    
                                                </Grid>
                                                
                                            </Grid>
                                        </Paper>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} />
                            </Grid>
                        </div>
                    ):
                    
                    // ถ้า num มีค่าเป็น 2

                    num === 2?(
                        <div>
                            <Grid container style={{paddingTop:"30px"}}>
                                <Grid item xs={12} sm={3} />
                                <Grid item xs={12} sm={6}>
                                <div class={classes.center}>
                                        <Paper elevation={24} className={classes.root}>
                                            <Grid>
                                                <Grid>
                                                <h1 className={classes.header}>ตั๋ว B</h1>
                                                    <p>จำนวนตั๋ว</p>
                                                    <div>
                                                        <from>
                                                        <div class="container">
                                                            
                                                            <Grid >
                                                                <Grid item xs={2} ms={2}>
                                                                    
                                                                </Grid>
                                                                
                                                                <Grid item xs={12} ms={8} > 
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={buttonplus}><b>+</b></Button>
                                                                    <TextField 
                                                                     style={{paddingLeft:"10px" , paddingRight:"10px" ,paddingBlockEnd:"10px" }} 
                                                                     id="outlined-size-small" 
                                                                     variant="outlined"
                                                                     inputProps={{style: { textAlign: "center" }}} 
                                                                     size="small"
                                                                     readOnly 
                                                                      value={ticket} />
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={buttonNagative}><b>-</b></Button>
                                                                </Grid>

                                                            
                                                                <Grid item xs={2} ms={2}>
                                                                
                                                                </Grid>
                                                            </Grid>
                                                            
                                                
                                                            
                                                            <div >
                                                                 <Grid>
                                                                    <p name="price" >ราคา : {priceB} บาท</p>
                                                                 </Grid>
                                                            <Button variant="contained" color="primary" onClick={handleClickOpenB}>Ok</Button>
                                                            <Dialog
                                                                    open={open}
                                                                    TransitionComponent={Transition}
                                                                    keepMounted
                                                                    onClose={handleClose}
                                                                    aria-labelledby="alert-dialog-slide-title"
                                                                    aria-describedby="alert-dialog-slide-description"
                                                                >
                                                                    <DialogTitle>{"โปรดใส่ข้อมูลเพื่อระบุตัวตน"}</DialogTitle>

                                                                    <DialogContent >
                                                                        <from>
                                                                        <Grid container item xs={12} ms={12} className={classes.center} >
                                                                        <Grid item xs={6} >                                     
                                                                            <TextField id="Passport" label="เลขบัตรประชาชน" variant="outlined" size="small" onChange={(e) => {setData({...data,passport:e.target.value })}} inputProps={{ maxLength: 13 }}  />
                                    
                                                                        </Grid>          
                                                                        <Grid item xs={6} >
                                                                            <TextField id="NameLastname" label="ชื่อ-สกุล" variant="outlined" size="small" onChange={(e) => {setData({...data ,nameandlastname:e.target.value , date:date , typedatabase:typedatabase ,})}} />
                                                                        </Grid>
                                                                                            
                                                                        <Grid item xs={6} style={{paddingTop:"20px" }} >
                                                                            <TextField id="Email" label="อีเมล" variant="outlined" size="small" onChange={(e) => {setData({...data , email: e.target.value})}}  />
                                                                        </Grid>
                                                                                            
                                                                        <Grid item xs={6} style={{paddingTop:"20px" }}>
                                                                            <TextField id="PhoneNumber" label="เบอร์โทรศัพท์มือถือ" variant="outlined" size="small" onChange={(e) => {setData({...data,phonenumber:e.target.value})}} inputProps={{ maxLength: 10 }}   />
                                                                        </Grid>
                                                                                            
                                                                        </Grid>
                                                                    </from>
                                                                    
                                                                        

                                                                    <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                                                                    <p><b>หมายเหตุ</b> : โปรดตรวจสอบข้อมูลและจำนวนเงินที่ต้องชำระก่อนกดยืนยัน</p>
                                                                        <p><b>จำนวนเงินที่ต้องชำระ : {priceB} บาท</b></p>
                                                                        
                                                                    </DialogContentText>
                                                                    </DialogContent>
                                                                    <DialogActions>
                                                                     <Button onClick={handleClose} color="primary" type="submit">
                                                                      ยกเลิก
                                                                    </Button>
                                                                     <Button onClick={TypeB}  color="primary" type="submit">
            
                                                                      ยืนยัน
                                                                        </Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                            </div>
                                                        </div>
                                                        </from>
                                                        <div>
                                                    
                                                    </div>
                                                    </div>
                                                    
                                                </Grid>
                                                
                                            </Grid>
                                        </Paper>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} />
                            </Grid>
                        </div>
                    ):
                    
                    // ถ้า num มีค่าเป็น 3

                    num === 3?(
                        <div>
                            <Grid container style={{paddingTop:"30px"}}>
                                <Grid item xs={12} sm={3} />
                                <Grid item xs={12} sm={6}>
                                <div class={classes.center}>
                                        <Paper elevation={24} className={classes.root}>
                                            <Grid>
                                                <Grid>
                                                <h1 className={classes.header}>ตั๋ว C</h1>
                                                    <p>จำนวนตั๋ว</p>
                                                    <div>
                                                        <from>
                                                        <div class="container">
                                                            
                                                            <Grid >
                                                                <Grid item xs={2} ms={2}>
                                                                    
                                                                </Grid>
                                                                
                                                                <Grid item xs={12} ms={8} > 
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={buttonplus}><b>+</b></Button>
                                                                    <TextField 
                                                                     style={{paddingLeft:"10px" , paddingRight:"10px" ,paddingBlockEnd:"10px" }} 
                                                                     id="outlined-size-small" 
                                                                     variant="outlined"
                                                                     inputProps={{style: { textAlign: "center" }}} 
                                                                     size="small"
                                                                     readOnly 
                                                                      value={ticket} />
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={buttonNagative}><b>-</b></Button>
                                                                </Grid>

                                                            
                                                                <Grid item xs={2} ms={2}>
                                                                
                                                                </Grid>
                                                            </Grid>
                                                            
                                                
                                                            
                                                            <div >
                                                                 <Grid>
                                                                    <p name="price" >ราคา : {priceC} บาท</p>
                                                                 </Grid>
                                                            <Button variant="contained" color="primary" onClick={handleClickOpenC}>Ok</Button>
                                                            <Dialog
                                                                    open={open}
                                                                    TransitionComponent={Transition}
                                                                    keepMounted
                                                                    onClose={handleClose}
                                                                    aria-labelledby="alert-dialog-slide-title"
                                                                    aria-describedby="alert-dialog-slide-description"
                                                                >
                                                                    <DialogTitle>{"โปรดใส่ข้อมูลเพื่อระบุตัวตน"}</DialogTitle>

                                                                    <DialogContent >
                                                                        <from>
                                                                        <Grid container item xs={12} ms={12} className={classes.center} >
                                                                        <Grid item xs={6} >                                     
                                                                            <TextField id="Passport" label="เลขบัตรประชาชน" variant="outlined" size="small" onChange={(e) => {setData({...data,passport:e.target.value })}} inputProps={{ maxLength: 13 }}  />
                                    
                                                                        </Grid>          
                                                                        <Grid item xs={6} >
                                                                            <TextField id="NameLastname" label="ชื่อ-สกุล" variant="outlined" size="small" onChange={(e) => {setData({...data ,nameandlastname:e.target.value , date:date , typedatabase:typedatabase ,})}} />
                                                                        </Grid>
                                                                                            
                                                                        <Grid item xs={6} style={{paddingTop:"20px" }} >
                                                                            <TextField id="Email" label="อีเมล" variant="outlined" size="small" onChange={(e) => {setData({...data , email: e.target.value})}}  />
                                                                        </Grid>
                                                                                            
                                                                        <Grid item xs={6} style={{paddingTop:"20px" }}>
                                                                            <TextField id="PhoneNumber" label="เบอร์โทรศัพท์มือถือ" variant="outlined" size="small" onChange={(e) => {setData({...data,phonenumber:e.target.value})}} inputProps={{ maxLength: 10 }}   />
                                                                        </Grid>
                                                                                            
                                                                        </Grid>
                                                                    </from>
                                                                    
                                                                        

                                                                    <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                                                                    <p><b>หมายเหตุ</b> : โปรดตรวจสอบข้อมูลและจำนวนเงินที่ต้องชำระก่อนกดยืนยัน</p>
                                                                        <p><b>จำนวนเงินที่ต้องชำระ : {priceC} บาท</b></p>
                                                                        
                                                                    </DialogContentText>
                                                                    </DialogContent>
                                                                    <DialogActions>
                                                                     <Button onClick={handleClose} color="primary" type="submit">
                                                                      ยกเลิก
                                                                    </Button>
                                                                     <Button onClick={TypeC}  color="primary" type="submit">
            
                                                                      ยืนยัน
                                                                        </Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                            </div>
                                                        </div>
                                                        </from>
                                                        <div>
                                                    
                                                    </div>
                                                    </div>
                                                    
                                                </Grid>
                                                
                                            </Grid>
                                        </Paper>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} />
                            </Grid>
                        </div>
                    ):
                    
                    // ถ้า num มีค่าเป็น 4
                    
                    num === 4?(
                        <div>
                            <Grid container style={{paddingTop:"30px"}}>
                                <Grid item xs={12} sm={3} />
                                <Grid item xs={12} sm={6}>
                                <div class={classes.center}>
                                        <Paper elevation={24} className={classes.root}>
                                            <Grid>
                                                <Grid>
                                                <h1 className={classes.header}>ตั๋ว D</h1>
                                                    <p>จำนวนตั๋ว</p>
                                                    <div>
                                                        <from>
                                                        <div class="container">
                                                            
                                                            <Grid >
                                                                <Grid item xs={2} ms={2}>
                                                                    
                                                                </Grid>
                                                                
                                                                <Grid item xs={12} ms={8} > 
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={buttonplus}><b>+</b></Button>
                                                                    <TextField 
                                                                     style={{paddingLeft:"10px" , paddingRight:"10px" ,paddingBlockEnd:"10px" }} 
                                                                     id="outlined-size-small" 
                                                                     variant="outlined"
                                                                     inputProps={{style: { textAlign: "center" }}} 
                                                                     size="small"
                                                                     readOnly 
                                                                      value={ticket} />
                                                                <Button className={classes.button} variant="contained" color="primary" onClick={buttonNagative}><b>-</b></Button>
                                                                </Grid>

                                                            
                                                                <Grid item xs={2} ms={2}>
                                                                
                                                                </Grid>
                                                            </Grid>
                                                            
                                                
                                                            
                                                            <div >
                                                                 <Grid>
                                                                    <p name="price" >ราคา : {priceD} บาท</p>
                                                                 </Grid>
                                                            <Button variant="contained" color="primary" onClick={handleClickOpenD}>Ok</Button>
                                                            <Dialog
                                                                    open={open}
                                                                    TransitionComponent={Transition}
                                                                    keepMounted
                                                                    onClose={handleClose}
                                                                    aria-labelledby="alert-dialog-slide-title"
                                                                    aria-describedby="alert-dialog-slide-description"
                                                                >
                                                                    <DialogTitle>{"โปรดใส่ข้อมูลเพื่อระบุตัวตน"}</DialogTitle>

                                                                    <DialogContent >
                                                                        <from>
                                                                        <Grid container item xs={12} ms={12} className={classes.center} >
                                                                        <Grid item xs={6} >                                     
                                                                            <TextField id="Passport" label="เลขบัตรประชาชน" variant="outlined" size="small" onChange={(e) => {setData({...data,passport:e.target.value })}} inputProps={{ maxLength: 13 }}  />
                                    
                                                                        </Grid>          
                                                                        <Grid item xs={6} >
                                                                            <TextField id="NameLastname" label="ชื่อ-สกุล" variant="outlined" size="small" onChange={(e) => {setData({...data ,nameandlastname:e.target.value , date:date , typedatabase:typedatabase ,})}} />
                                                                        </Grid>
                                                                                            
                                                                        <Grid item xs={6} style={{paddingTop:"20px" }} >
                                                                            <TextField id="Email" label="อีเมล" variant="outlined" size="small" onChange={(e) => {setData({...data , email: e.target.value})}}  />
                                                                        </Grid>
                                                                                            
                                                                        <Grid item xs={6} style={{paddingTop:"20px" }}>
                                                                            <TextField id="PhoneNumber" label="เบอร์โทรศัพท์มือถือ" variant="outlined" size="small" onChange={(e) => {setData({...data,phonenumber:e.target.value})}} inputProps={{ maxLength: 10 }}   />
                                                                        </Grid>
                                                                                            
                                                                        </Grid>
                                                                    </from>
                                                                    
                                                                        

                                                                    <DialogContentText id="alert-dialog-slide-description" className={classes.center}>
                                                                    <p><b>หมายเหตุ</b> : โปรดตรวจสอบข้อมูลและจำนวนเงินที่ต้องชำระก่อนกดยืนยัน</p>
                                                                        <p><b>จำนวนเงินที่ต้องชำระ : {priceD} บาท</b></p>
                                                                        
                                                                    </DialogContentText>
                                                                    </DialogContent>
                                                                    <DialogActions>
                                                                     <Button onClick={handleClose} color="primary" type="submit">
                                                                      ยกเลิก
                                                                    </Button>
                                                                     <Button onClick={TypeD}  color="primary" type="submit">
            
                                                                      ยืนยัน
                                                                        </Button>
                                                                    </DialogActions>
                                                                </Dialog>
                                                            </div>
                                                        </div>
                                                        </from>
                                                        <div>
                                                    
                                                    </div>
                                                    </div>
                                                    
                                                </Grid>
                                                
                                            </Grid>
                                        </Paper>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={3} />
                            </Grid>
                        </div>
                    ):(false)}

                    
                    {/* End-Body */}

            </Grid>
        </div>
    )
}