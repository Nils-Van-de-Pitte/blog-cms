const User = require('../database/models/user');

class UserRepository {

  async create(userRequestDto) {
    await User.create(userRequestDto);
  };

  async findEmail(email) {
    return await User.findOne({
      where: {email: email}
    })
  }

}

module.exports = UserRepository;