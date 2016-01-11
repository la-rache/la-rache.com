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
    }
  });

  grunt.loadNpmTasks('grunt-text-replace');
};

