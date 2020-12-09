<script>
  // Transitions
  import { fade } from "svelte/transition";

  export let backNext;
  export let onClick;
</script>

<style>
  .button-container {
    height: 100vh;
    position: fixed;
    top: 0;
    width: 6em;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
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
  }

  .left button::before {
    content: "◂ ";
  }

  .right button::after {
    content: " ▸";
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.15);
    cursor: pointer;
  }

  button:focus {
    background-color: rgba(255, 255, 255, 0.15);
    border: 0.5em solid white;
  }
</style>

<div
  class="{backNext === 'next' ? 'button-container right' : 'button-container left'}
  "
  transition:fade>
  <button on:click={onClick}>{backNext}</button>
</div>
