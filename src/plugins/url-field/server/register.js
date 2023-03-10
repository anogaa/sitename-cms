"use strict";

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: "url-field",
    plugin: "url-field",
    type: "string",
  });
};
