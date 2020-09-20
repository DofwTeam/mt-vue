module.exports = {
    outputDir: __dirname + '/server/public',
    // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    devServer: {
        open: true,
        port: 5000,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                // pathRewrite: {
                //     '^/api': ''
                // },
                changeOrigin: true
            }
        }
    }
}
