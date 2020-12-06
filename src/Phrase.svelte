<script>
  import { phrase } from "./store.js";
  import { phrases } from "./store.js";
  import { techChoice } from "./store.js";

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

  const roll = () => {
    // Get the id number for the phrase from our function
    let chosenIdNum = getByLikelihood($phrases.phraseList);
    // Use the id number to find the object in larger phrases object
    let newPhraseObject = $phrases.phraseList[chosenIdNum - 1];

    // Check if it's a phrase with further options, and, if so, add further functionality.
    if (newPhraseObject.options) {
      let chosenOptionId = getByLikelihood(newPhraseObject.options.options);
      let chosenOption = newPhraseObject.options.options[chosenOptionId - 1];
      let chosenOptionValue = chosenOption.optionsString;

      let chosenActionValue = getAction(newPhraseObject.options.actions);

      let chosenPhrase = newPhraseObject.say(
        chosenOptionValue,
        chosenActionValue
      );

      $phrase = `${$techChoice.tech}, ${chosenPhrase}`;
    } else {
      $phrase = `${$techChoice.tech}, ${newPhraseObject.say}`;
    }

    let textToSpeech = new SpeechSynthesisUtterance($phrase);
    window.speechSynthesis.speak(textToSpeech);

    console.log($phrase);
  };

  roll();
</script>

<p>{$phrase}</p>
