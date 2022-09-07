const mix = require('laravel-mix');

require("laravel-mix-tailwind");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass("resources/sass/app.scss", "public/css/app.css")
    .tailwind("./tailwind.config.js")
    // .postCss("node_modules/tippy.js/dist/tippy.css","public/css/app.css")
     .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}
mix.webpackConfig({
    stats: {
        children: true,
    },
});

