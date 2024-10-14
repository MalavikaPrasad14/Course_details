import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    const [form, setCourse] = useState({
        title: '',
        image: '',
        price: '',
        rating: ''
    })

    let fetchValue = (e) => {
        // console.log(event);
        setCourse({ ...form, [e.target.name]: e.target.value })
    }

    const location=useLocation()//
    let sentData = () => {
        // console.log(course);
        if(location.state!=null){
            axios.put('http://localhost:3000/home/edit/'+location.state.course._id,form).then((res))
        }
    }

    return (

        // <button>Add New</button>
        <Box sx={{ padding: '2% 5% 2% 5%', backgroundColor: 'rgba(255, 255, 255, 0.888)', margin: '2px 450px 2px 450px' }}>
            <h2>New course</h2><br />

            <TextField id="outlined-basic"
                // value={course.empName} 
                label="Course Id"
                variant="outlined"
                name="id"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                // value={course.empId}
                label="Course Name"
                variant="outlined"
                name="title"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                // value={course.empId}
                label="Course Category"
                variant="outlined"
                name="category"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                // value={course.empId}
                label="Course Description"
                variant="outlined"
                name="description"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // value={course.empName} 
                label="Image URL"
                variant="outlined"
                name="image"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // value={course.empName} 
                label="Course Duration"
                variant="outlined"
                name="duration"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // value={course.empDept} 
                label="Course Fee"
                variant="outlined"
                name="fee"
                onChange={fetchValue} /><br /><br />

           
            <Button onClick={sentData} variant="contained">SUBMIT</Button>
        </Box>
    )
}

export default Add

