module.exports = {
  createAllWatchlist: async () => {
    try {
      const data = [
        {
          userid: 3,
          scorecardid: 40,
        },
        {
          userid: 3,
          scorecardid: 43,
        },
      ];

      const entries = await strapi.db
        .query("api::watchlist.watchlist")
        .createMany({ data: data });
      console.log(("entries", entries));
      return data;
    } catch (err) {
      return err;
    }
  },
};
