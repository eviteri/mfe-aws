process.env.NODE_ENV = 'development'

const { merge } = require('webpack-merge')
const webpackConfigDev = require('react-scripts/config/webpack.config')(
  'development'
)
const packageJson = require('../package.json')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const mfeConfig = {
  output: {
    publicPath: 'http://localhost:8081/'
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      historyApiFallback: true
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'authentication',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthenticationIndex': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}
module.exports = merge(webpackConfigDev, mfeConfig)
