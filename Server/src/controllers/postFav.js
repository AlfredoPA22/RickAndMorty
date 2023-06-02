const {Favorite}=require('../DB_connection')

const postFav= async (req,res)=>{
    try {
        const {id,name,origin,status,image,species,gender}=req.body
        if(!id || !name || !origin || !status || !image || !species || !gender) return res.status(200).send('Faltan datos')
        await Favorite.create({id,name,origin,status,image,species,gender})
        const favorites= await Favorite.findAll();
        return res.status(200).json(favorites)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports=postFav;