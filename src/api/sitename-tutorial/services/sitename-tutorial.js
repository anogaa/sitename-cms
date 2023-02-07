'use strict';

/**
 * sitename-tutorial service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sitename-tutorial.sitename-tutorial');
