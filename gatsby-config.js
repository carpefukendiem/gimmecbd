module.exports = {
  siteMetadata: {
    title: 'Gimme CBD',
    desc: 'Your source for all things CBD'
  },
  plugins: [
  {
  	resolve: "gatsby-source-contentful",
  	options: {
  		spaceId: "qog90wm2owk8",
  		accessToken: "43a51b359fc99bea20b58d5033578a022a1f2d690467be5be0a8343aa7b60821"
  	}
  },
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components',
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "src",
      path: `${__dirname}/src/`
    }
  },
  "gatsby-transformer-sharp",
  "gatsby-plugin-sharp",
  "gatsby-transformer-remark"
  ],
};
