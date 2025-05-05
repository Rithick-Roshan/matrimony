const ProfileModel = require('../models/profile.model');


class ProfileService{
    async registerProfile(obj){
        await ProfileModel.create(obj);
    };

    async updateProfile(obj){
        
       const exitingProfile = await ProfileModel.findOne({user:obj.user});

       if(!exitingProfile){
            throw new Error('profile id not found');
       }

    //    exitingProfile=obj;   ❌ This does **not** update the Mongoose document correctly

       Object.assign(exitingProfile,obj); //✅ Copies fields from obj into the existing Mongoose doc
       await exitingProfile.save();
    }

     async getProfile(id_data){
        const id=id_data.id;
        const profile= await ProfileModel.findOne({user:id});
        return profile;
     }
}

const profileService = new ProfileService();

module.exports = profileService;