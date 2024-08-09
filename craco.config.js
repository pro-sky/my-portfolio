const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.devServer = {
        ...webpackConfig.devServer,
        setupMiddlewares: (middlewares, devServer) => {
          if (!devServer) {
            throw new Error('webpack-dev-server is not defined');
          }

          // Add your custom middleware here
          // For example, you can add a proxy middleware:
          /*
          devServer.app.use('/api', (req, res) => {
            res.json({ custom: 'response' });
          });
          */

          return middlewares;
        },
      };

      return webpackConfig;
    },
  },
};