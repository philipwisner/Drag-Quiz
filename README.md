# Drag Quiz
The best and most beautiful test of drag knowledge, because when it comes to Drag, the look matters.

<div style="text-align:center"><img src ="https://68.media.tumblr.com/707df698616357f756380ffe1895c9df/tumblr_n8ahacwyEJ1sar3c7o1_500.gif" /></div>

<br/>

## Introduction
When I was tasked to create a game for IronHack, the first thing that popped into my mind was trivia. I personally love trivia because I love learning random facts. But usually trivia games are very ugly and about boring things. So I decided to create a trivia game about the least boring thing I know.....Drag Queens. 

## Demo
* Play the game live [here](https://philipwisner.github.io/)
* Or play the game on my personal domain [here](https://)


## Development
Luckily for me trivia games are not as complex as other games because the base logic is pretty easy to comprehend. So because I wanted the game to be nicely designed, modern and responsive, I started with design first.
* I used Adobe Xd to create a the layout of all the cards.
* I then used Adobe Xd's prototype feature to link all the cards together to mirror the game's real flow.
* After that I then had to create the consistent background and basic card style layout that would be used throughout all of the game.
* After that was done, I went and created all of the different card layouts for each situation in HTML and CSS (using Sass).
* Then I took a break from the design to just create a simple quiz with a few questions to make sure I had a solid simple logic I could expand upon.
* Once the quiz logic was working I went back to the created cards and used jQuery to decide when each card should be shown, to mimick the gameflow I had already protoyped. 
* After doing that, I realized a huge flaw in my design. There was no way to go back to the previous card unless you refreshed the site and started from the beginning. That is when I created a minimalist toggle button menu on the button to give the user the ability to jump to sections of the game.
* Now that the card flow was working and I had all the designs, the fun part came of linking the two together.
* I first had to expand upon the logic of the quiz. I had to create lives and a timer.
* Then I started to link the questions to the already designed question cards.
* This of course resulted in some display issues and glitches that were fixed after some trial and error.
* With all question cards working, I then linked the correct and wrong cards, along with the game over cards.
* I then tweaked the score to be linked to how quickly you answer the question. I also made the timer get shorter the more points you got.
* The last thing I need to do is to randomize the order of the questions, and then repeat for multiple categories.

## Built with
* 375 lines of HTML
* 725 lines of [Sass](http://sass-lang.com/)
* 365 lines of JavaScript
* 72 lines of [jQuery](https://jquery.com/)
* Prototyping done with [Adobe Xd](https://www.adobe.com/products/experience-design.html)
* Styling done with [Materialize](https://materializecss.com/)
* & lots of Google Searches

## Bugs
* Sometimes the quiz will start loading from the category screen after reset.
* If you exit the game before finishing and try to start again, the timer will be buggy.


## To-do
* Randomize the order of the answers
* Create the quizzes for the other categories
* Create mix all deck option
* Add timer operation
* Clean up and restructure my code
* Rest..
