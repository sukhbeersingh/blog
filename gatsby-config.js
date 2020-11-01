const siteMetadata = {
  title: `Dreamy Traveller blog`,
  description: `This is my life blog where I put down important things I learn.`,
  image: `to-change`,
  siteUrl: `https://sukhbeersingh-blog.netlify.app/`,
  siteLanguage: `en_CA`,
  siteLocale: `en_ca`,
  authorName: `Sukhbeer`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
