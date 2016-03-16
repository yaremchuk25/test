module.exports = {
  "get": {
    "/user": require("./controllers/userController").getUsers
  },
  "post": {
    "/user": require("./controllers/userController").addUser
  }
};
