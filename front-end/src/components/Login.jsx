import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [user,setUser]=useState({
        username: "",
        password: ""
    })

    let updateUser=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    let sendData=()=>{
        if((user.username=="admin")&&(user.password=="12345"))
        {
            sessionStorage.setItem("username","admin");
            navigate('/home');
        }
        else{
            alert("Invalid username or password")
        }
    }

    const navigate= useNavigate();
  return (
    <>
    <h4>LOGIN PAGE</h4>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Email" variant="outlined" name='username' value={user.username} onChange={updateUser} /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" name='password' value={user.password} onChange={updateUser}/><br /><br />
        <Button variant="contained" onClick={sendData}>Login</Button>

    </Box>
    </>
  )
}

export default Login