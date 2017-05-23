//

path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: '#source-map', //浏览器控制台
    /* 输入文件 */
    entry: {
        main: './components/2017051705/index.js'
    },
    output: {
        /* 输出目录，没有则新建 */
        path: path.resolve(__dirname, '../m/2017051705/'),
        /* 静态目录，可以直接从这里取文件 */
        //publicPath: '/dist/',
        /* 文件名 */
        //filename: '[name].[hash:7].js'
        //filename: '[name].[hash].js'
        //filename: '[name].[chunkhash].js'
		
		filename: '[name].js'
		//,libraryTarget: "umd"
    },
    module: {
        /*loaders: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: /node_modules|bower_components/,
                loaders: ['babel-loader']
            }
        ]*/
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            /*{
                test: /\.js$/,
                loader: 'babel-loader',
                /!* 排除模块安装目录的文件 *!/
                exclude: /node_modules/
            }*/
            {
                test: /\.js$/,
                //排除模块安装目录的文件
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}]],
                        plugins: ['syntax-dynamic-import']
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        }),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false //注释
		})
    ]

};
