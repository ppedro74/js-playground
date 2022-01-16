const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        //path: './build',
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },

    module: {
        // loaders: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: 'babel-loader',
        //     query: {
        //         presets: ['es2015']
        //     }
        // }]
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        "presets": ['es2015']
                    }
                }
            }]
    }
    
};