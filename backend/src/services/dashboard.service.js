const profileModel = require('../models/profile.model');


class DashboardService{
     async getSimpleDetails(obj){
        // const {fullname,age,occupation}=await profileModel.find();
        // const data={
        //     fullname:fullname,
        //     age:age,
        //     occupation:occupation
        // };

        // return data;
        
        const gender = obj.gender === 'male' ? 'Female' : 'Male';
        //console.log(gender);
        const data= await profileModel.find({gender:gender},'fullname age occupation');
      //   console.log(data);
        return data;
     }

     
}

const dashboardService = new DashboardService();
module.exports=dashboardService;