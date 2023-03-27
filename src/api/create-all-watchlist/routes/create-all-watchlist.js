module.exports = {
  routes: [
    {
      method: "POST",
      path: "/create-all-watchlist",
      handler: "create-all-watchlist.createAllWatchlist",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
