module.exports = {
  title: 'PluralKit',
  theme: 'default-prefers-color-scheme',

  base: "/",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
    ['meta', { name: 'theme-color', content: '#da9317' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  evergreen: true,

  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-custom-header-link"));
    }
  },

  themeConfig: {
    repo: 'FirePowi/PluralKit',
    docsDir: 'docs/content/',
    docsBranch: 'doc-fr',
    editLinks: true,
    editLinkText: 'Aidez-nous à améliorer cette page !',
    lastUpdated: "Dernière mise à jour",
    nextLinks: true,
    prevLinks: true,
    nav: [
      { text: "Serveur de support [en anglais uniquement]", link: "https://discord.gg/PczBt78" },
      { text: "Inviter le bot", link: "https://discord.com/oauth2/authorize?client_id=466378653216014359&scope=bot%20applications.commands&permissions=536995904" }
    ],
    sidebar: [
      "/",
      ["https://discord.com/oauth2/authorize?client_id=466378653216014359&scope=bot%20applications.commands&permissions=536995904", "Ajouter à votre serveur"],
      {
        title: "Documentation",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/getting-started",
          "/user-guide",
          "/command-list",
          "/api-documentation",
          "/privacy-policy",
          "/faq",
          "/tips-and-tricks"
        ]
      },
      {
        title: "Pour l’administration de serveur",
        collapsable: false,
        children: [
          "/staff/permissions",
          "/staff/moderation",
          "/staff/disabling",
          "/staff/logging",
          "/staff/compatibility",
        ]
      },
      ["https://discord.gg/PczBt78", "Rejoindre le serveur de support [en anglais uniquement]"],
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      '@vuepress/google-analytics',
      {
        "ga": "UA-173942267-1"
      }
    ],
    ["vuepress-plugin-clean-urls", { normalSuffix: "/" }],
  ],
}
