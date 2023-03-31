module.exports = ({env}) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-do", 
      providerOptions: {
        key: env('SPACE_ACCESS_KEY_ID'),
        secret: env('SPACE_ACCESS_SECRET'),
        endpoint: env('SPACE_ENDPOINT'),
        space: env('SPACE_BUCKET'),
      }
    },
  }, 
})