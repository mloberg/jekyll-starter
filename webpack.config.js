const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

process.env.NODE_ENV = Encore.isProduction() ? 'production' : 'dev';

Encore
  .setOutputPath('assets/')
  .setPublicPath('/assets')
  .addStyleEntry('css/app', './_assets/css/app.css')
  .addEntry('js/app', './_assets/js/app.js')
  .addEntry('js/test.config', './_assets/js/test.config.js')
  .enablePostCssLoader()
  .disableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction());

module.exports = Encore.getWebpackConfig();
