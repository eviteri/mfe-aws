/* eslint-disable @typescript-eslint/no-var-requires */
process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const packageJson = require('../package.json')
const CopyWebpackModule = require('copy-modules-webpack-plugin')
let webpackConfigDev = require('react-scripts/config/webpack.config')(
  'development'
)
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// this one is optional, just for better feedback on build
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const green = text => {
  return chalk.green.bold(text)
}

webpackConfigDev = {
  ...webpackConfigDev,
  output: {
    publicPath: 'http://localhost:8084/'
  },
  devServer: {
    port: 8084,
    historyApiFallback: {
      historyApiFallback: true
    }
  },
  plugins: [
    ...webpackConfigDev.plugins,
    new CopyWebpackModule({
      destination: 'webpack_modules',
      includePackageJsons: true
    }),
    new ProgressBarPlugin({
      format: `${green('analyzing...')} ${green('[:bar]')}${green(
        '[:percent]'
      )}${green('[:elapsed seconds]')} - :msg`
    }),
    new ModuleFederationPlugin({
      name: 'accountManagement',
      filename: 'remoteEntry.js',
      exposes: {
        './AccountManagementIndex': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

// actually running compilation and waiting for plugin to start the process
webpack(webpackConfigDev, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err)
  }
})
