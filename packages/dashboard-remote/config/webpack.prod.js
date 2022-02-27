process.env.NODE_ENV = 'production'

const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const webpackConfigProd = require('react-scripts/config/webpack.config')(
  'production'
)

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `${domain}/dashboard/latest/`
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
module.exports = merge(webpackConfigProd, prodConfig)
