const jwt=require('jsonwebtoken');
const secure='fghklhjhgffghjk';
exports.generateToken=(user)=>{
    return jwt.sign({id:user._id},secure,{expiresIn:'1h'});

}

exports.valiteToken=(token)=>{
    try{
        const verify=jwt.verify(token,secure);
        return verify;
    }catch(err){
          throw new Error(err.message);
    }
}