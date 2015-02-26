module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
        app_name: "BBC Radio 1xtra",
        version: '0.11.6',
        build_dir: './build',
        mac_icns: './icon/icon.icns',
        platforms: ['osx32', 'win32']
      },
      src: [
        './node_modules/**',
        '!./node_modules/grunt*/**',
        './package.json',
        './README.md',
        './icon/icon.icns',
        './index.html'
      ]
    },
    clean: {
        main: ['build/releases'],
        cache: ['build/cache']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', 'nodewebkit');

};
