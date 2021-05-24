const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");

module.exports = {
  future: {
    webpack5: true
  },

  async redirects(){
    return([{
      source: '/',
      destination: '/ngs/map',
      permanent: true,
    }]);
  }
}
