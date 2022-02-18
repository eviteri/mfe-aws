process.env.NODE_ENV = 'development'

const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const webpackConfigDev = require('react-scripts/config/webpack.config')(
  'development'
)
const packageJson = require('../package.json')

const devConfig = {
  output: {
    publicPath: 'http://localhost:8083/'
  },
  devServer: {
    port: 8083,
    historyApiFallback: {
      historyApiFallback: true
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shared',
      filename: 'remoteEntry.js',
      exposes: {
        './SharedIndex': './src/rootShared'
      },
      shared: packageJson.dependencies
    })
  ]
}
module.exports = merge(webpackConfigDev, devConfig)
