<script>
  import { stakes, stakesBar } from "./store.js";

  //   Just messing around, this can be anything
  const addToStakesBar = () => {
    $stakesBar += "⚡";
    console.log($stakesBar);
  };

  addToStakesBar();
</script>

<style>
  .stakes-container {
    border: 1px solid black;
    border-radius: 0.25rem;
    display: inline-block;
    height: 1.25em;
    margin: auto;
    margin-left: 1rem;
    width: 50vw;
  }
  .stakes-bar {
    height: 100%;
  }
</style>

<div class="stakes-container">
  <div class="stakes-bar">{$stakesBar}</div>
</div>
