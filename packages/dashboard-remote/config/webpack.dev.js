/* eslint-disable @typescript-eslint/no-var-requires */
process.env.NODE_ENV = 'development'

const { merge } = require('webpack-merge')
const webpackConfigDev = require('react-scripts/config/webpack.config')(
  'development'
)
const packageJson = require('../package.json')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const mfeConfig = {
  output: {
    publicPath: 'http://localhost:8082/'
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      historyApiFallback: true
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardIndex': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}
module.exports = merge(webpackConfigDev, mfeConfig)
