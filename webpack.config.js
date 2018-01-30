var Encore = require('@symfony/webpack-encore');
var tailwindcss = require('tailwindcss');
var glob = require('glob-all');
var path = require('path');
var PurgecssPlugin = require('purgecss-webpack-plugin');

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 * https://github.com/FullHuman/purgecss-webpack-plugin
 */
class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g);
    }
}

Encore.cleanupOutputBeforeBuild()
    .setOutputPath('source/build/')
    .setPublicPath('/build')
    .enableLessLoader()
    .addEntry('js/site', './assets/js/main.js')
    .addStyleEntry('css/site', './assets/less/main.less')
    .enablePostCssLoader(function(options) {
        options.config = {
            path: 'postcss.config.js'
        };
    })
    .enableSourceMaps(!Encore.isProduction());

// PurgeCSS
// Encore.addPlugin(new PurgecssPlugin({
//     paths: glob.sync([
//         path.join(__dirname, "source/**/*.{twig,html,md}")
//     ]),
//     extractors: [
//         {
//             extractor: TailwindExtractor,
//             extensions: ['twig', 'html', 'md']
//         }
//     ]
// }));

module.exports = Encore.getWebpackConfig();
