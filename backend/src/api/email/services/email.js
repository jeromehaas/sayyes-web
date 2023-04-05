'use strict';

const { createCoreService } = require('@strapi/strapi').factories;
const { dressRequestTemplate } = require('../templates/index');
const { appointmentRequestTemplate } = require('../templates/index');


module.exports = createCoreService('api::email.email', ({ strapi }) => ({

    async newDressRequest() {

        try {

            const emailTemplate = {
                subject: dressRequestTemplate.subject,
                text: dressRequestTemplate.text,
                html: dressRequestTemplate.html,
            };

            const emailConfigs = {
                to: 'yes@sayyes-bridal.ch',
                from: 'no-reply@sayyes-bridal.ch',
            };

            await strapi.plugins['email'].services.email.sendTemplatedEmail(
                emailConfigs,
                emailTemplate,
            );

        } catch (error) {
            console.log(error.message)
        };

    },

    async newAppointmentRequest() {

        try {

            const emailTemplate = {
                subject: appointmentRequestTemplate.subject,
                text: appointmentRequestTemplate.text,
                html: appointmentRequestTemplate.html,
            };

            const emailConfigs = {
                to: 'yes@sayyes-bridal.ch',
                from: 'no-reply@sayyes-bridal.ch',
            };

            await strapi.plugins['email'].services.email.sendTemplatedEmail(
                emailConfigs,
                emailTemplate,
            );

        } catch (error) {
            console.log(error.message)
        };

    },

}));