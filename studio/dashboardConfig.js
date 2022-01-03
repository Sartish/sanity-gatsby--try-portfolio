export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d2ef872738da9f486fdbb7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-try-portfolio-studio',
                  apiId: '0da5fbc1-9af3-40ed-b06f-b24b5b8221e9'
                },
                {
                  buildHookId: '61d2ef87eaa670c9b4c08fc5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-try-portfolio',
                  apiId: 'bcec7512-b8eb-4b68-92f2-6a67089ea0bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sartish/sanity-gatsby--try-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-try-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
