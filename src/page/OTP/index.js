import { Grid , Button , makeStyles } from "@material-ui/core";
import React  from "react";
import { useHistory } from "react-router-dom";
import firebase from '../../firebase';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';


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



export default function OTPbox(props) {
  
  const history = useHistory() 
  const classes = useStyles();
  const [complete , setComplete] = React.useState(true)
  const state = props.location
  const phone =   state.state.phonenumber;
  const fname = state.state.nameandlastname;
  const passport = state.state.passport;
  const lengthTicket = state.state.lengthTicket;
  const price = state.state.price;
  const email = state.state.email;
  const date = state.state.date;
  const typedatabase = state.state.typedatabase;
  const codedata = state.state.code;
  const x = '+66';
  const OTPnumber = x+phone[1]+phone[2]+phone[3]+phone[4]+phone[5]+phone[6]+phone[7]+phone[8]+phone[9];
  const [showdata , setShowData] = React.useState()
  const [keydata , setKeydata] = React.useState()
  const handleClick=()=>{
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
    var number = OTPnumber;
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
      var code = prompt('Enter the otp', '');
        if(code === null) return;
        e.confirm(code).then(function (result) {
            console.log(result.user);
              setKeydata(typedatabase)
              const todoRef = firebase.database().ref(typedatabase);
              const todo = {
                LengthTicket:lengthTicket,
                Price:price,
                Passport:passport,
                FullName:fname,
                Email:email,
                phoneNumber:phone,
                Date:date,
                TypeTicket:typedatabase,
                Code : codedata ,
              }
              todoRef.push(todo)
            setComplete(false)   
            
        }).catch(function (error) {
            console.error( error);
            
        });

    })
    .catch(function (error) {
        console.error( error);

    });
  }

  const backtohome = () =>{
    history.push('/home')
  }

  const recomment = () =>{
    const todoRef = firebase.database().ref(keydata)
    todoRef.on('value' , (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      const code = []
      console.log(snapshot.key);
      for(let id in todos){
        todoList.push(todos[id]);
        code.push(id);
      }
      
      const lento = todoList.length;
      setShowData(code[lento-1]);

      
      
      // // setShowData()
  })
}  
  return(
    <Grid>
      {complete === true ?(
      <div>
        <Grid container item xs={12} ms={12}>
        <Grid item xs={12} ms={3}></Grid>
        <Grid item xs={12} ms={6} style={{paddingTop:"250px"}}>
          <center>
          <div id="recaptcha"></div>
          <Grid style={{paddingTop:"50px"}}>
            <Button variant="contained" color="primary" onClick={handleClick}>Click</Button>
            <Grid>
              <p>Tip : กดปุ่มเพื่อรับรหัส OTP เพื่อยืนยันตัวตน</p>
            </Grid>
          </Grid>
          </center>
        </Grid>
        <Grid item xs={12} ms={3}></Grid>
        </Grid>
   
 </div>
    
    ):complete === false ?(
      <Grid>
      <Grid container className={classes.center}>
          <Grid item xs={12} ms={3} />
          <Grid item xs={12} ms={6} className={classes.center}>
              <h1 style={{fontSize:"72px"}}>สำเร็จแล้ว</h1>
              <CheckCircleRoundedIcon  style={{fontSize:"50px"}} />
              <Grid>
                  <Grid>
                  <p style={{fontSize:"30px"}}><b>รหัสยืนยันตัวตน {showdata} </b></p>
                  </Grid>
                <Button variant="contained" color="primary" onClick={recomment}>รับข้อมูลยืนยันตัวตน</Button>
              </Grid>
          </Grid>
          <Grid item xs={12} ms={3} style={{paddingTop:"30px"}} ><Button variant="contained" color="primary" onClick={backtohome}>Back to Home</Button></Grid>
      </Grid>
    </Grid>
    ):(100) }
    </Grid>
    );
    
};