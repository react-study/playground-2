const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const compiler = webpack(config);

const serverOptions = {
    contentBase: path.resolve(__dirname, 'src'),
    progress: true,
    hot: true,
    watch: true,
    verbose: true,
    publicPath: config.URL,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    stats: {
        cached: true,
        cachedAssets: true,
        chunks: true,
        chunkModules: false,
        colors: true,
        hash: false,
        reasons: true,
        timings: true,
        version: false
    }
};

const server = new WebpackDevServer(compiler, serverOptions);

server.listen(config.PORT, function() {
    console.log('now listening ' + config.URL);
});
