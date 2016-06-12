var gulp          = require('gulp');
var path          = require('path');
var webpackStream = require('webpack-stream');
var minify        = require('gulp-minify');
var nodemon       = require('gulp-nodemon');

var Log = require('./gulp/logging');

var Utils = require('playerme-core-utils');

//////////////////////////////////////

gulp.task('default', ['build:web']);

gulp.task('build:web', ['build:web:vendor', 'build:web:source']);
gulp.task('build:web:source', function() {
    var makeWeb = require('./gulp/webpack').makeWeb;
    return gulp.src(
        'src/entry.js'
    ).pipe(
        webpackStream(
            makeWeb('playerme.api.js')
        )
    ).pipe(
        minify()
    ).pipe(
        gulp.dest('dist/')
    );
});
gulp.task('build:web:vendor', function(){
    return gulp.src(
        'node_modules/playerme-core-models/dist/**.js'
    ).pipe(
        gulp.dest('dist')
    );
});

gulp.task('build:node', function() {
    var makeNode = require('./gulp/webpack').makeNode;
    return gulp.src(
        'src/node-entry.js'
    ).pipe(
        webpackStream(
            makeNode('node-playerme.api.js')
        )
    ).pipe(
        minify()
    ).pipe(
        gulp.dest('dist/')
    );
});

gulp.task('run:node', function() {
    var instance = nodemon({
        script: './dist/node-playerme.api.js'
    ,   ext: 'html js'
    ,   env: { 'NODE_ENV': 'development' }
//  ,   ignore: ['ignored.js']
    ,   tasks: ['build:node']
    });

    instance.on('start',   function(){ Log.cyan(   '[nodemon] started'   ); });
    instance.on('restart', function(){ Log.magenta('[nodemon] restarted' ); });
    instance.on('exit',    function(){ Log.cyan(   '[nodemon] quit'      ); });
    instance.on('crash',   function(){ Log.red(    '[nodemon] crashed'   ); });
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