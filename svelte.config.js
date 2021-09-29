import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  extensions: [".svelte", ".svx"],
  preprocess: [mdsvex({}), sveltePreprocess()],
};
