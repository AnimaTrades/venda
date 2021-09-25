const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const TextReplaceHtmlWebpackPlugin = require('text-replace-html-webpack-plugin');
const modules = require('./entries');

const minify = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
};

module.exports = () => {
  const objToDot = {
    path: './.env',
  };
  const dot = new Dotenv(objToDot);
  const htmlModules = [];
  modules.forEach((module) => {
    if (module.filename && module.template) {
      htmlModules.push(
        new HtmlWebpackPlugin({
          filename: module.filename,
          template: module.template,
          // chunks: module.chunks,
          minify,
          // chunksSortMode: 'none',
        })
      );
    }
  });

  const scripts = new ScriptExtHtmlWebpackPlugin({
    sync: '[name]',
    // descomentar para deixar o carregamento async
    // defaultAttribute: 'async',
    preload: 'vendors',
  });

  const miniCss = new MiniCssExtractPlugin({
    filename: 'assets/css/[name].css',
  });

  const textReplace = new TextReplaceHtmlWebpackPlugin({
    replacementArray: [
      {
        searchString: '@@ANALYTICS',
        replace: "<script>console.log('Hello');</script>",
      },
    ],
  });

  return [dot, miniCss, ...htmlModules, textReplace, scripts];
};
