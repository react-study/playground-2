var path = require('path');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var compiler = webpack(config);

var serverOptions = {
    contentBase: path.resolve(__dirname, 'src'),
    progress: true,
    hot: true,
    watch: true,
    verbose: true,
    publicPath: config.URL,
    headers: { 'Access-Control-Allow-Origin': '*' },  
    //다른 도메인끼리는 리소스를 사용할 수 없는(Cross Origin Resource Sharing) 경우를 예외 시킨다.
    historyApiFallback: true,
    stats: {
        cached: true, //캐시사용 유무
        cachedAssets: true,  //
        chunks: true,  // 용량이 커질 시 분산시키는
        chunkModules: false,  //모듈은 제외
        colors: true,
        hash: false,
        reasons: true,  //
        timings: true,  //
        version: false  //
    }
};

var server = new webpackDevServer(compiler, serverOptions);

server.listen(config.PORT, function() {
    console.log('now listening ' + config.URL);
})
