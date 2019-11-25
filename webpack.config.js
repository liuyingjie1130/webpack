const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss=require('mini-css-extract-plugin')
const devMode=process.env.NODE_ENV !== 'production';
module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                // use:['style-loader',{loader:'css-loader',options:{sourceMap:true}}]
                use:[miniCss.loader,{loader:'css-loader',options:{sourceMap:true}}]
            },
            {
                test:/\.(png|gif|jpg)$/,
                use:['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template:'./src/index.html'}),
        new miniCss({
            filename: devMode ? '[name].css' : '[name].[hash].css', // 设置最终输出的文件名
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        })
    ]
}