// const nodeExternals = require('webpack-node-externals')

module.exports = {
    stats: 'minimal',
    // externalsPresets: { node: true }, // ignore built in modules like paht, fs, etc
    // externals: [nodeExternals()], // ignore modules within node_modules
    //Tell webpack to run babel on every file it runs through
    resolve: {
        // ...rest of the resolve config
        // fallback: {
        //     "fs": 
        // }
        extensions: ['.js', '.jsx', '.cjs']
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
                use: 'file-loader'
            }
        ]
    },
}