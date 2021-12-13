const path = require('path')
const { webpack } = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'BaseBall-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.jsx', '.js']
    },

    entry: {
        app: ['./client']
    }, // 입력
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions']
                        },
                        debug: true
                    }],
                    '@babel/preset-react'
                ],
                plugins: []
            }
        }]
    },
    plugins : [
        new RefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    }, // 출력
    devServer : {
        devMiddleware: {
            publicPath: '/dist/',
        },
        static: {
            directory: path.resolve(__dirname)
        },
        hot: true
    }
}