module.exports = {

	async afterCreate() {

		strapi.service('api::email.email').newAppointmentRequest();

	},

};
