const UserModel = require("../Models/UserSchema");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const { Username, Email, PhoneNumber, Password } = req.body;

  try {
    const newpassword = await bcrypt.hash(Password, 10);
    const response = await UserModel.create({
      Username: Username,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Password: newpassword,
    });
    res.status(201).json({ message: "user create sucess", response });
  } catch (error) {
    res.status(501).json({ message: "user create failed", error });
  }
};
exports.LoginUser = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const response = await UserModel.findOne({ Email: Email });
    if (response) {
      const pass = response.Password;
      const chack = await bcrypt.compare(Password, pass);
      if (chack == true) {
        return res.status(200).json({ message: "login sucess", response });
      }
    }
  } catch (error) {
    res.status(501).json({ message: "user create failed", error });
  }
};
