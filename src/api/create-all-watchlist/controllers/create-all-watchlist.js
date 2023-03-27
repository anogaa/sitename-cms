module.exports = {
  async createAllWatchlist(ctx, next) {
    try {
      const data = await strapi
        .service("api::create-all-watchlist.create-all-watchlist")
        .createAllWatchlist();
      // console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Post report controller error", { moreDetails: err });
    }
  },
};
