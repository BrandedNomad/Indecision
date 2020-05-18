//entry point -> output
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env)=>{
    const isProduction = env === 'production'
    return {
       mode:env,
       entry:'./src/index.js',
       output:{
           path: path.join(__dirname,"public/dist/"),
           filename:'bundle.js',
       },
       module:{
           rules:[{
               loader:'babel-loader',
               test:/\.js$/,
               exclude:/node_modules/
           },{

               test:/\.s?css$/,
               use:[

                   {
                       loader:MiniCssExtractPlugin.loader
                   },
                   {
                       loader:'css-loader',
                       options:{
                           sourceMap:true
                       }
                   },
                   {
                       loader:'sass-loader',
                       options:{
                           sourceMap:true
                       }
                   }
               ]

           }
           ]
       },
        plugins:[
            new MiniCssExtractPlugin()
        ],
       devtool: isProduction ? 'source-map':'inline-source-map',
       devServer:{
           contentBase: path.join(__dirname,'public'),
           publicPath:"/dist/"
       }

    }
}