const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, { mode: 'production',
resolve: {

  alias: {
    'componentes': path.resolve(__dirname, './app/components'),
  }} },


)
