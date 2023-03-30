module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  myJob: {
    task: ({ strapi }) => {
      const user = {
        username: "john.doe",
        email: "john.doe@example.com",
        password: "mypassword",
      };
      // Add your own logic here (e.g. send a queue of email, create a database backup, etc.).
      // strapi.query("user", "users").create(user);
      // console.log("cronsss");
    },
    options: {
      rule: "0 9 * * *",
    },
  },
};
