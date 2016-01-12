var fs = require('fs');
module.exports = function(grunt) {
  grunt.initConfig({
    replace: {
      html: {
        src: ['src/*.html'],
        dest: 'build/',
        replacements: [{
          from: /{{[A-Z]+}}/g,
          to: function (matchedWord, index, fullText, regexMatches) {
            return fs.readFileSync('src/parts/'+ matchedWord.replace(/{/g, '').replace(/}/g, '').toLowerCase() + '.html');
          }
        }]
      }
    },
    copy: {
      js: { expand: true, src: '**', dest: 'build/js/', cwd: 'src/js/' },
      img: { expand: true, src: '**', dest: 'build/img/', cwd: 'src/img/' },
      css: { expand: true, src: '**', dest: 'build/css/', cwd: 'src/css/' },
      other: { expand: true, src: '**', dest: 'build/', cwd: 'src/others/' },
      favicon: { expand: true, src: '**', dest: 'build/', cwd: 'src/favicon/' }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.registerTask('default', ['replace', 'copy']);
};

