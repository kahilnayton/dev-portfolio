const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kn/Desktop/codeProjects/dev-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/kn/Desktop/codeProjects/dev-portfolio/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/kn/Desktop/codeProjects/dev-portfolio/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/kn/Desktop/codeProjects/dev-portfolio/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kn/Desktop/codeProjects/dev-portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/kn/Desktop/codeProjects/dev-portfolio/src/pages/projects.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/kn/Desktop/codeProjects/dev-portfolio/src/templates/blog.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/Users/kn/Desktop/codeProjects/dev-portfolio/src/templates/project.js")))
}

