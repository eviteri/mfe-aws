process.env.NODE_ENV = 'development'

const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const webpackConfigDev = require('react-scripts/config/webpack.config')(
  'development'
)

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      historyApiFallback: true
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        'auth-mf': 'auth@http://localhost:8081/remoteEntry.js',
        'dashboard-mf': 'dashboard@http://localhost:8082/remoteEntry.js'
      },
      shared: packageJson.dependencies
    })
  ]
}
module.exports = merge(webpackConfigDev, devConfig)
