const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
    assetPrefix: 'https://hugo-serra.github.io/nextra-ghpages-template',
})
module.exports = withNextra()