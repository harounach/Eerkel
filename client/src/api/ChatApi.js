import axios from "axios";

const serverUrl = "http://localhost:5000";
const loginUrl = `${serverUrl}/api/v1/user/login`;

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
};

export default ChatApi;
