const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals')

const config = {
    name: 'server',

    entry: './server/index.js',
    externalsPresets: { node: true }, // ignore built in modules like path
    externals: [nodeExternals()], // ignore modules within node_modules
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: ['file-loader']
            },
        ]
    }
}

module.exports = merge(baseConfig, config);