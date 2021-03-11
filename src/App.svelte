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
    $stageNumber = 0;
    $score = 0;
    $stakes = 1;
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
  <svg
    width="4rem"
    version="1.1"
    id="deviceSVG"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 84.7 127.4"
    xml:space="preserve"
    ><style>
      .st0 {
        fill: none;
        stroke: #fff;
        stroke-width: 1.5778;
        stroke-miterlimit: 10;
      }

      .st1 {
        fill: #fff;
      }
    </style><path
      class="st0"
      d="M76.9 118.7c-9.5 1.5-21.7 2.4-35 2.4-12.8 0-24.6-.8-33.8-2.2 1.8 2.3 3.9 4.4 6.3 6.3 8.1.9 17.5 1.4 27.6 1.4 10.6 0 20.4-.6 28.8-1.6 2.2-1.8 4.3-4 6.1-6.3z"
    />
    <path
      class="st0"
      d="M82.3 75.7c-8.3.6-25.5 1.8-40.3 1.8-14.7 0-31.6-1.2-39.9-1.9L1 94.6c-.2 1.3-.2 2.6-.2 3.9 0 7.6 2.6 14.6 7.2 20.4 9.3 1.4 21.1 2.2 33.8 2.2 13.3 0 25.6-.9 35-2.4 4.4-5.8 7-12.7 7-20.2 0-1.5-.1-2.9-.3-4.3l-1.2-18.5zM57.6 1.8c.5.1 1 .1 1.5.2-.4-.1-.9-.1-1.5-.2zM59.9 2.1l1.5.3-1.5-.3zM62.1 2.5c.5.1.9.2 1.4.3-.4-.1-.9-.2-1.4-.3zM55.2 1.5l2.4.3c-.7-.1-1.5-.2-2.4-.3zM63.6 2.8l2.7.6-2.7-.6zM50.2 1.1c.6 0 1.2.1 1.7.1-.6-.1-1.1-.1-1.7-.1zM74.4 6.6c.4.2.7.5 1 .7-.2-.2-.6-.5-1-.7zM66.8 3.6l1.2.3c-.3 0-.7-.2-1.2-.3z"
    />
    <path
      class="st0"
      d="M78 11c0 5.7-16.1 10.3-35.9 10.3-19.8 0-35.9-4.6-35.9-10.3l-4 64.6c8.3.7 25.1 1.9 39.9 1.9 14.8 0 31.9-1.2 40.3-1.9L78 11zM73.6 6.2c.3.1.5.3.8.4-.2-.2-.5-.3-.8-.4zM68.6 4.1c.6.2 1.1.4 1.7.6-.5-.2-1.1-.4-1.7-.6zM70.8 4.9c.7.3 1.3.5 1.9.8-.5-.3-1.2-.5-1.9-.8z"
    />
    <path
      class="st0"
      d="M42.1 21.3C61.9 21.3 78 16.7 78 11c0-1.3-.9-2.6-2.5-3.8-.3-.2-.7-.5-1-.7-.3-.1-.5-.3-.8-.4-.3-.1-.6-.3-.9-.4-.6-.3-1.2-.6-1.9-.8-.2-.1-.3-.1-.5-.2-.5-.2-1.1-.4-1.7-.6-.2 0-.4-.1-.6-.1l-1.2-.3c-.2-.1-.4-.1-.6-.2-.8-.2-1.7-.4-2.7-.6-.5-.1-.9-.2-1.4-.3-.2 0-.5-.1-.7-.1L60 2.2c-.3 0-.5-.1-.8-.1-.5-.1-1-.2-1.5-.2l-2.4-.3-3.3-.3c-.6 0-1.1-.1-1.7-.1C47.7 1 45 .9 42.2.9 22.3.8 6.2 5.4 6.2 11c0 5.7 16.1 10.3 35.9 10.3z"
    />
    <ellipse class="st1" cx="32.6" cy="10.7" rx="2.4" ry=".8" />
    <ellipse class="st1" cx="51.5" cy="10.7" rx="2.4" ry=".8" />
    <ellipse class="st1" cx="42.1" cy="8" rx="2.4" ry=".8" />
    <ellipse class="st1" cx="42.1" cy="13.8" rx="2.4" ry=".8" />
  </svg>
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
      <legend>Choose your smart devices</legend>
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
      <Button buttonText={["try again"]} onClick={[() => initiate(0)]} />
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
