const FormUtils = {
  /**
   *  Check if this is errors data
   * @param {Object} data
   * */
  hasError: function (data) {
    return data.hasOwnProperty("errors");
  },

  /**
   * Toggle error message css class
   * @param {string} errorMessage
   * @returns {string}
   */
  toggleErrorClass: function (errorMessage) {
    return errorMessage ? " form__error--show" : "";
  },
};

export default FormUtils;
