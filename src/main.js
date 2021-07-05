import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "@/assets/code-highlight.css"

export default function(Vue, { head }) {
  library.add([ faFacebook, faTwitter, faLinkedin, faEnvelopeOpenText ])
  Vue.component("Layout", DefaultLayout);
  Vue.component('AppIcon', FontAwesomeIcon)
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
