<script>
  import { phrase, phrases, techChoice, stakes, score } from "./store.js";

  // Creates a new array and then pushes each phrase a repeated number of times into it based off the likelihood number. Then a random index is chosen to grab a random phrase from this new array. The amount of times each phrase is pushed into the array is based off of the current game stakes number divided by the likelihood number and rounding that. 
  const getByLikelihood = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let printTimes = Math.round($stakes / arr[i].likelihoodNumber);

      for (let j = 0; j < printTimes; j++) {
        newArr.push(arr[i].id);
      }
    }
    let randomIndex = Math.floor(Math.random() * newArr.length);
    let chosenId = newArr[randomIndex];

    return chosenId;
  };

  // If the phrase has multiple options, this function is called to get one of the actions. This is not based off of likelihood number. 
  const getAction = (arr) => {
    // console.log("get action!");
    // console.log(arr);
    let randomAction = arr[Math.floor(Math.random() * arr.length)];
    return randomAction;
  };

  const roll = () => {
    console.log("roll start");

    // Get the id number for the phrase from our function
    let chosenIdNum = getByLikelihood($phrases.phraseList);
    // Use the id number to find the object in larger phrases object
    let newPhrase = $phrases.phraseList.filter((phrase)=>(phrase.id === chosenIdNum));

    // console.log($phrases);
    // console.log(getByLikelihood($phrases.phraseList));
    // console.log($phrases.phraseList.filter((phrase)=>(phrase.id === chosenIdNum)));

    // Check if it's a phrase with further options, and, if so, add further functionality. This is also based off of likelihood number and uses the same getByLikelihood function. Also calls the getAction function. 

    // TO DO: Make it so an option is removed once used, using filter
    if (newPhrase[0].options) {
      let chosenOptionId = getByLikelihood(newPhrase[0].options.options);
      let chosenOption = newPhrase[0].options.options[chosenOptionId - 1];
      let chosenOptionValue = chosenOption.optionsString;

      let chosenActionValue = getAction(newPhrase[0].options.actions);

      let chosenPhrase = newPhrase[0].say(
        chosenOptionValue,
        chosenActionValue
      );

      $phrase = `${$techChoice.tech}, ${chosenPhrase}`;
      // Creates a new phrases array without that specific option of the used phrase. Need to remove the entire phrase if out of options. 
      // This might work, but after many attempts runs into an error: "Uncaught (in promise) TypeError: chosenOption is undefined". Need to figure out why, but it does work for the most part. 
      for (let phrase of $phrases.phraseList) {
        if (phrase.id === chosenIdNum) {

          phrase.options.options = phrase.options.options.filter((option)=>(option.id !== chosenOption.id));
        
            if (phrase.options.options.length === 0) {
              $phrases.phraseList = $phrases.phraseList.filter((phrase)=>(phrase.id !== newPhrase[0].id));
            }
          
        }
      };

    } else {
      $phrase = `${$techChoice.tech}, ${newPhrase[0].say}`;
      // Creates a new phrases array without the used phrase. 
      $phrases.phraseList = $phrases.phraseList.filter((phrase)=>(phrase.id !== newPhrase[0].id));
    }

    let textToSpeech = new SpeechSynthesisUtterance($phrase);
    window.speechSynthesis.speak(textToSpeech);

    // Add 5 to stakes for now, we'll see
    $stakes += 5;
    $score += $stakes;
    // console.log($phrase);

    // console.log($phrases.phraseList);
  };

  roll();
</script>

<p>{$phrase}</p>
