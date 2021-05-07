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
  import Speaker from "./Speaker.svelte";
  import Die from "./Die.svelte";

  let formComplete = false;

  // I think we can use "event forwarding" to work with events from children to parents - DA 10/16/20
  const stages = [
    "splash",
    "form",
    "instructions",
    "rollBegin",
    "didIt",
    "roll",
    "die",
    "gameEnd",
  ];

  // Will be set in onMount().
  let currentStage;
  let numStages = stages.length - 1;

  const incrementStage = () => {
    $stageNumber <= numStages ? ($stageNumber += 1) : (currentStage = 0);
    $stage = stages[$stageNumber];
  };

  // TODO - add parameter to decrementStage Calls,
  // get die working.
  const decrementStage = (num) => {
    $stageNumber >= 1
      ? ($stageNumber -= num)
      : console.error("Stage already at 0.");
    $stage = stages[$stageNumber];
  };

  const giveUp = () => {
    $stageNumber = numStages;
    $stage = stages[$stageNumber];
  };

  const autoAdvance = (time, stageName = "") => {
    console.log(stages.indexOf(stageName));
    if (stageName) {
      setTimeout(() => {
        $stageNumber = stages.indexOf(stageName);
        $stage = stages[$stageNumber];
        console.log("Timeout Ended. Proceeding to stage: " + $stage);
      }, time);
    } else {
      setTimeout(() => {
        incrementStage();
        console.log("Timeout Ended. Stage: " + $stage);
      }, time);
    }
  };

  const initiate = (splashTime) => {
    console.log("Timeout Initiated");
    autoAdvance(splashTime);
  };

  onMount(() => {
    initiate($splashTime);
  });
</script>

<main>
  <header>
    <a id="skipToMain" href="#{$mainContentID}">Skip to main content</a>
    <Speaker />
    <h1>Welcome to WireTap Roulette</h1>
  </header>

  {#if $stage === "splash"}
    <Splash />
  {:else if $stage === "form"}
    <fieldset id={$mainContentID}>
      <legend>Choose your wiretap</legend>
      <Card>
        <!-- TODO: Implement formComplete -->
        <Form formType="tech" />
        {#if $techChoice.tech}
          <p>Click the "next" button to proceed.</p>
        {/if}
      </Card>
    </fieldset>
    <fieldset>
      <legend>Choose your smart devices (optional)</legend>
      <Card>
        <Form formType="devices" />
      </Card>
    </fieldset>
    {#if $techChoice.tech}
      <div class="side-buttons">
        <SideButton onClick={incrementStage} backNext="next" />
      </div>
    {/if}
  {:else if $stage === "instructions"}
    <!-- TODO: Write instructions -->
    <h2 id={$mainContentID}>Instructions</h2>
    <Card>
      <Instructions />
    </Card>
    <div class="side-buttons">
      <SideButton onClick={[() => decrementStage(1)]} backNext="back" />
      <SideButton onClick={incrementStage} backNext="next" />
    </div>
  {:else if $stage === "rollBegin"}
    <h2 id={$mainContentID}>Click roll to begin</h2>
    <Card>
      <!-- TODO: write callbacks for buttons -->
      <Button onClick={[() => autoAdvance(1, "die")]} buttonText={["roll"]} />
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
        onClick={[() => autoAdvance(1, "die"), giveUp]}
        buttonText={["roll", "give up"]}
      />
    </Card>
  {:else if $stage === "die"}
    <Die onMount={[autoAdvance(3000, "didIt")]} />
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

  #skipToMain {
    background:  $color;
    height: 30px;
    left: 50%;
    padding: 8px;
    position: absolute;
    transform: translateY(-1000%);
    transition: transform 0.3s;
  }

  #skipToMain:focus {
    transform: translateY(0%);
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

  fieldset {
    border: none;

    legend {
      color: white;
      margin-left: 1em;
      font-size: 1.5em;
    }
  }

  @media (max-width: 640px) {
    main {
      width: 90vw;
      margin: 0 auto 0 auto;
      padding: 0 1rem 0 1rem;
    }

    h1 {
      font-size: 3em;
    }

    .side-buttons {
      display: flex;
      gap: .5em;
      margin: 1em auto;
    }
  }
</style>
