process.env.NODE_ENV = 'production'

const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageJson = require('../package.json')
const webpackConfigProd = require('react-scripts/config/webpack.config')(
  'production'
)

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        'auth-mf': `auth@${domain}/auth/latest/remoteEntry.js`,
        'dashboard-mf': `dashboard@${domain}/dashboard/latest/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
}
module.exports = merge(webpackConfigProd, prodConfig)
