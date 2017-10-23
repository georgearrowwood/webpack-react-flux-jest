import webpack from 'webpack';
import path from 'path';

const host = 'http://0.0.0.0:8898';

const config = {
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, '../../dist'),
    filename: 'bundle.js',
    publicPath: `${host}/dist/`,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  config: {
    context: path.resolve(__dirname, '../../app'),
    entry: [
      'babel-regenerator-runtime',
      'react-hot-loader/patch',
      `webpack-dev-server/client?${host}`,
      'webpack/hot/only-dev-server',
      './client',
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../../dist'),
      publicPath: `${host}/dist/`,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    watchOptions: { poll: true },
    module: {
      loaders: [
        { test: /\.(js|jsx)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
          config: JSON.stringify('development'),
          ENV: JSON.stringify('browser'),
          API_URL: JSON.stringify(process.env.API_URL),
        },
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
};

export default config;
