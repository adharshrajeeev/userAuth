const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const {signUpValidate, loginValidate} = require('../middleware/validation');
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
    },



    LoginUser:async(req,res)=>{
        try{

            const {error}=loginValidate(req.body);
            
            if(error){
              
                res.status(400).json({error:error.details[0].message})
            }else{
                const userDetails=await Users.findOne({email:req.body.email})
                
                if(userDetails){
                    const validatePassword=await bcrypt.compare(req.body.password,userDetails.password);

                    if(validatePassword){
                        const token=jwt.sign({
                            name:userDetails.userName,
                            email:userDetails.email,
                            id:userDetails._id
                        },
                        'secret123',
                        {
                            expiresIn: "7d"
                        }
                        )
                        console.log("Login Sucess")
                        res.status(200).json({ status: 'Login Sucess', user: token })
                    }else{
                        res.status(400).json({status:"Login Failed",error:"user password not matched"})
                    }
                }else{
                    res.status(400).json({status:"Login Failed",error:"user not exists"})
                }
            }

        }catch(err){
            res.status(400).json({status:"failed",error:err})
        }
    }   

}