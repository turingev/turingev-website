import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import minify_html from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sass from "lume/plugins/sass.ts";
import feed from "lume/plugins/feed.ts";
import netlifyCMS from "lume/plugins/netlify_cms.ts";
import * as colors from "https://esm.sh/twind@0.16.19/colors";

const site = lume({
  src: "./src",
  location: new URL("https://turingev.de/"),
});

site
  .use(netlifyCMS())
  .use(jsx_preact())
  .use(mdx())
  .use(pagefind())
  .use(code_highlight())
  .use(sass())
  .use(tailwindcss({
    options: {
      theme: {
        screens: {
          sm: "480px",
          md: "720px",
          lg: "920px",
          xl: "1100px",
        },
        colors: {
          ...colors,
          primary: colors.teal[700],
          ["primary-dark"]: colors.teal[600],
          secondary: colors.gray[800],
          ["secondary-dark"]: colors.gray[700],
        },
        fontFamily: {
          sans: ["Montserrat", "sans-serif"],
        },
      },
    },
  }))
  .use(postcss())
  //.use(minify_html())
  .use(
    feed({
      title: "Turing e.V.",
      output: ["/feed.rss", "/feed.json"],
      query: "blog=true",
      sort: "date=desc",
      info: {
        title: "=site.title",
        description: "=site.description",
      },
      items: {
        title: "=title",
        description: "=excerpt",
      },
    }),
  )
  .copy("media")
  .copy("assets", ".")
  .copy("main.js")
  .remoteFile(
    "./code.css",
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles/github-dark.min.css",
  )
  .remoteFile(
    "./phosphor-icons-light.css",
    "https://unpkg.com/@phosphor-icons/web@2.0.3/src/light/style.css",
  )
  .remoteFile(
    "./Phosphor-Light.woff2",
    "https://unpkg.com/@phosphor-icons/web@2.0.3/src/light/Phosphor-Light.woff2",
  )
  .remoteFile(
    "./daisyui.css",
    "https://cdn.jsdelivr.net/npm/daisyui@2.6.0/dist/full.css",
  )
  .remoteFile(
    "./themes.css",
    "https://cdn.jsdelivr.net/npm/daisyui@2.6.0/dist/themes.css",
  );

export default site;
