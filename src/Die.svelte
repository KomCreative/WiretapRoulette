<script>
</script>

<div id="wrapD3Cube">
  <div id="D3Cube">
    <div class="side" id="side1">
      <div class="dot solo" />
    </div>
    <div class="side" id="side2">
      <div class="dotContainer">
        <div class="dotRow">
          <div class="dot" />
        </div>
        <div class="dotRow right">
          <div class="dot" />
        </div>
      </div>
    </div>
    <div class="side" id="side3">
      <div class="dotContainer">
        <div class="dotRow">
          <div class="dot" />
          <div class="dot" />
        </div>
        <div class="dotRow">
          <div class="dot solo" />
        </div>
        <div class="dotRow">
          <div class="dot" />
          <div class="dot" />
        </div>
      </div>
    </div>
    <div class="side" id="side4">
      <div class="dotContainer">
        <div class="dotRow">
          <div class="dot" />
          <div class="dot" />
        </div>
        <div class="dotRow">
          <div class="dot" />
          <div class="dot" />
        </div>
      </div>
    </div>
    <div class="side" id="side5">
      <div class="dotContainer">
        <div class="dotRow left">
          <div class="dot" />
        </div>
        <div class="dotRow">
          <div class="dot solo" />
        </div>
        <div class="dotRow right">
          <div class="dot" />
        </div>
      </div>
    </div>
    <div class="side" id="side6">
      <div class="dotContainer">
        <div class="dotRow">
          <div class="dot" />
          <div class="dot" />
        </div>
        <div class="dotRow">
          <div class="dot" />
          <div class="dot" />
        </div>
        <div class="dotRow">
          <div class="dot" />
          <div class="dot" />
        </div>
      </div>
    </div>
  </div>
</div>

<style type="text/css">
  #wrapD3Cube {
    width: 250px;
    height: 213px;
    margin: 20px auto;
    --side-color: rgba(8, 26, 56, 0.8);
    --dot-color: rgba(255, 255, 255, 0.6);
  }
  .fadeIn {
    opacity: 100%;
    transition: all 0.5s;
  }
  .fadeOut {
    opacity: 0%;
    transition: all 0.5s;
  }
  .dot {
    background-color: var(--dot-color);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100rem;
  }
  .solo {
    margin: auto;
  }
  .dotContainer {
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    width: 80%;
    height: 80%;
  }
  .dotRow {
    display: flex;
    flex-flow: row nowrap;
    width: 85%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.25rem 0 0.25rem;
  }
  .left {
    justify-content: flex-start;
  }
  .right {
    justify-content: flex-end;
  }
  .side {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #D3Cube {
    width: 112px;
    height: 112px;
    top: 50px;
    transform-style: preserve-3d;
    transform: rotateX(-22deg) rotateY(0deg) rotateZ(0deg);
    margin: auto;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    animation: cubeRotation 3s infinite ease-in-out alternate;
  }
  @keyframes cubeRotation {
    0% {
      transform: rotateX(-22deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(-22deg) rotateY(-730deg) rotateZ(365deg);
    }
  }
  #D3Cube > div {
    position: absolute;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    width: 112px;
    height: 112px;
    overflow: hidden;
    opacity: 0.85;
  }
  #side1 {
    transform: rotatex(90deg) translateX(0px) translateY(0px) translateZ(56px);
    background-color: var(--side-color);
  }
  #side2 {
    transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    background-color: var(--side-color);
  }
  #side3 {
    transform: translateX(0px) translateY(0px) translateZ(56px);
    background-color: var(--side-color);
  }
  #side4 {
    transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(56px);
    background-color: var(--side-color);
  }
  #side5 {
    transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(56px);
    background-color: var(--side-color);
  }
  #side6 {
    transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(56px);
    background-color: var(--side-color);
  }
</style>
