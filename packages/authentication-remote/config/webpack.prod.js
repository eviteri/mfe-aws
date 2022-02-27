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
    publicPath: `${domain}/auth/latest/`
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthIndex': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}
module.exports = merge(webpackConfigProd, prodConfig)
