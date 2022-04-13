import express from 'express';

const router = express.router;

router.get('/getAll', (req, res) => {
    console.log(req.body);
    console.log("Get Operation");

    res.status(200).json(req.body)
});

export default router