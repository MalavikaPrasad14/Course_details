const express = require('express');
const router = express.Router();

const cModel = require('../model/coursedata');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));



// function courseroute() {
// GET OPERATION
router.get('/', async (req, res) => {
    try {
        const data = await cModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send('Data not found');
    }

})

// router.get('/:id',async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const data=await cModel.(id,req.body);
//         res.status(200).send('Update successful');

//     } catch (error) {
//         res.status(404).send('Update unsuccessful');

//     }
// });

// POST OPERATION

router.post('/addnew', async (req, res) => {
    console.log(req.body)
    try {
        const data = await cModel.create(req.body);
        // console.log(data)
        res.status(200).send('Post successful');


    } catch (error) {
        res.status(400).send('Post Unsuccessful');
    }
});

// put operation
router.put('/edit/:id', async (req, res) => {
    console.log(req.body);
    try {
        const id = req.params.id;
        // console.log(id)
        const data = await cModel.findByIdAndUpdate(id, req.body);

        res.status(200).send('Update successful');

    } catch (error) {
        res.status(404).send('Update unsuccessful');

    }
});

//delete op

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await cModel.findByIdAndDelete(id, req.body);
        res.status(200).send('delete successful');

    } catch (error) {
        res.status(404).send('delete unsuccessful');

    }
});
// return router;
// }



module.exports = router;
