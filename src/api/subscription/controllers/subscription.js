"use strict";

/**
 * subscription controller
 */
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::subscription.subscription",
  ({ strapi }) => ({
    async create(ctx) {
      const { number } = ctx.request.body;
      const token = await stripe.tokens.create({
        card: {
          number: number,
          exp_month: 3,
          exp_year: 2024,
          cvc: "314",
        },
      });
      // return token;
      const payment = await stripe.charges.create({
        amount: 10 * 100,
        currency: "USD",
        source: token.id,
        description: "description",
      });
      return payment;
    },
  })
);

module.exports = createCoreController("api::subscription.subscription");
