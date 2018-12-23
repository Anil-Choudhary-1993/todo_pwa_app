/* config-overrides.js */

const WorkBoxWebPackPlugin = require('workbox-webpack-plugin')

module.exports = function override(config, env) {
    
  config.plugins = config.plugins.map( plugin => {
    if(plugin.constructor.name === 'GenerateSW'){
      return new WorkBoxWebPackPlugin.InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'service-worker.js'
      })
    }
    return plugin
  })

    return config;
  }