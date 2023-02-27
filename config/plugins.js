module.exports = {
  //
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  email: {
    provider: "Gmail",
    providerOptions: {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "harshmavani21@gmail.com",
        pass: "Harsh@0606",
      },
    },
    settings: {
      from: "harshmavani76@gmail.com",
      replyTo: "harshmavani76@gmail.com",
    },
  },
};
