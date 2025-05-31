const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const authController = {

    SignUp: async (req, res) => {
        try{
            const {name, email, password} = req.body

            const chechuser = await User.findOne({
                $or: [
                    {name: name},
                    {email: email}
                ]
            })

            if(chechuser) {
                return res.json({ Error: "User Already Exists"})
            }
            else{
                const hashPass = await bcrypt.hash(password, 8)

                const NewUser = new User({
                    name: name,
                    email: email,
                    password: hashPass,
                    confirmPassword: hashPass                    
                })

                const ResultUser = NewUser.save()

                if(ResultUser) {
                    return res.json({ Status: "Success"})
                }
                else{
                    return res.json({ Error: "Internal Server Error"})
                }
            }

        }
        catch (err){
            console.log(err)
        }
    },

    SignIn: async(req, res) => {
        try{
            const {email, password} = req.body

            const findUser = await User.findOne({ email: email})
            
            if(findUser){
                const chechpass = await bcrypt.compare(password, findUser.password)

                if(chechpass){

                    jwt.sign({ userId: findUser._id, userEmail: findUser.email}, process.env.SECRET_KEY, {algorithm: 'HS512'},(err, token)=>{



                    if(err) {
                        console.log(err);
                        throw new Error(err.message);
                    }

                    res.cookie('token', token, {
                        maxAge: 30 * 60 * 1000,
                        httpOnly: true
                    });

                    res.status(200).json({
                       status: "success",
                       message: "User has been logged in"
                    });
                })
                    //return res.json({Status: "Success", Token:token, Result: findUser})    
                }
                else{
                    return res.json({ Error: "Passowrd not Match...."})
                }
            }
            else{
                return res.json({ Error: "No User Found...."})
            }

        }
        catch (err) {
            console.log(err)
        }
    },

    LogOut: async (req, res) => {
        try {
            res.clearCookie('token');
            res.status(200).json({
                status: "success",
                message: "User has been logged out"
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

module.exports = authController