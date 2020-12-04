<script>
  // Stores
  import {
    stageNumber,
    radio,
    stage,
    stakes,
    points,
    rolls,
    splashTime,
  } from "./store.js";
  import { onMount } from "svelte";
  // Components
  import Form from "./Form.svelte";
  import Button from "./Button.svelte";
  import Splash from "./Splash.svelte";
  import Card from "./Card.svelte";
  import Instructions from "./Instructions.svelte";
  import SideButton from "./SideButton.svelte";

  let formComplete = false;

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

  // Will be set in onMount().
  let currentStage;

  function incrementStage() {
    $stageNumber < 6 ? ($stageNumber += 1) : (currentStage = 0);
    $stage = stages[$stageNumber];
  }

  onMount(() => {
    $stageNumber = 0;
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
    padding: 1em;
    width: 35rem;
    margin: 0 auto 0 auto;
    padding: 5rem 5rem 0 5rem;
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
    <h2>Choose your wiretap!!!!!!!!!!</h2>
    <SideButton backNext="next" />
    <Card>
      <!-- TODO: Implement formComplete -->
      <Form />
    </Card>
  {:else if $stage === 'instructions'}
    <!-- TODO: Write instructions -->
    <Instructions />
  {:else if $stage === 'rollBegin'}
    <!-- TODO: write callbacks for buttons -->
    <Button buttonText={['roll']} />
  {:else if $stage === 'didIt'}
    <Button buttonText={['roll', 'give up']} />
  {:else if $stage === 'roll'}
    <h1>Roll</h1>
  {:else if ($stage = 'gameEnd')}
    <h1>GameEnd</h1>
  {/if}
</main>
