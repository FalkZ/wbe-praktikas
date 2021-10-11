<script lang="ts">
  export let compiled: string;

  import srcdoc from "./runner.html?raw";

  let iframe: HTMLIFrameElement;
  function update(code: string) {
    code = code.replace(/__base__/g, window.location.origin + window.location.pathname);
    iframe.contentWindow.postMessage(code, "*");
  }
  $: iframe && compiled && update(compiled);
</script>

<iframe class="Output" title="Rendered REPL" bind:this={iframe} {srcdoc} />
