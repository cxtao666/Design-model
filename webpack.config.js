const htmlWebpackPlugin  = require ('html-webpack-plugin')

module.exports = {
    mode:"development",
    entry:'./src/index.js',
    output:{
        path:__dirname,
        filename:'./dist/bundle.js'
    },
    plugins:[new htmlWebpackPlugin ({
        template:'./src/index.html'
    })],
    devServer:{
        port:4000,
        open:true,
        contentBase:'./dist',
        hot:true
    }

}

