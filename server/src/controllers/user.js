import User from "../modal/user";

class user {
  static async register(req, res, next) {
    const { name, email, password } = req.body;

    // Create user
    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(200).json({ success: true, user });
  }
}

export default user;
