"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */

  // register(/*{ strapi }*/) {},

  async register({ strapi }) {
    const extensionService = strapi.plugin("graphql").service("extension");
    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: "UsersPermissionsMe",
          definition(t) {
            // here define fields you need
            t.string("firstname");
            t.string("lastname");
            t.string("phonenumber");
          },
        }),
        nexus.extendInputType({
          type: "UsersPermissionsRegisterInput",
          definition(t) {
            t.string("firstname");
            t.string("lastname");
            t.string("phonenumber");
          },
        }),
      ],
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    // await strapi.plugins["email"].services.email.send({
    //   to: "harshmavani25@gmail.com",
    //   from: "harshmavani.dignizant@gmail.com", //e.g. single sender verification in SendGrid
    //   replyTo: "harshmavani25@gmail.com",
    //   subject: "The Strapi Email plugin worked successfully",
    //   text: "Hello world!",
    //   html: "Hello world!",
    // });
    // strapi.db.lifecycles.subscribe({
    //   models: ["plugin::users-permissions.user"],
    //   // Send email to new user
    //   async afterCreate({ params }) {
    //     const {
    //       data: { email, username },
    //     } = params;
    //     try {
    //       await strapi.plugins["email"].services.email.send({
    //         to: `${email}`,
    //         from: `${process.env.SENDGRID_DEFAULT_FROM}`,
    //         replyTo: `${process.env.SENDGRID_DEFAULT_TO}`,
    //         cc: "valid email address",
    //         bcc: "valid email address",
    //         replyTo: "valid email address",
    //         subject: `${username}, Welcome to the ....`,
    //         html: `<p>${username}</p><p>Welcome to ....</p>
    //      <p>${process.env.CLIENT_BASE_URL}/confirm-email</p>`,
    //       });
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    // });
  },
};
