const { test, expect, describe } = require("@jest/globals");
const User = require("../../models/user");

test("User model should has name as User", () => {
  expect(User.modelName).toBe("User");
});

test("User model should has the right schema", () => {
  const schema = {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_on: String,
    updated_on: String,
  };
  expect(User.schema.obj).toEqual(schema);
});
