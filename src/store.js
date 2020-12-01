// store.js
import { writable, readable } from 'svelte/store';

export const radio = writable({
    tech: ""
});

export const stakes = writable(0);

export const points = writable(0);

export const rolls = writable(0);

export const splashTime = readable(3000);

// splash, form, instructions, rollBegin, didIt, roll, gameEnd
export const stage = writable("splash");

export const buttonFunctions = readable({
    roll: () => {
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
    
          currentPhrase = `${$radio.tech}, ${chosenPhrase}`;
        } else {
          currentPhrase = `${$radio.tech}, ${newPhraseObject.say}`;
        }
    
        let textToSpeech = new SpeechSynthesisUtterance(currentPhrase);
        window.speechSynthesis.speak(textToSpeech);
      }
    })

export const phrases = readable({
    phraseList: [
        {
        id: 1,
        likelihoodNumber: 10,
        options: {
            // Options for different stake levels
            actions: ["raise", "lower"],
            // At which stakes this phrase is available
            options: [
            {
                id: 1,
                optionsString: "2",
                likelihoodNumber: 10,
            },
            {
                id: 2,
                optionsString: "5",
                likelihoodNumber: 8,
            },
            {
                id: 3,
                optionsString: "8",
                likelihoodNumber: 5,
            },
            {
                id: 4,
                optionsString: "10",
                likelihoodNumber: 2,
            },
            ],
        },
        say: function (option, action) {
            return `please ${action} the temperature by ${option} degrees.`;
        },
        },
        {
        id: 2,
        likelihoodNumber: 10,
        say: "do the thing",
        },
        {
        id: 3,
        likelihoodNumber: 5,
        say: "call your ex-boyfriend's mom's lawyer.",
        },
        {
        id: 4,
        likelihoodNumber: 3,
        say: "take me to the dark web.",
        },
        {
        id: 5,
        likelihoodNumber: 10,
        say: "is your refrigerator running?",
        },
        {
        id: 6,
        likelihoodNumber: 1,
        say: "blah 1",
        },
        {
        id: 7,
        likelihoodNumber: 3,
        say: "blah 3",
        },
        {
        id: 8,
        likelihoodNumber: 7,
        say: "blah 7",
        },
        {
        id: 9,
        likelihoodNumber: 10,
        say: "blah 10",
        },
        {
        id: 10,
        likelihoodNumber: 10,
        options: {
            // Options for different stake levels
            actions: ["on", "off"],
            // At which stakes this phrase is available
            options: [
            {
                id: 1,
                optionsString: "10",
                likelihoodNumber: 10,
            },
            {
                id: 2,
                optionsString: "20",
                likelihoodNumber: 8,
            },
            {
                id: 3,
                optionsString: "45",
                likelihoodNumber: 5,
            },
            {
                id: 4,
                optionsString: "60",
                likelihoodNumber: 2,
            },
            ],
        },
        say: function (option, action) {
            return `turn ${action} the tv in ${option} minutes.`;
        },
        }
    ]
});