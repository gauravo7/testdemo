var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    extractCSS = new ExtractTextPlugin("./[name].css", {
        allChunks: true
    });
extractGameCSS = new ExtractTextPlugin("./game.css", {
    allChunks: true
});
extractAdminCSS = new ExtractTextPlugin("./admin.css", {
    allChunks: true
});

var plugins = [
    extractCSS,
    extractAdminCSS,
    extractGameCSS,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js", Infinity),
    new webpack.optimize.DedupePlugin()
];

module.exports = {
    entry: {
        app: [
            "webpack-dev-server/client?http://localhost:8080/",
            "webpack/hot/dev-server",
            './src/frontend/index.js'
        ],
        vendor: [
            'jquery',
            'angular',
            'angular-ui-router',
            'angular-ui-bootstrap',
            'angular-messages',
            'angular-sanitize',
            'ng-file-upload',
            'angular-jwt',
            'videogular',
            'videogular-controls',
            'videogular-overlay-play',
            'videogular-poster',
            'videogular-buffering',
            'angular-smart-table',
            'bootstrap',
            'angular-cookies'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/public/modules/'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: "[id].js"
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        //extension: ['', '.js', '.css'],
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel?presets[]=es2015'
            },
            {
                test: /\.html$/,
                loader: "file?name=./partials/[name]-[hash:6].[ext]!extract!html",
                //loader: 'required?import[]=angular'
            },
            {
                test: /\.css$/,
                loader: extractCSS.extract("style", "css", 'postcss-loader', {
                    publicPath: "../"
                }),
                exclude: [
                    path.resolve('src/frontend/game'), path.resolve('src/frontend/admin')
                ],

            },
            {
                test: /\.css$/,
                loader: extractAdminCSS.extract("style", "css", 'postcss-loader', {
                    publicPath: "../"
                }),
                exclude: [
                    path.resolve('src/frontend/game'), path.resolve('src/frontend/public')
                ],

            },
            {
                test: /\.css$/,
                loader: extractGameCSS.extract("style", "css", 'postcss-loader', {
                    publicPath: "../"
                }),
                include: path.resolve('src/frontend/game')
            },
            {
                test: /\.scss$/,
                include: path.resolve('src/frontend/game'),
                loader: extractGameCSS.extract("style-loader", "css-loader!sass-loader")

            },
            {
                test: /\.(jpe?g|png|gif|mp3|mpeg)$/,
                loader: "file?name=./imgs/[name]-[hash:6].[ext]"
            },
            {
                test: /\.scss$/,
                //loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve('src/frontend/public'),
                loader: extractCSS.extract("style-loader", "css-loader!sass-loader"),
                exclude: [
                    path.resolve('src/frontend/game'), path.resolve('src/frontend/admin')
                ],
            },
            {
                test: /\.scss$/,
                //loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve('src/frontend/admin'),
                loader: extractAdminCSS.extract("style-loader", "css-loader!sass-loader"),
                exclude: [
                    path.resolve('src/frontend/game'), path.resolve('src/frontend/public')
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=./[name]-[hash:6].[ext]'
            }
            /*,
            { 
                test: /\.(woff2?|ttf|eot)$/, 
                loader: 'url?limit=10000' 
            }*/

        ]
    },
    plugins: plugins,
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        },
        host: 'localhost'
    }
};