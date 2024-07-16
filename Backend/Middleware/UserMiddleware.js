const UserModel = require("../Models/UserSchema");

exports.createUser = async (req, res) => {
  const data = req.body;
  console.log("okay", data);
  try {
    const response = await UserModel.create(data);
    res.status(201).json({ message: "user create sucess", response });
  } catch (error) {
    res.status(501).json({ message: "user create failed", error });
  }
};
