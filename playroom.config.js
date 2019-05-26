module.exports = {
  components: './src/components',
  outputPath: './dist/playroom',

  // Optional:
  title: 'Invoker',
  frameComponent: './src/components/StyleguideProvider/StyleguideProvider.js',
  widths: [320, 375, 768, 1366],
  port: 9000,
  openBrowser: true,
  exampleCode: ``,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2 // This fucking piece of shit ruined my freaking day!
              }
            },
            "sass-loader"
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { modules: false }],
                  '@babel/preset-react'
                ],
              },
            },
          ],
        },
        {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4)(\?.*)?$/,
          use: [
            'file-loader',
          ],
        },
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    }
  })
};