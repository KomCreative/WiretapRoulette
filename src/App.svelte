<script>
  // Stores
  import { radio, stage, stakes, points, rolls } from "./store.js";

  // Components
  import Form from "./Form.svelte";
  import Button from "./Button.svelte";

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
  let currentStage = 0;

  function handleClick() {
    currentStage < 6 ? (currentStage += 1) : (currentStage = 0);
    $stage = stages[currentStage];
    console.log($stage);
  }
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

  {#if ($stage = 'splash')}
    <Splash />
  {:else if ($stage = 'form')}
    <Form on:click={handleClick} />
    <Button {buttonText} />
  {:else if ($stage = 'instructions')}
    <Instructions />
  {:else if ($stage = 'rollBegin')}

  {:else if ($stage = 'didIt')}

  {:else if ($stage = 'roll')}{:else if ($stage = 'gameEnd')}{/if}
</main>
