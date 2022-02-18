process.env.NODE_ENV = 'development'

const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const webpackConfigDev = require('react-scripts/config/webpack.config')(
  'development'
)
const packageJson = require('../package.json')

const devConfig = {
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
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthIndex': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}
module.exports = merge(webpackConfigDev, devConfig)
