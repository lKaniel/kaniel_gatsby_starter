module.exports = {
    siteMetadata: {
        title: "Kaniel's starter",
        description: "Kaniel's starter website",
        lang: "en"
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-redux`,
            options: {
                pathToCreateStoreModule: './src/store/createStore',
            },
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: "Comfortaa",
                            variants: ["400", "700"],
                            subsets: ["latin", "cyrillic"]
                        },
                    ],
                },
            },
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve(`./src/components/Layout/Layout`),
            },
        },
    ],
}
