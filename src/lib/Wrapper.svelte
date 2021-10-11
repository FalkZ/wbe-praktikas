<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import Output from "./Output.svelte";

  import "../styles/prism.css";

  let code = "";

  const addClickListener = () => {
    console.log("updatedClick");
    [...document.querySelectorAll("pre.language-js")].forEach((element) => {
      element.addEventListener(
        "click",
        ({ target }) => {
          code = "";
          setTimeout(() => {
            code = element.textContent;
          });
        },
        true
      );
    });
  };

  if (import.meta.hot) {
    import.meta.hot.on("vite:beforeUpdate", () => {
      setTimeout(addClickListener, 100);
      setTimeout(addClickListener, 500);
      setTimeout(addClickListener, 1000);
    });
  }
  afterUpdate(addClickListener);
</script>

<div class="grid">
  <aside>
    <slot name="nav" />
    <Output compiled={code} />
  </aside>
  <main>
    <div class="content">
      <slot />
    </div>
  </main>
</div>

<style>
  :global(html, body, #app) {
    height: 100%;

    margin: 0;
  }
  main :global(pre.language-js)::before {
    display: block;
    content: " ";
  }

  main :global(pre.language-js):hover::before {
    display: block;
    content: "▶ run";
  }

  main {
    overflow-y: scroll;
  }
  .content {
    padding: 20px;
  }
  .grid {
    display: grid;

    grid-template-columns: minmax(410px, 1fr) minmax(300px, 800px);
    height: 100%;
    /* grid-gap: 20px; */

    box-sizing: border-box;
  }
  .grid :global(.Output) {
    box-sizing: border-box;
    border: 1px dotted #ccccccaa;
    height: 100%;
    width: 100%;
    display: block;
  }

  aside {
    box-sizing: border-box;
    padding: 20px;
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100%;
  }
</style>
