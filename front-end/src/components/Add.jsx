import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    const [form, setForm] = useState({
        id: '',
        title: '',
        category:'',
        description:'',
        image: '',
        duration: '',
        fee: ''
    })

    let fetchValue = (e) => {
        // console.log(event);
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const location=useLocation()//
    const navigate=useNavigate();
    let sentData = () => {
        // console.log(form);
        
        if(location.state!=null){

            axios.put('http://localhost:3000/home/edit/'+location.state.course._id,form)
            .then((res)=>{
                // console.log(res.data);
                alert("Data Updated");
                navigate('/home');
            })
            .catch((error) =>{
                console.log(error);
            })
        }else{
            // console.log("inside post")
            axios.post('http://localhost:3000/home/addnew',form).then((res)=>{
                alert('added succesfully');
                navigate('/home');
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    };
    useEffect(()=>{
        if(location.state!=null){
            setForm({...form,
                id:location.state.course.courseId,
                title:location.state.course.courseName,
                category:location.state.course.courseCategory,
                description:location.state.course.courseDescription,
                image:location.state.course.courseImage,
                duration:location.state.course.courseDuration,
                fee:location.state.course.courseFee
            })
    }
},[])

    return (

        // <button>Add New</button>
        <Box sx={{ padding: '2% 5% 2% 5%', backgroundColor: 'rgba(255, 255, 255, 0.888)', margin: '2px 450px 2px 450px' }}>
            <h2>New course</h2><br />

            <TextField id="outlined-basic"
                value={form.id} 
                label="Course Id"
                variant="outlined"
                name="id"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.title}
                label="Course Name"
                variant="outlined"
                name="title"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.category}
                label="Course Category"
                variant="outlined"
                name="category"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.description}
                label="Course Description"
                variant="outlined"
                name="description"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                value={form.image} 
                label="Image URL"
                variant="outlined"
                name="image"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                value={form.duration} 
                label="Course Duration"
                variant="outlined"
                name="duration"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                value={form.fee} 
                label="Course Fee"
                variant="outlined"
                name="fee"
                onChange={fetchValue} /><br /><br />

           
            <Button onClick={sentData} variant="contained">SUBMIT</Button>
        </Box>
    )
}

export default Add