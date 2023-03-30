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

    extensionService.use(({ strapi }) => ({
      typeDefs: `
      type Mutation {
        createallwatchlist(userid: String!, scorecardid: String!): WatchlistEntityResponse
      }

      type WatchlistEntityResponse {
        success: String!
      }
    `,
      resolvers: {
        Mutation: {
          createallwatchlist: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;
              try {
                var scorecardidArry = [];
                scorecardidArry = JSON.parse(args.scorecardid);
                for (let i = 0; i < scorecardidArry.length; i++) {
                  const data = {
                    userid: args.userid,
                    scorecardid: scorecardidArry[i],
                  };

                  await strapi.db
                    .query("api::watchlist.watchlist")
                    .create({ data: data });
                }

                // const response = toEntityResponse({ success: true });
                return { success: "true" };
              } catch (err) {
                // const response = toEntityResponse(err);
                return { success: "false" };
              }
            },
          },
        },
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {},
};
