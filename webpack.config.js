const path = require('path');

module.exports = {
    entry: {
        'javascripts/build.js': './src/indes.jsx', 
    },
    output: {
        filename: '[name]',
        path: path.join(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rule: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader: 'babel-loader',
            },
        ],
    },
};
