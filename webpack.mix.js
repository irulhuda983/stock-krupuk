let mix = require("laravel-mix");
let path = require("path");

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            "@": path.resolve(__dirname, "resources/js")
        }
    }
});

mix.js("resources/js/app.js", "public/js")
    .vue({ version: 2 })
    .postCss("resources/css/app.css", "public/css", [
        require("tailwindcss"),
    ]);

if(mix.inProduction()) {
    mix.version();
}