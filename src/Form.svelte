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

<!-- Not sure if the label and input layout is the best for accessibility or styling -->
{#if formType === "tech"}
  <label class="form-button radcont" for="google">
    <input
      type="radio"
      name="company-name"
      id="google"
      bind:group={$techChoice.tech}
      value={"Hey Google"}
    />
    <span class="radiobutton" />
    <span class="radiofocus" />
    Google Home</label
  >

  <label class="form-button radcont" for="amazon">
    <input
      type="radio"
      name="company-name"
      id="amazon"
      bind:group={$techChoice.tech}
      value={"Alexa"}
    />
    <span class="radiobutton" />
    <span class="radiofocus" />
    Amazon Echo</label
  >
{/if}
{#if formType === "devices"}
  <label class="form-button" for="thermostat">
    <input
      type="checkbox"
      id="thermostat"
      name="devices"
      bind:checked={$techChoice.thermostat}
    />
    Thermostat
  </label>
  <label class="form-button" for="tv">
    <input
      type="checkbox"
      id="tv"
      name="devices"
      bind:checked={$techChoice.tv}
    />
    TV
  </label>
  <label class="form-button" for="lights">
    <input
      type="checkbox"
      id="lights"
      name="devices"
      bind:checked={$techChoice.lights}
    />
    Lights
  </label>
{/if}

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

  // Hide radio input element
  .radcont input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  // Style span to replace radio input element
  .radiobutton {
    height: 1.3rem;
    width: 1.3rem;
    background-color: #eee;
    border-radius: 50%;
    border: solid 0.25rem rgb(211, 211, 211);
    margin-right: 0.3rem;
    margin-top: 0.175rem;
    transition: all 0.5s;
  }

  // Style focus span
  .radiofocus {
    position: absolute;
    height: 1.3rem;
    width: 1.3rem;
  }

  // Create pseudoelements for radio and focus spans
  .radiobutton:after,
  .radiofocus:after {
    content: "";
    display: none;
  }

  // Style focus span on focus of radio input
  .radcont input:focus ~ .radiofocus:after {
    display: block;
    position: absolute;
    height: 1.7rem;
    width: 1.7rem;
    border: solid 0.1rem red;
    margin-right: 0.3rem;
    margin-top: 0.175rem;
  }

  // Hide focus span when radio input is checked
  .radcont input:checked ~ .radiofocus:after {
    display: none;
  }

  // Set bg color on hover for radio span
  .radcont:hover input ~ .radiobutton {
    background-color: rgb(225, 225, 225);
  }

  // Show radio span pseudoelement when radio input is checked
  .radcont input:checked ~ .radiobutton:after {
    display: block;
  }

  // Set bordercolor of radio span when radio input is checked
  .radcont input:checked ~ .radiobutton {
    border-color: rgb(75, 75, 75);
  }

  // Style radio span pseudoelement
  .radcont .radiobutton:after {
    width: 1rem;
    height: 1rem;
    margin: 0.15rem auto auto auto;
    border-radius: 50%;
    background-color: rgb(75, 75, 75);
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
