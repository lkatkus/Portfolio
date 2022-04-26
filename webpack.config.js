const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
  },
  devServer: {
    host: '0.0.0.0',
    useLocalIp: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|mp3)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};
