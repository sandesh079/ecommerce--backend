const User = require('../models/user')
const registerNewUser = async(req, res)=>{
    try{
        const existingUser = await User.findOne({phoneNumber: req.body.phoneNumber, email: req.body.email})
        if(existingUser){
            return res.status(403).json({
                msg: "User Already Exist"
            })
        }
        await User.create(req.body)
        res.json({
            msg: "Register Successfully"    
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {registerNewUser}

