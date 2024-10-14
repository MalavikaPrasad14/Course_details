const mongoose= require('mongoose');

const cSchema=   mongoose.Schema({
    courseId: String,
    courseName: String,
    courseImage: String,
    courseCategory: String,
    courseDescription: String,
    courseDuration: String,
    courseFee: String

});

const course=mongoose.model('coursedetail',cSchema);


module.exports=course;