const path = require('path')
const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts")
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.base.js')

const paths = {
    src: {
        js: "./public/pub/js",
        scss: './public/pub/scss',
        img: './public/pub/images',
        video: './public/pub/video'
    },

    dist: {
        js: "./js",
        css: "./css",
        img: "./images",
        video: "./videos"
    }
};
const config = {
    name: "browser",
    devtool: 'eval-source-map',
    entry: {
        library: paths.src.scss + "/libs.scss",
        bundle: ['./client/Client.js', paths.src.js + '/index.js', paths.src.scss + "/index.scss"],
    },
    devtool: 'source-map',
    // externalsPresets: { node: true }, // ignore built in modules like paht, fs, etc
    // externals: [nodeExternals()], // ignore modules within node_modules

    output: {
        filename: paths.dist.js + "/[name].js",
        // filename: paths.dist.js + "/[name]/bundle.js",
        path: path.resolve(__dirname, 'public'),
    },
    // stats: {
    //     children: true,
    // },

    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                // use: ["style-laoder", "css-loader"],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    // {
                    //     loader: 'style-loader',
                    // },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     use: {
            //         loader: 'file-loader',
            //         options: {
            //             name: '[name].[ext]',
            //             outputPath: './fonts',
            //             publicPath: 'public',
            //         },
            //     }
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: paths.src.img, to: paths.dist.img,
                },
                {
                    from: paths.src.video, to: paths.dist.video,
                }
            ]
        }),
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: paths.dist.css + "/[name].css",
        }),
    ],
    // devServer: {
    //     contentBase: path.join(__dirname, "dist"),
    //     compress: true,
    //     port: process.env.PORT,
    // }
}

module.exports = merge(baseConfig, config)