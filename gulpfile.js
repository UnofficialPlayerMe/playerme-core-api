var gulp     = require('gulp');
var path     = require('path');
var webpack  = require('webpack-stream');
var minify   = require('gulp-minify');

var Utils = require('playerme-core-utils');

//////////////////////////////////////

gulp.task('default', ['build']);
gulp.task('build', ['build:vendor', 'build:source']);

gulp.task('build:source', function() {
    return gulp.src(
        'src/entry.js'
    ).pipe(
        webpack({
            output: {
                filename: 'playerme.api.js',
                library: ['PlayerMe', 'API']
            },
            module: {
                loaders: [
                    {test: /\.js$/, loader: 'babel'}
                ]
            },
            externals:{"player-core-models":"PlayerMe.models"}
        })
    )
    .pipe(
        minify()
    )
    .pipe(
        gulp.dest('dist/')
    );
});

gulp.task('build:vendor', function(){
    return gulp.src(
        'node_modules/playerme-core-models/dist/**.js'
    ).pipe(
        gulp.dest('dist')
    );
});

gulp.task('test', function (done) {
    Utils.Gulp.setupNotifier(require('node-notifier'));
    Utils.Gulp.setupKarma(require('karma'));
    Utils.Gulp.runKarma(done, true);
});
gulp.task('tdd', function (done) {
    Utils.Gulp.setupNotifier(require('node-notifier'));
    Utils.Gulp.setupKarma(require('karma'));
    Utils.Gulp.runKarma(done, false);
});