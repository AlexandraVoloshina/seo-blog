const  webpack = require('webpack'),
    path = require('path'),
    devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production' );


module.exports = {
    entry:  [
        "webpack-dev-server/client?http://localhost:8080/",
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/build/js/',
        publicPath: '/js/',
        filename: 'bundle.js'
    },



    watch: devBuild == true,
    devtool: devBuild ? "source-map" : null,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                },
                plugins: ['transform-runtime']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            { test: /\.json$/, loader: 'json' },
        ],

    },
    resolve : {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resovleLoader : {
        moduleDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: __dirname + '/build'
    }
};


if(!devBuild) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

