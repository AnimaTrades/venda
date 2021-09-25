const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                useBuiltIns: 'entry',
                corejs: 3,
              },
            ],
          ],
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts',
              publicPath: '../fonts',
              emitFile: true,
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
          'resolve-url-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img',
              publicPath: '../img',
              emitFile: true,
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [{ removeTitle: true }, { convertColors: { shorthex: false } }, { convertPathData: false }],
            },
          },
        ],
      },
      {
        test: /\.(?:png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img',
              publicPath: '../img',
              emitFile: true,
            },
          },
        ],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/songs',
          publicPath: 'assets/songs',
          emitFile: true,
        },
      },
    ],
  };
};
