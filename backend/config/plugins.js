module.exports = ({ env }) => {
	return {
		upload: {
			config: {
				provider: 'strapi-provider-upload-do',
				providerOptions: {
					key: env('SPACE_ACCESS_KEY_ID'),
					secret: env('SPACE_ACCESS_SECRET'),
					endpoint: env('SPACE_ENDPOINT'),
					space: env('SPACE_BUCKET'),
				},
			},
		},
		email: {
			config: {
				provider: 'nodemailer',
				providerOptions: {
					host: env('SMTP_HOST'),
					port: env('SMTP_PORT'),
					auth: {
						user: env('SMTP_USERNAME'),
						pass: env('SMTP_PASSWORD'),
					},
				},
				settings: {
					defaultFrom: 'no-reply@sayyes-bridal.ch',
					defaultReplyTo: 'yes@ysayyes-bridal.ch',
				},
			},
		},
	};
};
