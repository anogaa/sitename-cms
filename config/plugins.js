module.exports = {
  //
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 12,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        secure: false,
        port: 587,
        auth: {
          user: "harshmavani25@gmail.com",
          pass: "sthqrblcrzdvfxjt",
        },
      },
      settings: {
        defaultFrom: "harshmavani25@gmail.com",
        defaultReplyTo: "harshmavani25@gmail.com",
        testAddress: "harshmavani21@gmail.com",
      },
    },
  },

  "import-export-entries": {
    enabled: true,
  },
  "url-field": {
    enabled: true,
    resolve: "./src/plugins/url-field",
  },
};
