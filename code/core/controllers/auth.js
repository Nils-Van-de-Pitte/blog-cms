const {encrypt} = require('../utilities/crypto');
const UserRepository = require('../../infrastructure/repository/user');

class AuthController {
  #userRepository;
  constructor() {
    this.#userRepository = new UserRepository();
  };

  /**
   * Registers a new user based on the provided request data.
   * Validates the user information and checks if the user already exists.
   *
   * @param {Object} request - The request object containing user information.
   * @param {string} request.email - The email address of the user to register.
   * @param {string} request.password - The password for the user account.
   * @param {string} [request.username] - Optional username for the user account.
   * @return {void}
   */
  async register(request) {
    const userAlreadyExists = await this.#userRepository.findEmail(request.email);
    if (userAlreadyExists) {
      //TODO throw error
    }
    request.password = await encrypt(request.password);
    await this.#userRepository.create(request);
  };
}

module.exports = AuthController;