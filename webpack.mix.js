let mix = require("laravel-mix");
const fs = require("fs");
const imageInliner = require("postcss-image-inliner");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.options({
  processCssUrls: true,
  postCss: [
    imageInliner({
      assetPaths: ["src"],
      maxFileSize: 1024 * 1024 * 10,
      b64Svg: true,
      strict: false,
    }),
  ],
});
mix.setPublicPath("dist");
mix.js("src/main.js", "dist/app.js");
mix.sass("src/main.scss", "dist/app.css");
mix.setResourceRoot("src/");
mix.browserSync({
  proxy: "https://nulledbb.com",
  files: ["dist/app.css"],
  serveStatic: ["dist"],
  https: true,
  snippetOptions: {
    rule: {
      match: /<\/head>/i,
      fn: function (snippet, match) {
        return (`<link rel="stylesheet" type="text/css" href="/app.css" />
        <script src="/app.js" type="text/javascript"></script>` +
          snippet +
          match
        );
      },
    }
  },
});
mix.then(() => {
  const appCss = fs.readFileSync("dist/app.css").toString();
  fs.writeFileSync(
    "dist/app.user.css",
    `/* ==UserStyle==
@name         NulledBB 4 - Theme
@namespace    venipa.net
@author       Venipa <admin@venipa.net>
@version      0.1.1
@license      MIT
@updateUrl    https://venipa.github.io/nulledbb4-theme/dist/app.user.css
@preprocessor default
==/UserStyle== */
    @-moz-document regexp("^https:\\/\\/nulledbb.com[/](.*)") {\n${appCss}\n}`
  );
  const appJs = fs.readFileSync("dist/app.js").toString();
  fs.writeFileSync(
    "dist/app.user.js",
    `// ==UserScript==
    // @name         NulledBB4 - Enhancements
    // @namespace    https://venipa.net/
    // @version      0.1
    // @description  replaces some jquery stuff with better stuff
    // @author       Venipa <admin@venipa.net>
    // @match        https://nulledbb.com/*
    // @updateUrl    https://venipa.github.io/nulledbb4-theme/dist/app.user.js
    // @grant        none
    // ==/UserScript==
    
    (function() {
        'use strict';
    
        ${appJs}
    })();`
  );
});
global.Mix.manifest.refresh = (_) => void 0;
// mix.webpackConfig({
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|gif)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 1024 * 1024 * 3
//             }
//           }
//         ]
//       }
//     ]
//   }
// });

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.dump(); <-- Dump the generated webpack config object t the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
