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

  // email: {
  //   config: {
  //     provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
  //     providerOptions: {
  //       apiKey:
  //         "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",
  //     },
  //     settings: {
  //       defaultFrom: "harshmavani21@gmail.com",
  //       defaultReplyTo: "harshmavani21@gmail.com",
  //       testAddress: "harshmavani.dignizant@gmail.com",
  //     },
  //   },
  // },

  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com", //SMTP Host
        port: 465,
        secure: false,
        // port: 587,
        auth: {
          user: "harshmavani25@gmail.com",
          pass: "9664888462",
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "harshmavani25@gmail.com",
        defaultReplyTo: "harshmavani25@gmail.com",
        testAddress: "harshmavani21@gmail.com",
      },
    },
  },

  // email: {
  //   config: {
  //     provider: "strapi-provider-email-smtp",
  //     providerOptions: {
  //       host: "smtp.gmail.com", //SMTP Host
  //       port: 587, //SMTP Port
  //       // secure: true,
  //       // auth: {
  //       //   user: "sutariyamaulik.dignizant@gmail.com",
  //       //   pass: "Digni@welcome10",
  //       // },
  //       user: "sutariyamaulik.dignizant@gmail.com",
  //       pass: "Digni@welcome1",
  //       // rejectUnauthorized: true,
  //       // requireTLS: true,
  //       // connectionTimeout: 1,
  //     },
  //     settings: {
  //       defaultFrom: "sutariyamaulik.dignizant@gmail.com",
  //       defaultReplyTo: "sutariyamaulik.dignizant@gmail.com",
  //       testAddress: "harshmavani.dignizant@gmail.com",
  //     },
  //   },
  // },

  // email: {
  //   config: {
  //     provider: "sendmail",
  //     providerOptions: {
  //       host: "smtp.gmail.com",
  //       port: 587,
  //       auth: {
  //         user: "harshmavani25@gmail.com",
  //         pass: "9664888462",
  //       },
  //     },
  //     settings: {
  //       defaultFrom: "harshmavani25@gmail.com",
  //       defaultReplyTo: "harshmavani25@gmail.com",
  //       testAddress: "harshmavani.dignizant@gmail.com",
  //     },
  //     // verification: {
  //     //   emailTemplate: "email-verification",
  //     //   sender: "harshmavani21@gmail.com",
  //     //   require: true,
  //     // },
  //   },
  // },

  // email: {
  //   provider: "Gmail",
  //   providerOptions: {
  //     host: "smtp.gmail.com",
  //     port: 587,
  //     auth: {
  //       user: "harshmavani21@gmail.com",
  //       pass: "Harsh@0606",
  //     },
  //   },
  //   settings: {
  //     from: "harshmavani76@gmail.com",
  //     replyTo: "harshmavani76@gmail.com",
  //   },
  // },
};
