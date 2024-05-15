const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})

let nextraConfig = withNextra()
nextraConfig.assetPrefix = 'https://jthuang-nunu.github.io/nextra-ghpages-template'
module.exports = nextraConfig