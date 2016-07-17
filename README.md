Randomize Text
--------------

A jquery Plugin to render text animated with random letters.


### Quick example 1

~~~ html
<div id="id"></div>

<script type="text/javascript">
  $('#id').randomizeText({text: "my text"});
</script>
~~~


### Quick example 2

~~~ html
<div class="text">some text 1</div>
<div class="text">some text 2</div>
<div class="text">some text 3</div>

<script type="text/javascript">
  $('.text').randomizeText();
</script>
~~~


### Options

~~~ javascript
options = {
  text: '', // content for the dom - overwrites present content
  refreshRate: 50, // refresh rate for the animation 50 = 20 "Frames" per Second
  timePerLetter: 50, // time till next letter pops up
  randomTime: 50, // refresh rate for the next random letter
  maxRandomTries: 10, // maximum tries till the correct letter pops up
  randomLetters: '' // custom random letters - if empty it will uses letters from text
}
~~~



![Text Animation](https://github.com/westberliner/jquery-randomizeText/raw/master/example.gif)


Inspired by AfterFX randomize Text.
