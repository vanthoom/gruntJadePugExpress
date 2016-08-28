var path = require('path');
module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['**/*.jade', '**/*.pug'],
      tasks: ['express:dev']
    },
    express: {
      dev: {
        options: {
          script: './src/express.js'
        }
      }
    }
  });


  grunt.registerTask('default', ['express:dev', 'watch']);

};