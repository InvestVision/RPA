import express from "express";
const router = express.Router();


router.get('/', (req, res) => {
    try{
        res.status(200).render('index.html')
    } catch (err) {
    res.send(err.message);
    }
});

export default router;