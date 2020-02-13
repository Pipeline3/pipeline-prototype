const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  webpack(config, options) {
    return config;
  },
  generateBuildId: () => hash,
  pageExtensions: ['tsx']
});
