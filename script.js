(function () {
<<<<<<< HEAD

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
=======
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
>>>>>>> 5caec10f4f6db56be6737fa67228261bbcaeec1a

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
<<<<<<< HEAD
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
=======
      byeSpeaker.speak(names[i]); // Use byeSpeaker's speak method
    } else {
      helloSpeaker.speak(names[i]); // Use helloSpeaker's speak method
    }
  }
})();
>>>>>>> 5caec10f4f6db56be6737fa67228261bbcaeec1a
