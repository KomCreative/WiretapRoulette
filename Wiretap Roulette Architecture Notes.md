# Wiretap Roulette Architecture Notes

## Existing Components:

* App
* Button
  * Props:
    * Button content
      * Takes an array of 1-2 strings representing button text. 
      * arr.length()==1 ? render one 100% button containing arr[0] : render two 1fr buttons with arr[0] as positive response (e.g. "Did it") and arr[1] as negative response (e.g. "Gave up")
    * Action
      * Array of functions (1-2, 1 for each button) to be initiated via onClick 

## Components to Make:

* Splash screen
  * Displays welcome & logo
* Card
  * Standard reusable card
* Side-Button
  * Props:
    * Content
      * Text content of the button
    * Action
      * Function
    * Position
      * Left or right
* Instructions
* Form
  * Props:
    * Selection type 
      * Radio / Checkbox
* Roll
  * Props: 
    * Stakes
  * Renders:
    * Button
* Stakes Bar
  * Props:
    * Stakes
* Points
  * Props: 
    * Points
* Done / Gave Up
  * Props:
    * Phrase
    * Button text
  * Renders:
    * Phrase
    * Button
* Roll Again
  * Props:
    * Points
    * Stakes
    * Button Text
  * Renders: 
    * Points
    * Stakes Bar
    * Button

## Notes & Other To-Dos

* Change the likelihood multiplier by stakes level
* Separarate phrases by device types, e.g.:

``` javascript
const phrases = {
    thermostat: [
      {phrase 1},
      {phrase 2},
      {phrase 3}
      {etc...}
    ],
    lights: [
      {phrase 4},
      {phrase 5},
      {phrase 6}
      {etc...}
    ],
};
```

* Phrase should be spoken immediately on roll; user must then indicate whether they stopped the command. 