const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const signUpValidate = require('../middleware/validation');
const { Users } = require('../modal/userModal');

module.exports = {

    SignUpUser: async (req, res) => {
        try {

            const {error}=signUpValidate(req.body);
            if(error){
                res.status(400).json({error:error.details[0].message})
            }else{

                const userData = await Users.findOne({ email: req.body.email })
                if (userData) {
    
                    res.status(409).json({ status:"failed",data:"user already exists" })
    
                } else {
                    const hashedPassword=await bcrypt.hash(req.body.password,10)
                    Users.create({
                        userName: req.body.name,
                        email: req.body.email,
                        password: hashedPassword
    
                    }).then((response) => {
    
                        res.status(200).json({ status: "ok", data: response._id })
    
                    }).catch((err) => {
    
                        res.status(500).json({ status: "failed", message: "database issue",error:err })
    
                    })
                }
            }
        } catch (err) {
            res.status(400).json({status:"failed",error:err})
        }
    }

}