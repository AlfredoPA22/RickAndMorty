const getCharById =require('../controllers/getCharById');
const login =require('../controllers/login');
const deleteFav =require('../controllers/deleteFav');
const postFav =require('../controllers/postFav');
const postUser =require('../controllers/postUser');
const express=require("express")
const router=express.Router();

//trae el personaje de la api de rick and morty por id
//verifica el id pasado por params

//USER
router.get('/login',async (req,res)=>{
    await login(req,res)
});
router.post('/login',async (req,res)=>{
    await postUser(req,res)
})
//FAVORITE
router.get('/character/:id',async (req,res)=>{
    try {
        const {id}=req.params
        await getCharById(id,req,res);
    } catch (error) {
        return res.status(500).send(error)
    }
});
router.post('/fav',async(req,res)=>{
    await postFav(req,res)
});
router.delete('/fav/:id',async (req,res)=>{
   await deleteFav(req,res)
});

module.exports=router;
