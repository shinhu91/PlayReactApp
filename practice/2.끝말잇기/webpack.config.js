const path = require('path')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js']
    },

    entry: {
        app: './client' // client.jsx 에서 WordRelay를 이미 불러와서 사용중이기때문에 생략 가능
    },
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
                    '@babel/preset-react',
                ],
                plugins: ['react-refresh/babel']
            }
        }]
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devServer: {
        devMiddleware: {
            publicPath: '/dist/',
        },
        static: {
            directory: path.resolve(__dirname)
        },
        
        hot: true
    }

}