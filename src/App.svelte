<script>
  // Stores
  import {
    stageNumber,
    techChoice,
    stage,
    stakes,
    score,
    rolls,
    splashTime,
    mainContentID,
  } from "./store.js";
  import { onMount } from "svelte";
  // Components
  import Form from "./Form.svelte";
  import Button from "./Button.svelte";
  import Splash from "./Splash.svelte";
  import Card from "./Card.svelte";
  import Instructions from "./Instructions.svelte";
  import SideButton from "./SideButton.svelte";
  import Phrase from "./Phrase.svelte";
  import StakesBar from "./StakesBar.svelte";
  import EndGame from "./EndGame.svelte";

  let formComplete = false;

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

  const incrementStage = () => {
    $stageNumber <= 6 ? ($stageNumber += 1) : (currentStage = 0);
    $stage = stages[$stageNumber];
  };

  const decrementStage = () => {
    $stageNumber >= 1
      ? ($stageNumber -= 1)
      : console.error("Stage already at 0.");
    $stage = stages[$stageNumber];
  };

  const giveUp = () => {
    $stageNumber = 6;
    $stage = stages[$stageNumber];
  };

  const initiate = (splashTime) => { 
    console.log("Timeout Initiated");
    setTimeout(() => {
      incrementStage();
      console.log("Timeout Ended. Stage: " + $stage);
    }, splashTime);
  };

  onMount(() => {
    initiate($splashTime);
  });
</script>

<main>
  <a id="skipToMain" href="#{$mainContentID}">Skip to main content</a>
  <h1>Welcome to WireTap Roulette</h1>

  {#if $stage === "splash"}
    <Splash />
  {:else if $stage === "form"}
    <fieldset id={$mainContentID}>
      <legend>Choose your wiretap</legend>
      <Card>
        <!-- TODO: Implement formComplete -->
        <Form formType="tech" />
      </Card>
    </fieldset>
    <fieldset>
      <legend>Choose your smart devices (optional)</legend>
      <Card>
        <Form formType="devices" />
      </Card>
    </fieldset>
    {#if $techChoice.tech}
      <p>Click the "next" button to proceed.</p>
      <SideButton onClick={incrementStage} backNext="next" />
    {/if}
  {:else if $stage === "instructions"}
    <!-- TODO: Write instructions -->
    <h2 id={$mainContentID}>Instructions</h2>
    <Card>
      <Instructions />
    </Card>
    <SideButton onClick={decrementStage} backNext="back" />
    <SideButton onClick={incrementStage} backNext="next" />
  {:else if $stage === "rollBegin"}
    <h2 id={$mainContentID}>Click roll to begin</h2>
    <Card>
      <!-- TODO: write callbacks for buttons -->
      <Button onClick={[incrementStage]} buttonText={["roll"]} />
    </Card>
  {:else if $stage === "didIt"}
    <Card>
      <Phrase />
      <Button
        onClick={[incrementStage, giveUp]}
        buttonText={["did it", "give up"]}
      />
    </Card>
  {:else if $stage === "roll"}
    <h2 id={$mainContentID}>Roll again?</h2>
    <Card>
      <p>score: {$score}</p>
      <div class="flex">
        <p>stakes:</p>
        <StakesBar />
      </div>
      <Button
        onClick={[decrementStage, giveUp]}
        buttonText={["roll", "give up"]}
      />
    </Card>
  {:else if $stage === "gameEnd"}
    <h2 id={$mainContentID}>Thanks for playing!</h2>
    <Card>
      <EndGame points={$score} />
      <Button buttonText={["try again"]} onClick={[() => location.reload()]} />
    </Card>
  {/if}
</main>

<style type="text/scss">
  $color: white;

  main {
    // padding: 1em;
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

  .flex {
    display: flex;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  fieldset {
    border: none;

    legend {
      color: white;
      margin-left: 1em;
      font-size: 1.5em;
    }
  }
</style>
