module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    files: [
      { pattern: 'test-context.js', watched: false }
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'test-context.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
      },
      watch: true
    },

    webpackServer: {
      noInfo: true
    },

    reporters: [
      'progress',
      'html'
    ],
    htmlReporter: {
      outputDir:       'test_results', // where to put the reports
      templatePath:    null,           // set if you moved jasmine_template.html
      focusOnFailures: true,           // reports show failures on start
      namedFiles:      true,           // name files instead of creating sub-directories
      pageTitle:       null,           // page title for reports; browser info by default
      urlFriendlyName: false,          // simply replaces spaces with _ for files/dirs
      reportName:      'karma'         // report summary filename; browser info by default
    }

  });
};
