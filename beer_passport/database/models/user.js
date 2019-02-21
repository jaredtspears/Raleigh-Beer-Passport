const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const RaleighBrewerySchema = require('./raleighBrewerySchema');    //NOT CREATED YET
// const stampSchema = require('./stamp');                            //NOT CREATED YET

//create Schema:
const userSchema = new Schema({

  firstName:{
    type: String, 
    default: ''
  }, 
  lastName: {
    type: String,
    default: ''
  }, 
  userName: {
    type: String
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String, 
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  timeStamp: {
    type: Date, 
    default: Date.now
  },
  beerpassport: [
    {
      //store ObjectIds in the array
      type:Schema.Types.ObjectId,

      //! this needs to be double checked as I have not set this up yet, DON'T MISS ME
      //the ObjectIDs will refer to teh ids in another (UNSPECIFIED AT THIS TIME) model
      ref: 'BEERpassport' 
    } 
  ]
});

userSchema.methods = {
  checkPassword:function(inputPassword) {
    return //something not sure if I will use Passport js yet 
              //could look similar to this: bycrpt.compareSycn(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return //something 
              //could look similar to this: bycript.hashSynch(plaineTextPassword, 10)
  }
}








//create model from Schema
const User = mongoose.model('User', userSchema);

module.exports = User;