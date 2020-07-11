var gulp = require('gulp');
gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'dist/public/modules';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [rootDir + '/**/*.{png,jpg,gif}'],
    stripPrefix: rootDir
  }, callback);
});
