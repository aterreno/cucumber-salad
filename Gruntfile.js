module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-cucumber');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cucumberjs: {
      src: 'features',
      options: {
        steps: 'features/step_definitions',
        format: 'pretty',
        tags: grunt.option('cucumbertags')
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'features/**/*.js'],
      options: {
        "unused": true,
        "maxerr": 50,
        "bitwise": true,
        "curly": true,
        "eqeqeq": true,
        "forin": true,
        "freeze": true,
        "indent": 2,
        "noarg": true,
        "noempty": true,
        "nonbsp": true,
        "undef": true,
        "node": true,
        "globals": {}
      }
    }
  });

  process.env.env = grunt.option('env') || 'test';

  process.env.debug = grunt.option('debug') || false;

  grunt.registerTask('default', 'jshint', 'cucumberjs');
};