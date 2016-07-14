(function($) {
  $.fn.randomizeText = function(options) {
    // options and defaults
    var settings = $.extend({
        text: "you need to add an text by adding {text:'my text'} as argument.",
        refreshRate: 50,
        timePerLetter: 120,
        randomTime: 50,
        randomLetters: [],
      },
      options
    );
    var renderArray = [],
        textArray = parseTextToArray(settings.text, false),
        maxRandomValue = textArray.length,
        el = this;

    if(settings.randomLetters.length == 0) {
      settings.randomLetters = parseTextToArray(settings.text, true);
    }

    var i = 0;
    // start gameloop
    setTimeout(function() {
      renderText(renderArray, el, settings.text, settings.refreshRate);
    }, settings.refreshRate);

    setTimeout(function() {
      addLetterToText(textArray, renderArray, settings);
    }, settings.timePerLetter);

    function parseTextToArray(text, cleanSpaces) {
      if(cleanSpaces) {
        text = text.replace(' ', '');
      }
      return text.split('');
    }

    function renderText(renderArray, el, targetText, refreshRate) {
      var a = [];
      $.each(renderArray, function(k, v){
        a.push(v.getLetter());
      });
      var t = a.join('');
      $(el[0]).html(t);

      if (targetText != t) {
        setTimeout(function() {
          renderText(renderArray, el, targetText, refreshRate);
        }, refreshRate);
      }
    }

    function addLetterToText(textArray, renderArray, settings) {
      var l = textArray.slice(renderArray.length, renderArray.length+1);
      var lo = new randomLetter(l[0], settings);
      renderArray.push(lo);

      if (renderArray.length < textArray.length) {
        setTimeout(function() {
          addLetterToText(textArray, renderArray, settings)
        }, settings.timePerLetter);
      }
    }

    randomLetter = function(l, settings) {
      this.letter = l;
      this.settings = settings;
      this.currentLetter = "";
      var letter = this;
      this.getLetter = function() {
        return this.currentLetter;
      };
      setTimeout(function() {
        generateRandomLetter(letter);
      }, settings.randomTime);

      function generateRandomLetter(letter) {
        var i = parseInt(Math.random()*letter.settings.randomLetters.length);
        letter.currentLetter = letter.settings.randomLetters[i];

        if(letter.letter != letter.currentLetter) {
          setTimeout(function() {
            generateRandomLetter(letter);
          }, settings.randomTime);
        }
      }
    }

  }

}(jQuery));