const User = require('../database/models/user');

class UserRepository {

  async create(userRequestDto) {
    await User.create(userRequestDto);
  };

}

module.exports = UserRepository;