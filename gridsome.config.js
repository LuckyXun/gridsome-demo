/*
 * @Author: XunL
 * @Date: 2021-07-26 23:29:44
 * @LastEditTime: 2021-07-27 02:26:36
 * @Description: file content
 */
// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag','image-list'],
        singleTypes: ['general']
      }
    }
  ],
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/post.vue'
      }
    ]
  }
}
