<script>
  import { phrases } from "./store.js";

  const getByLikelihood = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let printTimes = arr[i].likelihoodNumber;
      for (let j = 0; j < printTimes; j++) {
        newArr.push(arr[i].id);
      }
    }
    let randomIndex = Math.floor(Math.random() * newArr.length);
    let chosenId = newArr[randomIndex];
    return chosenId;
  };

  const getAction = (arr) => {
    console.log("get action!");
    console.log(arr);
    let randomAction = arr[Math.floor(Math.random() * arr.length)];
    return randomAction;
  };
</script>

<p>{phrase}</p>
