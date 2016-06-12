var make = function(filename, target){
    // https://webpack.github.io/docs/configuration.html
    var jsExcludes = []; //[/node_modules/, /bower_components/];
    return {
        output: {
            filename: filename,
            library: ['PlayerMe', 'API']
        },
        module: {
            loaders: [
                {test: /\.js$/, loader: 'babel', exclude: jsExcludes}
            ]
        },
        externals:{
            "player-core-models": "PlayerMe.models"
        },
        target: target
    };
};

var makeWeb = function(filename){
    return make(filename, 'web');
};
var makeNode = function(filename){
    return make(filename, 'node');
};

module.exports = {
    make: make,
    makeWeb: makeWeb,
    makeNode: makeNode
};