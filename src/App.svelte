<script lang="ts">
  import index from "./index.svx";
  import Wrapper from "./lib/Wrapper.svelte";

  const imp = import.meta.glob("./labs/*.svx");

  const getName = (path) => path.replace("./labs/", "").replace(".svx", "");

  let selected;
  let loading;
  let selectedComponent = index;

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
        }}
        class:active={!selected}
      >
        Home
      </p>
      {#each Object.keys(imp) as name}
        <p
          on:click={() => {
            selected = name;
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
