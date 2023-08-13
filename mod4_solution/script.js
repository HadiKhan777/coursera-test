(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
})();

(function () {
  var helloSpeaker = {}; // Create an empty object

  var speakWord = "Hello"; // Declare the speakWord variable

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;
})();

(function () {
  var byeSpeaker = {}; // Create an empty object

  var speakWord = "Good Bye"; // Declare the speakWord variable

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;
})();
(function () {

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // Use byeSpeaker's speak method
    } else {
      helloSpeaker.speak(names[i]); // Use helloSpeaker's speak method
    }
  }
})();
