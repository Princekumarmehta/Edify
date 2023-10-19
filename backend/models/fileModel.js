import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
  fileName: {
    type: String,
    default: ""
  },
  fileType: {
    type: String,
    default: "",
    enum: ["image", "pdf", "doc", ""]
  },
  dateOfUpload: {
    type: Date,
    default: new Date
  },
  updatedAt: {
    type: Date,
    default: ""
  }
});
// MONGOOSE MIDDLEWARE (pre hook)
fileSchema.pre(['save'], function(next) {
 
  next(); // jetzt wird save aufgerufen
})


fileSchema.pre(['findOneAndUpdate', 'updateFile'], function(next){
  
  this.set({ updatedAt: new Date() }); 
  next();
} );


const FileModel = mongoose.model("Files", fileSchema);
export default FileModel;


