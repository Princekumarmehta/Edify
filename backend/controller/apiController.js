
import UserModel from "../models/userModel.js";

export const postMyAccount = async (req, res) => {

  
  try {

    const userMail = ( await UserModel
      .findById(req.userId)
      .select("eMail")).eMail;
    return res.send({
    
      id: req.userId,
      eMail: userMail
    })
    
  } catch (error) {
    console.error(error);
    res.status(500).send({error})
  }
}