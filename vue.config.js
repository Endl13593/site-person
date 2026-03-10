const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    // Disable source maps in production for smaller bundle size
    productionSourceMap: false,
    
    configureWebpack: () => {
        if (process.env.NODE_ENV !== 'production') return;
        
        const config = {
            // Optimize bundle splitting
            optimization: {
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            priority: 10,
                        },
                    },
                },
            },
            plugins: []
        };
        
        // Only enable prerender if ENABLE_PRERENDER=true
        if (process.env.ENABLE_PRERENDER === 'true') {
            config.plugins.push(
                new PrerenderSPAPlugin({
                    staticDir: path.resolve(__dirname, 'dist'),
                    routes: ['/'],
                    renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
                        renderAfterTime: 5000,
                        headless: true
                    })
                })
            );
        }
        
        return config;
    },
    
    // Optimize CSS extraction
    css: {
        extract: {
            ignoreOrder: true,
        },
    },
}