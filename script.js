// STEP 1: Wrap the entire contents of script.js inside of an IIFE
(function () {

  // STEP 10: Create an array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 11: Loop over the names array
  for (var i = 0; i < names.length; i++) {

    // Get the current name
    var name = names[i];
    
    // Get the first letter and convert it to lower case for easy comparison
    var firstLetter = name.charAt(0).toLowerCase();

    // STEP 12: Conditional logic to decide which speaker to use
    if (firstLetter === 'j') {
      // If the first letter is 'j', use the byeSpeaker
      byeSpeaker.speak(name);
    } else {
      // Otherwise, use the helloSpeaker
      helloSpeaker.speak(name);
    }
  }

})();