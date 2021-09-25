const path = require('path');
const moduleRules = require('./webpack.rules');
const Dotenv = require('dotenv-webpack');
const alias = require('./alias');

module.exports = (env, args) => {
  const objToDot = {
    path: './.env',
  };
  const dot = new Dotenv(objToDot);
  const ASSETS_URL = dot.definitions['process.env.ASSETS_URL'].replace(/[\\"]/g, '');

  const prepared = moduleRules();
  const config = {
    mode: 'development',
    entry: prepared.entry,
    output: {
      jsonpFunction: 'webpackJsonp' + Date.now(),
      path: path.resolve(__dirname, '../dist'),
      filename: 'assets/js/[name].js',
      pathinfo: false,
    },
    devtool: 'eval-source-map',
    optimization: prepared.optimization,
    module: prepared.rules,
    plugins: prepared.plugins,
    resolve: {
      alias,
    },
  };

  if (args.mode === 'development') {
    config.devServer = {
      compress: true,
      contentBase: path.resolve(__dirname, 'assets'),
      port: 3000,
    };
  }

  if (args.mode !== 'development') {
    config.output['publicPath'] = `${ASSETS_URL}/`;
  }

  return config;
};
