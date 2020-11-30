<script>
  // Store
  import { radio, phrases, buttonFunctions } from "./store.js";

  // Transitions
  import { fade } from "svelte/transition";

  // Props
  export let buttonText;

  // Components

  let currentPhrase = "";
</script>

<style type="text/scss">
  button {
    background-color: #00aa4d;
    border: 0.25em solid white;
    border-radius: 5em;
    color: white;
    padding: 1em 2em;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2em;
    text-transform: uppercase;
    transition-duration: 0.4s;

    &:hover,
    &:focus {
      background-color: white;
      border: 0.25em solid #00aa4d;
      color: #00aa4d;
      cursor: pointer;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  h2 {
    font-size: 3em;
  }
</style>

<h2>{currentPhrase}</h2>

<button on:click={handleClick} transition:fade> {$button.buttonText} </button>
Press this
