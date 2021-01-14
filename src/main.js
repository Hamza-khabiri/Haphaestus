// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from './layouts/Default.vue'

import VueSimpleMarkdown from 'vue-simple-markdown';
import 'vue-simple-markdown/dist/vue-simple-markdown.css';

import '~/assets/styles/reset.css';
import '~/assets/styles/variables.css';
import '~/assets/styles/global.css';

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel:"preconnect",
    href:"https://fonts.gstatic.com"
  });

  head.link.push({
    rel:"stylesheet",
    href:"https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
  });

  // Set default layout as a global component
  Vue.component("DefaultLayout", DefaultLayout)
  Vue.use(VueSimpleMarkdown)
}
