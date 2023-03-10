'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('url-field')
      .service('myService')
      .getWelcomeMessage();
  },
});
