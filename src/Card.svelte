<script>
</script>

<style type="text/scss">
  .card {
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.09),
      0px 0px 15px -6px rgba(0, 0, 0, 0.31);
    border-radius: 0.25rem;
    padding: 1rem;
    width: 35rem;
    margin: 0 auto 0 auto;
    background-color: white;
  }
  @media (max-width: 640px) {
    .card {
      width: 75vw;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>

<div class="card">
  <slot />
</div>
