const withMDX = require('@next/mdx')();
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const hash = process.env.GIT_HASH;

module.exports = withMDX({
  webpack(config, { buildId, dev, isServer, webpack }) {

    if(dev) {
      // Disable minimizer
      config.optimization.minimize = false;
    }

    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
      };
    }

    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
  },
  generateBuildId: () => hash,
  extension: /\.mdx?$/,
  pageExtensions: ['tsx', 'js', 'jsx', 'md', 'mdx']
});
