const config = {
  urlPrefix: process.env.URL_PREFIX ? `/${process.env.URL_PREFIX}` : "",
  domain: process.env.DOMAIN,
  port: process.env.PORT,
};

module.exports = config;
