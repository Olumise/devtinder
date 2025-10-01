const userAuthenticated = ('/admin',(req,res,next) => {
    const token = 'xyz';
    const userIsAuthenticated = token === 'xyz'

    if (userIsAuthenticated){
        next()
    }else{
        res.send("User not authenticated")
    }
})

module.exports = {userAuthenticated}