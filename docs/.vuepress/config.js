module.exports = {
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'I do I done',
      description: 'Writing about my accomplishment'
    },
    '/vi/': {
      lang: 'vi',
      title: 'I do I done',
      description: 'Xong xuôi'
    }
  },
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'idoidone/idoidone',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'idoidone/idoidone',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Nested', link: '/nested/' }
        ],
        sidebar: {
          '/': [/* ... */],
          '/nested/': [/* ... */]
        }
      },
      '/vi/': {
        selectText: 'Ngôn ngữ',
        label: 'Tiếng Việt',
        nav: [
          { text: 'Thư mục', link: '/vi/nested/' }
        ],
        algolia: {},
        sidebar: {
          '/vi/': [/* ... */],
          '/vi/nested/': [/* ... */]
        }
      }
    }
  }
};
