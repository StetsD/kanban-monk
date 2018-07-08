module.exports = {
  srcDir: './frontend',
  mode: 'spa',
  generate: {
    dir: 'public'
  },
  head: {
    title: 'kanban-monk',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
		{rel: 'icon',type: 'image/x-icon',href: '/favicon.ico'},
		{href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic", rel: "stylesheet"},
		{href: "https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&amp;subset=cyrillic", rel: "stylesheet"}
	]
  },
  loading: {
    color: '#3B8070'
  },
  build: {
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
