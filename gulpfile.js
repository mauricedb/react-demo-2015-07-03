/**
 * Created by Maurice on 7/3/2015.
 */

var gulp = require('gulp');
var webpack = require("webpack");
var gutil = require('gulp-util');

gulp.task('send-message', function(){
    console.log('This is gulp!')
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration
        entry: "./app/app.js",
        output: {
            path: './wwwroot/app',
            filename: "app-bundle.js"
        },
        module: {
            loaders: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]
        }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('watch-js', function(){
    gulp.watch('./app/**/*.js', ['webpack'])
})

gulp.task('default', ['send-message', 'webpack', 'watch-js']);