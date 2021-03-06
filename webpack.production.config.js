/**
 * Created by weitan on 2017/11/17.
 */
let webpack = require('webpack');
let path = require('path');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    entry:path.resolve(__dirname,'./src/main.js'),
    output:{
        path:path.resolve( __dirname + "/dist"),
        filename: "[name].[hash].js",
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.less$/, exclude: /node_modules/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/, exclude: /node_modules/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'postcss-loader']
                })},
            {
                test: /\.scss/, exclude: /node_modules/, use: ExtractTextPlugin.extract({
                use:[ 'css-loader','sass-loader'],
                fallback: 'style-loader',
            })
            },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
                eslint:{
                    configFile: '.eslintrc'
                },
                devServer: {
                    proxy: {
                        // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
                        // koa 代码在 ./mock 目录中，启动命令为 npm run mock
                        '/api': {
                            target: 'http://localhost:3000',
                            secure: false
                        }
                    },
                    contentBase: "./public", //本地服务器所加载的页面所在的目录
                    historyApiFallback: true, //不跳转
                    inline: true, //实时刷新
                    hot: true  // 使用热加载插件 HotModuleReplacementPlugin
                },
                debug: true
            }
        }),
        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.tmpl.html'
        }),
        // 分离CSS和JS文件
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                //supresses warnings, usually from module minification
                warnings: false
            }
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash].js'
        }),

        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],
}