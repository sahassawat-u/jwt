// check username, password in post(login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard

const {BadRequest} = require('../errors')
const jwt = require('jsonwebtoken')
const login = async (req,res) => {
    const {username,password} = req.body

    // // Mongoose validation
    // // Joi
    // // check in the controller
    if(!username || !password){
        throw new BadRequest('Please provide username or password')
    }
    const id = new Date().getDate()
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'user created', token})
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`hello, ${req.user.username}`,secret:`here is your lucky number ${luckyNumber}`})

}

module.exports = {
    login,
    dashboard
}
