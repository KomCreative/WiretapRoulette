<script>
  // Transitions
  import { fade } from "svelte/transition";

  export let backNext;
  export let onClick;
</script>

<style type="text/scss">
  .button-container {
    height: 100vh;
    position: fixed;
    top: 0;
    width: 6em;
  }

  .left {
    left: 0;

    button::before {
      content: "◂ ";
    }
  }

  .right {
    right: 0;

    button::after {
      content: " ▸";
    }
  }

  button {
    background-color: rgba(0, 0, 0, 0.15);
    border: none;
    color: white;
    font-size: 1em;
    font-weight: bold;
    height: 100%;
    text-align: center;
    text-decoration: none;
    transition: 0.2s;
    width: 100%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
      cursor: pointer;
    }

    &:focus {
      background-color: rgba(255, 255, 255, 0.15);
      border: 0.5em solid white;
    }
  }

    @media (max-width: 640px) {
      .button-container {
        border: 0.2em solid white;
        border-radius: 0.25rem;
        height: 5em;
        position: relative;
        width: 100%;
      }
    }
</style>

<div
  class="{backNext === 'next' ? 'button-container right' : 'button-container left'}
  "
  transition:fade>
  <button on:click={onClick}>{backNext}</button>
</div>
