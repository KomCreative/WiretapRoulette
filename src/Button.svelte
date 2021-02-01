<script>
  // Transitions
  import { fade } from "svelte/transition";

  // Props
  // TODO implement prop to accept onCLick callback functions
  export let buttonText;
  export let onClick;
</script>

<!--  OnClick prop accepts array of functions because there are multiple buttons -->

{#if buttonText.length == 1}
  <div class="btn-container">
    <button class="btn-wide" on:click={onClick[0]} transition:fade
      >{buttonText[0]}</button
    >
  </div>
{:else if buttonText.length == 2}
  <div class="btn-container">
    <button class="btn-narrow" on:click={onClick[0]} transition:fade
      >{buttonText[0]}</button
    >
    <button
      class="btn-secondary btn-narrow btn-quit"
      on:click={onClick[1]}
      transition:fade>{buttonText[1]}</button
    >
  </div>
{:else}
  <div class="btn-container">
    <p class="errorText">Error: Check Console.</p>
    console.error("Button component will only accept an array of 1 or two strings.")
  </div>
{/if}

<style type="text/scss">
  .btn-container {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    margin: 0 auto;
    width: 90%;
  }

  button {
    background: linear-gradient(
      315deg,
      rgba(43, 111, 187, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    border: 0.15em solid white;
    border-radius: 0.5em;
    color: white;
    padding: 0.25em 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2em;
    transition-duration: 0.4s;
    height: 100%;
    width: 90%;

    &:hover,
    &:focus {
      background: white;
      border: 0.15em solid rgba(43, 111, 187, 1);
      color: rgba(43, 111, 187, 1);
      cursor: pointer;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .btn-wide {
    width: 100%;
  }

  .btn-narrow {
    width: 50%;
  }

  .btn-quit {
    background: rgb(185, 185, 185);
  }

  h2 {
    font-size: 3em;
  }
</style>
