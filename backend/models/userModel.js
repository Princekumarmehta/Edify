import mongoose from "mongoose";
import LearningDeskModel from "./learningDeskModel.js"

 /* const addressSchema = mongoose.Schema({
  street: {
    type: String,
    default: ""
  },
  houseNumberDetail: {
    type: String,
    default: ""
  },
  city: {
     code: {
        type:String, // code => postleitzahl
        default:""
      },
      name: {
        type:String,  // Cityname
        default:""
      }
  },
  countryCode: {
    type: String,
    enum: ["DE", "US",""],
    default: ""
  }
}); */

const userSchema = mongoose.Schema({
  salutation: {
    type: String,
    default: "",
    enum: ["Herr", "Frau", "Mr.", "Mrs", ""]
  },
  gender: {
    type: String,
    default: "",
    enum: ["female", "male", "intersex", "trans", "non-conforming", "personal", "eunuch", ""]
  },
  origin: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: ""
  },
  firstName: {
    type: String,
    default: ""
  },
  userName: {
    type: String,
    default: "",
    unique: true
  },
  password: {
    type: String,
    default: "",
    required: true
  },
  eMail: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
    validate: {
      validator: (userInput) => userInput.includes("@"),
      message: (userInput) =>  `${userInput.value} is not a valid e-mail-address. Check your input, please!`
    }
  },
  userImage: {
    type:String,
    default: ""
  },
  accessRights: [{
    type: Number,
    enum: [0,1,2,3,4,5],
    default:0
  }],
  street: {
    type: String,
    default: ""
  },
  houseNumberDetail: {
    type: String,
    default: ""
  },
  city: {
     code: {
        type:String, // code => 
        default:""
      },
      name: {
        type:String,  // Cityname
        default:""
      }
  },
  countryCode: {
    type: String,
    enum: ["DE", "US",""],
    default: ""
  },
  /* mailingAddress: {
    type: addressSchema
  }, */
  telephoneLandLine: {
    type: String,
    default: ""
},
  telephoneMobile: {
    type: String,
    default: ""
},
  dateOfBirth: {
    type: Date,
    trim: true,
    default:""
}, 
  active: {
    type: Boolean,
    enum: ["true", "false"],
    default: true
  },
  myPurchases: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "purchase",
    default: ""
  }],
  myCertificats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "certificat",
    default: ""
  }],
  profileColour: {
    type: String,
    default:"#66baf1",
  },
  myLearningDesk: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LearningDesk"
    },
  /* myAlumnis: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Alumnis"
  }
  ], */// Mitglied von meinem Netzwerk
  createdAt: {
    type: Date,
    immutable: true, // wert wird nach Erstellung nicht upgedatet
    default: () => new Date() // wenn wir das Document erzeugen, wird Date gesetzt
  },

  updatedAt: Date 
});


// MONGOOSE MIDDLEWARE (pre hook)
userSchema.pre(['save'], function(next) {
  
  this.updatedAt = new Date();
  next(); // jetzt wird save aufgerufen
})


userSchema.pre(['findOneAndUpdate', 'updateUser'], function(next){
 
  this.set({ updatedAt: new Date() }); 
  next(); 
} );


const UserModel = mongoose.model("User", userSchema);
export default UserModel;


