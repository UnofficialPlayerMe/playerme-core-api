var gulp          = require('gulp');
var path          = require('path');
var rename        = require('gulp-rename');

var webpackStream = require('webpack-stream');
var minify        = require('gulp-minify');

var nodemon       = require('gulp-nodemon');

var Log = require('./gulp/logging');
var Utils = require('playerme-core-utils');

var Env = {};
try{
    Env = require('./env');
}catch(e){}

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

    var env = {
        'NODE_ENV': 'development'
    };
    for (var envKey in Env) env[envKey] = Env[envKey];

    if (env.PLAYER_USERNAME && env.PLAYER_BASE_URL){
        Log.green('Using "'+env.PLAYER_USERNAME+'" on "'+env.PLAYER_BASE_URL+'".');
    }

    var stream = nodemon({
        env: env
    ,   script: './dist/node-playerme.api.js'
    ,   watch: 'src'
    ,   ext: 'js'
//  ,   ignore: ['ignored.js']
    ,   tasks: ['build:node']
    });

    stream.on('start',   function(){ Log.cyan(   '[nodemon] started'   ); });
    stream.on('restart', function(){ Log.magenta('[nodemon] restarted' ); });
    stream.on('exit',    function(){ Log.cyan(   '[nodemon] quit'      ); });
    stream.on('crash',   function(){ Log.red(    '[nodemon] crashed'   ); });

    return stream;
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