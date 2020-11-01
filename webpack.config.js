const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./source/js/main.js`,
  output: {
    filename: `main.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
      },
    ],
  },
  devtool: `source-map`,
};
