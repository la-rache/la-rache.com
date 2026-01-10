module.exports = function(eleventyConfig) {
    // Ignorer répertoires de backup et parts
    eleventyConfig.ignores.add("src/pages_old/**");
    eleventyConfig.ignores.add("src/parts/**");

    // Copier assets statiques
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy({"src/favicon": "/"});
    eleventyConfig.addPassthroughCopy({"src/others": "/"});

    // BrowserSync config
    eleventyConfig.setBrowserSyncConfig({
        files: [
            "_site/css/**/*.css",
            "_site/js/**/*.js"
        ],
        open: false,
        port: 8042,  // Garder le même port que Grunt
        notify: false,
        ui: false
    });

    // Watch additional folders
    eleventyConfig.addWatchTarget("src/css/");
    eleventyConfig.addWatchTarget("src/js/");

    // Config directories
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data"
        },
        templateFormats: ["njk", "html", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
