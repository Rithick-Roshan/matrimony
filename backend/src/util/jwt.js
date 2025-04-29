const jwt=require('jsonwebtoken');

exports.generateToken=(user)=>{
    return jwt.sign({id:user._id},'fghklhjhgffghjk',{expiresIn:'1h'});
}