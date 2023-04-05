'use strict';

/**
 * appointment-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appointment-request.appointment-request');
