'use strict';

/**
 * sitename-package service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sitename-package.sitename-package');
