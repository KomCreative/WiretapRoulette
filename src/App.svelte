<script>
  // Stores
  import { radio, stage, stakes, points, rolls, splashTime } from "./store.js";
  import { onMount } from "svelte";
  // Components
  import Form from "./Form.svelte";
  import Button from "./Button.svelte";
  import Splash from "./Splash.svelte";

  let formComplete = false;
  let buttonText = "yo!";

  export let appName;

  // I think we can use "event forwarding" to work with events from children to parents - DA 10/16/20
  const stages = [
    "splash",
    "form",
    "instructions",
    "rollBegin",
    "didIt",
    "roll",
    "gameEnd",
  ];
  let currentStage;

  function incrementStage() {
    currentStage < 6 ? (currentStage += 1) : (currentStage = 0);
    $stage = stages[currentStage];
  }

  onMount(() => {
    currentStage = 0;
    console.log("Timeout Initiated");
    setTimeout(() => {
      incrementStage();
      console.log("Timeout Ended. Stage: " + $stage);
    }, $splashTime);
  });
</script>

<style type="text/scss">
  $color: #00aa4d;

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: $color;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>{appName}</h1>

  {#if $stage === 'splash'}
    <Splash />
  {:else if $stage === 'form'}
    <Form on:click={handleClick} />
    <Button {buttonText} />
  {:else if $stage === 'instructions'}
    <Instructions />
  {:else if $stage === 'rollBegin'}

  {:else if $stage === 'didIt'}

  {:else if $stage === 'roll'}{:else if ($stage = 'gameEnd')}{/if}
</main>
