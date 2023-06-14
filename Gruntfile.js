var fs = require("fs");
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: ["build/"],
        replace: {
            html: {
                src: ["src/*.html"],
                dest: "build/",
                replacements: [
                    {
                        from: /{{[A-Z]+}}/g,
                        to: function (
                            matchedWord,
                            index,
                            fullText,
                            regexMatches
                        ) {
                            return fs.readFileSync(
                                "src/parts/" +
                                    matchedWord
                                        .replace(/{/g, "")
                                        .replace(/}/g, "")
                                        .toLowerCase() +
                                    ".html"
                            );
                        },
                    },
                ],
            },
        },
        copy: {
            js: { expand: true, src: "**", dest: "build/js/", cwd: "src/js/" },
            img: {
                expand: true,
                src: "**",
                dest: "build/img/",
                cwd: "src/img/",
            },
            css: {
                expand: true,
                src: "**",
                dest: "build/css/",
                cwd: "src/css/",
            },
            other: {
                expand: true,
                src: "**",
                dest: "build/",
                cwd: "src/others/",
            },
            favicon: {
                expand: true,
                src: "**",
                dest: "build/",
                cwd: "src/favicon/",
            },
        },
        htmllint: {
            all: ["build/*.html"],
        },
        watch: {
            all: {
                files: ["src/**"],
                tasks: ["replace", "copy", "test"],
                options: {
                    spawn: false,
                },
            },
        },
        cacheBust: {
            askName: {
                options: {
                    assets: ["css/**/*", "js/**/*", "img/**/*"],
                    baseDir: "./build",
                    deleteOriginals: true,
                },
                src: ["./build/*.html", "./build/css/*.css"],
            },
        },
        uglify: {
            options: {
                mangle: false,
                banner:
                    "/*! <%= pkg.name %> - v<%= pkg.version %> - " +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        src: ["build/js/*.js", "!build/js/*.min.js"],
                        dest: "build",
                        cwd: ".",
                        rename: function (dst, src) {
                            // To keep the source js files and make new files as `*.min.js`:
                            // return dst + '/' + src.replace('.js', '.min.js');
                            // Or to override to src:
                            return src;
                        },
                    },
                ],
            },
        },
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: "build/css",
                        src: ["*.css", "!*.min.css"],
                        dest: "build/css",
                    },
                ],
            },
        },
        htmlmin: {
            // Task
            dist: {
                // Target
                options: {
                    // Target options
                    removeComments: false,
                    collapseWhitespace: true,
                },
                files: [
                    {
                        expand: true,
                        cwd: "build",
                        src: ["*.html"],
                        dest: "build",
                    },
                ],
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-html");
    grunt.loadNpmTasks("grunt-text-replace");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-cache-bust");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");

    grunt.registerTask("test", ["htmllint"]);
    grunt.registerTask("default", [
        "clean",
        "replace",
        "copy",
        "cacheBust",
        "uglify",
        "cssmin",
        "htmlmin",
    ]);
};
