module.exports = {

    // RENDERS EVERY TIME AFTER A NEW DRESS REWUEST SUBMIT
    async afterCreate() {

        // DISPATCH MESSAGE
        strapi.service('api::email.email').newDressRequest();

    },

};