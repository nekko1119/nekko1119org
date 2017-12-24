const path = require('path');

module.exports = {
  entry: path.join('src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    root: path.resolve('.'),
    extensions: [
      '.js', '.jsx', '.ts', '.tsx', '.css'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
