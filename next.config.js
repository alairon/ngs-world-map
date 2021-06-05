module.exports = {
  future: {
    webpack5: true
  },
  i18n: {
    locales: ['en', 'jp'],
    defaultLocale: 'en',
    localDetection: false,
  },

  async redirects(){
    return([
      {
        source: '/',
        destination: '/map',
        locale: false,
        permanent: true,
      },
      {
        source: '/skillsim',
        destination: './skillSim',
        locale: false,
        permanent: true
      }
    ]);
  }
}
