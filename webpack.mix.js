let mix = require('laravel-mix')

require('laravel-mix-purgecss')

mix.disableNotifications()
  .postCss('resources/css/app.sss', 'source/dist/css', [
    require('postcss-import')(),
    require('tailwindcss')('tailwind.config.js'),
    require('postcss-nested')(),
  ])
  .extract(['highlightjs', 'vue'])
  .js('resources/js/app.js', 'source/dist/js')
  .browserSync({
    proxy: 'localhost:8000',
    files: [
      'output_*/**/*'
    ],
    notify: false,
    open: false
  })
  .purgeCss({
    folders: ['resources', 'output_*'],
    whitelistPatterns: [/language/, /hljs/],
    whitelistPatternsChildren: [/^markdown$/]
  })

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.sss?$/,
        loader: 'postcss-loader'
      }
    ]
  }
})
