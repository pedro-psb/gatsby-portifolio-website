module.exports = {
  plugins: ['gatsby-plugin-mantine',
    {
      resolve: 'gatsby-theme-blog',
      options: {
        basePath: '/blog'
      }
    }
  ],
};
