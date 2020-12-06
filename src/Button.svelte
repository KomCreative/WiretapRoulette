<script>
  // Transitions
  import { fade } from "svelte/transition";

  // Props
  // TODO implement prop to accept onCLick callback functions
  export let buttonText;
  export let onClick;
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

<!--  OnClick prop accepts array of functions because there are multiple buttons -->

{#if buttonText.length == 1}
  <button
    className="btn-wide"
    on:click={onClick[0]}
    transition:fade>{buttonText[0]}</button>
{:else if buttonText.length == 2}
  <button
    className="btn-narrow"
    on:click={onClick[0]}
    transition:fade>{buttonText[0]}</button>
  <button
    className="btn-secondary btn-narrow"
    on:click={onClick[1]}
    transition:fade>{buttonText[1]}</button>
{:else}
  <p className="errorText">Error: Check Console.</p>
  console.error("Button component will only accept an array of 1 or two
  strings.")
{/if}
