<script lang="ts">
  import index from "./index.svx";
  import Wrapper from "./lib/Wrapper.svelte";

  let imp = import.meta.glob("./labs/*.svx");

  const getName = (path) =>
    path.replace("./labs/", "").replace(".svx", "").replace(/ /g, "_");

  imp = Object.fromEntries(
    Object.entries(imp).map(([name, mod]) => [getName(name), mod])
  );

  let selected;
  let loading = true;
  let selectedComponent = index;

  const hash = window.location.hash.replace("#", "");

  const load = imp[hash];

  console.log(hash, load);
  if (load) {
    load().then((c) => {
      selectedComponent = c.default;
      selected = hash;
      loading = false;
    });
    loading = false;
  }
  $: if (imp[selected]) {
    loading = true;
    imp[selected]().then((mod) => {
      loading = false;
      selectedComponent = mod.default;
    });
  } else {
    loading = false;
    selectedComponent = index;
  }
</script>

<svelte:head>
  <!-- <script src="https://unpkg.com/codemirror@5.49.2/lib/codemirror.js"></script> -->
</svelte:head>

<Wrapper>
  <div slot="nav">
    <h1>WBE Labs</h1>
    <nav>
      <p
        on:click={() => {
          selected = null;
          window.location.hash = "";
        }}
        class:active={!selected}
      >
        Home
      </p>
      {#each Object.keys(imp) as name}
        <p
          on:click={() => {
            selected = name;
            window.location.hash = name;
          }}
          class:active={selected === name}
        >
          {getName(name)}
        </p>
      {/each}
    </nav>
    <strong>Output:</strong>
  </div>
  {#if loading}
    loading...
  {/if}
  <svelte:component
    this={selectedComponent}
    on:mount={() => console.log("mount")}
  />
</Wrapper>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    /* text-align: center; */
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    /* color: #ff3e00; */
    /* text-transform: uppercase; */
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
    display: inline-block;
    background: #2a2139;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    padding: 5px 20px;
    cursor: pointer;
    margin: 5px;
    margin-left: 0;
  }

  .active {
    background: #7c2161;
    /*  */
    /* brown; */
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
