const path = require('path');

module.exports = {
  entry: './src/javascript/index/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // Change 'dist' to your preferred output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'sound/', 
        },
      },
    ],
  },
};
