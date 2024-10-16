import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const [courses, setCourses] = useState([]);

    // Fetching data from external API
    useEffect(() => {
        axios.get('http://localhost:3000/home/')
            .then((res) => {
                setCourses(res.data);
            });
    }, []);

    // const nav = useNavigate();
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/home/delete/' + id)
            .then((res) => {
                // nav('/')
                alert('Data Deleted')
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
                });

    }

    const navigate=useNavigate();
    function handleUpdate(course) {
        navigate('/add',{state:{course}})
    }


    return (
        <>
            

            <Grid container spacing={3} sx={{ padding: 2 }}>
                {courses.map((course) => (
                    <Grid item xs={12} sm={6} md={3} key={course.courseId}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                sx={{ height: 180 }}
                                image={course.courseImage}
                                title={course.courseName}
                            />
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 700 }}>
                                    {course.courseName}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                    Category: {course.courseCategory}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                    Course Fee: {course.courseFee} INR
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                                    {course.courseDescription}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color='primary'>Read more</Button>
                                <Button size="small" color='secondary' onClick={() => handleUpdate(course)}>Edit </Button>
                                <Button size="small" onClick={() => handleDelete(course._id)} color='warning'>Delete</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Home;