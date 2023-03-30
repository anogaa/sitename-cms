"use strict";

/**
 * subscription router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::subscription.subscription");

// module.exports = {
//   routes: [
//     {
//       method: "POST",
//       path: "/subscription/CREATE",
//       handler: "create-all-watchlist.createAllWatchlist",
//       config: {
//         policies: [],
//         middlewares: [],
//       },
//     },
//   ],
// };
