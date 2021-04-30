import axios from "axios";

const serverUrl = "http://localhost:5000";
const loginUrl = `${serverUrl}/api/v1/user/login`;
const registerUrl = `${serverUrl}/api/v1/user/register`;

const ChatApi = {
  /**
   * Login to app
   * @param {string} email
   * @param {string} password
   */
  login: async function (email, password) {
    return axios.post(loginUrl, {
      email: email,
      password: password,
    });
  },

  /**
   * Register new user
   * @param {string} username
   * @param {string} email
   * @param {string} password
   * @param {string} passwordConfirm
   */
  register: async function (username, email, password, passwordConfirm) {
    return axios.post(registerUrl, {
      username: username,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    });
  },
};

export default ChatApi;
