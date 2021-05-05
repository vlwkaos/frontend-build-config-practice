const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    // attach the presets to the loader (most projects use .babelrc file instead)
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                    plugins: [
                        ['@babel/plugin-proposal-class-properties'],
                        ['babel-plugin-styled-components', {}],
                        ['lodash'],
                    ],
                },
            },
        ],
    },
    stats: {
        colors: true,
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
    ],
};
