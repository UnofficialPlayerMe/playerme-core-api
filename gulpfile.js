var gulp     = require('gulp');
var path     = require('path');
var webpack  = require('webpack-stream');
var minify   = require('gulp-minify');

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
        'node_modules/playerme-core-models/dist/*.js'
    ).pipe(
        gulp.dest('dist')
    );
});