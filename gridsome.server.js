// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages( async ({ createPage, graphql }) => {
    const { data } = await graphql(`{
      allStrapiServices{
        edges{
          node{
            id,
            name,
            callToActionText,
            description,
            article
          }
        }
      }
    }`);

    data.allStrapiServices.edges.forEach(({node}) => {
      createPage({
        path: '/services/' + node.name.split(' ').join('-'),
        component: './src/templates/Service.vue',
        context: {
          id: node.id,
          name: node.name,
          callToActionText: node.callToActionText,
          description: node.description,
          article: node.article
        }
      })
    })
  })
}
