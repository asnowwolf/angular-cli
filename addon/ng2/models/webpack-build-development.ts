import { CliConfig } from './config';
const path = require('path')

export const getWebpackDevConfigPartial = function(projectRoot: string, sourceDir: string) {
  return {
    debug: true,
    devtool: 'source-map',
    output: {
      path: path.resolve(projectRoot, './dist'),
      filename: 'js/[name].bundle.js',
      sourceMapFilename: 'js/[name].bundle.map',
      chunkFilename: 'js/[id].chunk.js'
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'source-map-loader'
        }
      ]
    },
    tslint: {
      emitErrors: false,
      failOnHint: false,
      resourcePath: path.resolve(projectRoot, `./${sourceDir}`)
    },
    node: {
      fs: 'empty',
      global: 'window',
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
