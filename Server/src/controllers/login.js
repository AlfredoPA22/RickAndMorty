const {User}=require('../DB_connection');

const login= async(req,res)=>{
    try {
        const {email,password}=req.query;
        if(!email || !password) return res.status(400).send('Faltan datos');
        const userFind=await User.findOne({where:{email:email}})
        if(!userFind) return res.status(200).json({access:false});
        if(userFind.password != password) return res.status(200).json({access:false});
        return res.status(200).json({ access:true });
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
     
}

module.exports=login;