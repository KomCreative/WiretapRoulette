<script>
  import { techChoice } from "./store.js";

  export let formType;

  if (formType === "tech") {
    console.log("tech!");
  }
  if (formType === "devices") {
    console.log("devices!");
  }
</script>

<style type="text/scss">
  // Not sure how to best style this
  .form-button {
    display: flex;
    font-size: 1.5em;
    transition: 0.2s;

    &:hover {
      // border: 0.15em solid #00aa4d;
      // border-radius: 5em;
      cursor: pointer;
    }

    input {
      &:focus {
        border: 0.25em solid #00aa4d;
        border-radius: 5em;
      }
    }
  }

  // Submit button replaced by sidebuttons. Research if this is accessibility issue?
  // .submit {
  //

  //   &:hover,
  //   &:focus {
  //
  //   }

  //   &:active {
  //     transform: scale(0.95);
  //   }
  // }
</style>

<!-- Not sure if the label and input layout is the best for accessibility or styling -->
{#if formType === 'tech'}
  <label class="form-button" for="google">
    <input
      type="radio"
      name="company-name"
      id="google"
      bind:group={$techChoice.tech}
      value={'Hey Google'} />
    Google Home</label>

  <label class="form-button" for="amazon">
    <input
      type="radio"
      name="company-name"
      id="amazon"
      bind:group={$techChoice.tech}
      value={'Alexa'} />
    Amazon Echo</label>
{/if}
{#if formType === 'devices'}
  <label class="form-button" for="thermostat">
    <input
      type="checkbox"
      id="thermostat"
      name="devices"
      bind:checked={$techChoice.thermostat} />
    Thermostat
  </label>
  <label class="form-button" for="tv">
    <input
      type="checkbox"
      id="tv"
      name="devices"
      bind:checked={$techChoice.tv} />
    TV
  </label>
  <label class="form-button" for="lights">
    <input
      type="checkbox"
      id="lights"
      name="devices"
      bind:checked={$techChoice.lights} />
    Lights
  </label>
{/if}
